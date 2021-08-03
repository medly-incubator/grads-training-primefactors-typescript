import { primeFactorize } from '../../src/PrimeFactorsCalculator'


describe("Prime Factors Calculator Test", () => {

  it("should calculate the prime factors of 2", () => {
      const factors: number[] = primeFactorize(2)
      expect(factors).toStrictEqual([2])
  })


})