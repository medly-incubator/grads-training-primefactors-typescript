import { primeFactorize } from '../../src/PrimeFactorsCalculator'


describe("Prime Factors Calculator Test", () => {

  it("should calculate the prime factors of 2", () => {
    const factors: number[] = primeFactorize(2)
    expect(factors).toStrictEqual([2])
  })

  it("should prime factorize 3", () => {
    const factors = primeFactorize(3)
    expect(factors).toStrictEqual([3])
  })

  it("should prime factorize 4", () => {
    const factors = primeFactorize(4)
    expect(factors).toStrictEqual([2, 2])
  })

  it("should prime factorize 8", () => {
    const factors = primeFactorize(8)
    expect(factors).toStrictEqual([2, 2, 2])
  })

  it("should prime factorize 9", () => {
    const factors = primeFactorize(9)
    expect(factors).toStrictEqual([3, 3])
  })

})