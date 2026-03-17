# DeFi Real Estate

A decentralized real estate platform built with React, Vite, and Web3 technologies.

## Features

- Browse and explore real estate properties
- Connect wallet using RainbowKit
- Built with modern React and Vite
- Styled with Tailwind CSS
- Web3 integration with Wagmi and Viem

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Create a local env file:
   ```bash
   copy .env.example .env
   ```
3. Set your WalletConnect project ID in `.env`
2. Install dependencies:
   ```bash
   npm ci
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

- `VITE_WALLETCONNECT_PROJECT_ID` - required for RainbowKit / WalletConnect integration
- `VITE_ENABLE_TESTNETS` - set to `true` to include Sepolia in the wagmi chain list
- `PORT` - optional Express server port override; defaults to `5025`

## Available Scripts

- `npm run dev` - Start frontend development server (Vite on port 3000)
- `npm run server` - Start the Express API server (port 5025)
- `npm run dev:full` - Start frontend and backend in parallel
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks with no emit
- `npm run test:run` - Run tests once in CI mode

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi, Viem, RainbowKit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── context/       # React context providers
├── utils/         # Utility functions and types
└── styles/        # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request