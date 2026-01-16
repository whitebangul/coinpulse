import React from 'react';
import { Separator } from '@/components/ui/separator';
import CandleStickChart from '@/components/CandleStickChart';
import CoinHeader from '@/components/CoinHeader';

const LiveDataWrapper = ({ children, coinId, poolId, coin, coinOHLCData }: LiveDataProps) => {
  return (
    <section id={'live-data-wrapper'}>
      <CoinHeader
        name={coin.name}
        image={coin.image.large}
        livePrice={coin.market_data.current_price.usd}
        livePriceChangePercentage24h={coin.market_data.price_change_percentage_24h_in_currency.usd}
        priceChangePercentage30d={coin.market_data.price_change_percentage_30d_in_currency.usd}
        priceChange24h={coin.market_data.price_change_24h_in_currency.usd}
      />
      <Separator className="divider" />

      <div className="trend">
        <CandleStickChart coinId={coinId} data={coinOHLCData}>
          <h4>Trend Overview</h4>
        </CandleStickChart>
      </div>
    </section>
  );
};

export default LiveDataWrapper;
