# Crypto Tracker

A modern, real-time cryptocurrency tracking application built with Next.js 16, Tailwind CSS, and the CoinGecko API.

## Features

- **Real-time Market Data**: Track live prices, market caps, and volume for thousands of cryptocurrencies.
- **Interactive Charts**: Professional candlestick charts powered by `lightweight-charts` for detailed price analysis.
- **Trending Coins & Categories**: Stay updated with the most popular coins and market sectors.
- **Advanced Search**: Quickly find any token by name or symbol with a fast, debounced search modal (⌘K).
- **Coin Details**: In-depth information for each coin, including market stats, exchange listings, and social links.
- **Currency Converter**: Built-in tool to convert coin prices to various fiat and cryptocurrencies.
- **Responsive Design**: Fully optimized for all device sizes with a sleek, dark-themed UI.
- **Optimized Performance**: Leverages Next.js Server Components and SWR for efficient data fetching and caching.

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Fetching**: [SWR](https://swr.vercel.app/) & Native Fetch API
- **Charts**: [Lightweight Charts](https://github.com/tradingview/lightweight-charts)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- A CoinGecko API Key (Demo keys work fine)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/whitebangul/coinpulse.git
   cd coinpulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your CoinGecko API credentials:
   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the codebase using Prettier.

## License

This project was created with lessons from JavaScript Mastery.
