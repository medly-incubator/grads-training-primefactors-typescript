export const primeFactorize = (input: number) : number[] => {
  let output: number[] = []
  let divisor = 2
  while(input > 1 ){
    while(input % divisor == 0){
      output.push(divisor)
      input = input / divisor
    }
    divisor += 1
  }
  return output
}