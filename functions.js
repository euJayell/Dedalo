function isPrimeNumber(number, isInt = false) {
  
  number = BigInt(number)
  const n = isInt ? (number < 0n ? -number : number) : number 
  const intN = Number(n)
  
  const oddNonTwo = n % 2n === 0n && n !== 2n 
  const diffOne = n <= 1n
  
  if(diffOne || oddNonTwo) { return false } 
  
  if(Number.isSafeInteger(intN)) {
    
    for( let i = 3n; i < Math.sqrt(intN); i++) {
      if(n % i === 0n) { return false }
    } return true
    
  } else { console.log('cannot continue operation cause the number isn\'t safe') }

}
