import { beforeEach, describe, expect, it, vi } from 'vitest'

const renderMock = vi.fn()
const createRootMock = vi.fn(() => ({ render: renderMock }))

vi.mock('react-dom/client', () => ({
  default: { createRoot: createRootMock },
  createRoot: createRootMock,
}))

vi.mock('./App', () => ({
  default: () => null,
}))

describe('main bootstrap', () => {
  beforeEach(() => {
    vi.resetModules()
    renderMock.mockClear()
    createRootMock.mockClear()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('creates root and renders app without crashing', async () => {
    await import('./main.jsx')

    expect(createRootMock).toHaveBeenCalledTimes(1)
    expect(renderMock).toHaveBeenCalledTimes(1)
  })
})
