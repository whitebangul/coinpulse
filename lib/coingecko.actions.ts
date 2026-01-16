'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

export async function searchCoins(query: string): Promise<any[]> {
  if (!query) return [];

  try {
    const searchData = await fetcher<{
      coins: { id: string; name: string; symbol: string; thumb: string }[];
    }>('/search', { query });

    const topCoinIds = searchData.coins
      .slice(0, 10)
      .map((coin) => coin.id)
      .join(',');

    if (!topCoinIds) return [];

    const marketData = await fetcher<CoinMarketData[]>('/coins/markets', {
      vs_currency: 'usd',
      ids: topCoinIds,
    });

    return marketData.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      thumb: coin.image, // Map 'image' to 'thumb'
      data: {
        price: coin.current_price, // As a number for formatCurrency()
        price_change_percentage_24h: coin.price_change_percentage_24h, // As a number
      },
    }));
  } catch (error) {
    console.error('Failed to search and merge coin data:', error);
    return [];
  }
}

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${BASE_URL}/${endpoint}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true },
  );

  const response = await fetch(url, {
    headers: {
      'x-cg-demo-api-key': API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

    throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText} `);
  }

  return response.json();
}

export async function getPools(
  id: string,
  network?: string | null,
  contractAddress?: string | null,
): Promise<PoolData> {
  const fallback: PoolData = {
    id: '',
    address: '',
    name: '',
    network: '',
  };

  if (network && contractAddress) {
    try {
      const poolData = await fetcher<{ data: PoolData[] }>(
        `/onchain/networks/${network}/tokens/${contractAddress}/pools`,
      );

      return poolData.data?.[0] ?? fallback;
    } catch (error) {
      console.log(error);
      return fallback;
    }
  }

  try {
    const poolData = await fetcher<{ data: PoolData[] }>('/onchain/search/pools', { query: id });

    return poolData.data?.[0] ?? fallback;
  } catch {
    return fallback;
  }
}
