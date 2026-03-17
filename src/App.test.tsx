import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('wagmi', () => ({
  WagmiProvider: ({ children }) => children,
}))

vi.mock('@rainbow-me/rainbowkit', () => ({
  RainbowKitProvider: ({ children }) => children,
}))

vi.mock('../wagmi', () => ({
  config: {},
}))

describe('App render', () => {
  it('renders home content without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/invest in real estate with/i)).toBeInTheDocument()
  })
})
