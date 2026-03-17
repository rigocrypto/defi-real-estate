import { properties, userPortfolio } from './mockData'

describe('mockData', () => {
  it('has at least one property', () => {
    expect(properties.length).toBeGreaterThan(0)
  })

  it('has unique property ids', () => {
    const ids = properties.map((property) => property.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has a valid user portfolio summary', () => {
    expect(userPortfolio.totalProperties).toBeGreaterThan(0)
    expect(userPortfolio.totalInvested).toBeGreaterThan(0)
  })
})
