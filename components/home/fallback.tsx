import React from 'react';
import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image animate-pulse bg-dark-400" />
        <div className="info">
          <div className="header-line-sm animate-pulse bg-dark-400 rounded-md" />
          <div className="header-line-lg animate-pulse bg-dark-400 rounded-md" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton animate-pulse bg-dark-400/50" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cell: () => (
        <div className="flex items-center gap-2">
          <div className="name-image animate-pulse bg-dark-400" />
          <div className="name-line animate-pulse bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cell: () => (
        <div className="price-change">
          <div className="change-icon animate-pulse bg-dark-400" />
          <div className="change-line animate-pulse bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: 'Price',
      cell: () => <div className="price-line animate-pulse bg-dark-400 rounded-md" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div id="trending-coins">
        <DataTable
          data={[1, 2, 3, 4, 5, 6]}
          columns={columns}
          rowKey={(i) => i}
          tableClassName="trending-coins-table"
          headerClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};

export const CategoriesFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Category',
      cell: () => <div className="w-24 h-4 animate-pulse bg-dark-400 rounded-md" />,
    },
    {
      header: 'Top Gainers',
      cell: () => (
        <div className="flex gap-1">
          <div className="w-7 h-7 animate-pulse bg-dark-400 rounded-full" />
          <div className="w-7 h-7 animate-pulse bg-dark-400 rounded-full" />
          <div className="w-7 h-7 animate-pulse bg-dark-400 rounded-full" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cell: () => <div className="w-16 h-4 animate-pulse bg-dark-400 rounded-md" />,
    },
    {
      header: 'Market Cap',
      cell: () => <div className="w-20 h-4 animate-pulse bg-dark-400 rounded-md" />,
    },
    {
      header: '24h Volume',
      cell: () => <div className="w-20 h-4 animate-pulse bg-dark-400 rounded-md" />,
    },
  ];

  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>
      <DataTable
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        columns={columns}
        rowKey={(i) => i}
        tableClassName="mt-3"
      />
    </div>
  );
};
