import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
const invalidProjectId = !projectId || projectId === 'your_real_project_id_here' || projectId === 'YOUR_PROJECT_ID';

if (invalidProjectId) {
  console.warn(
    '[wagmi] VITE_WALLETCONNECT_PROJECT_ID is not set. Copy .env.example to .env and set a real WalletConnect Project ID from https://cloud.walletconnect.com.'
  );
}

export const config = getDefaultConfig({
  appName: 'DeFi Real Estate',
  projectId: invalidProjectId ? 'YOUR_PROJECT_ID' : projectId,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(import.meta.env.VITE_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: false,
});
