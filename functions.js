function isPrimeNumber(number, isInt = false) {
  
  number = BigInt(number)
  const n = isInt ? (number < 0n ? -number : number) : number 
  const intN = Number(n)
  
  const oddNonTwo = n % 2n === 0n && n !== 2n 
  const diffOne = n <= 1n
  
  if(diffOne || oddNonTwo) { return false } 
  
  if(Number.isSafeInteger(intN)) {
    
    for( let i = 3n; i <= Math.sqrt(intN); i++) {
      if(n % i === 0n) { return false }
    } return true
    
  } else { console.log('cannot continue operation cause the number isn\'t safe') }

}

function getPrimeNumbers(end, start = 2) {
  
  end = BigInt(end)
  start = BigInt(start)
  
  if(end < start) { return null }
  
  if(end - start >= 2000n){ return console.log('a range greater than 2000 numbers can result an error, split your numbers range for a successfully usable')}
  
  const startInd = start % 2n === 0n ? start + 1n : start
  let primes = start > 2n ? [] : [2n]
  
  for( let i = startInd; i <= end; i += 2n) { if(isPrimeNumber(i)) { primes.push(i) } 
  } return primes
  
}

function getTwinPrimeNumbers(end, start = 2) {
  
  end = BigInt(end)
  start = BigInt(start)
  
  if(end < start) { return null }
  
  if(end - start >= 2000n){ return console.log('a range greater than 2000 numbers can result an error, split your numbers range for a successfully usable')}
  
  const startInd = start % 2n === 0n ? start + 1n : start;

  let twins = [];

  for (let i = startInd; i <= end - 2n; i += 2n) {
    
    if (isPrimeNumber(i) && isPrimeNumber(i + 2n)) {
      twins.push([i, i + 2n])
    }
    
  } return twins
  
}

function getPrimorial(prime, first = 2) {
  
  prime = BigInt(prime)
  first = BigInt(first)
  
  const range = prime - first + 1n
  const instances = range / 2000n
  const overflow = range % 2000n
  
  let result = 1n
  
  for( let t = 0n; t <= instances; t++) {
    let start  = t * 2000n + 1n
    let end = (t-instances !== 0n ? 2000n * (t + 1n) : 2000n * (t) + 1n) + (t - instances === 0n ? 1n : 0n)*overflow
    let primes = getPrimeNumbers(end, start)
    
    console.log(`start: ${start} | end: ${end} | primes: ${primes}`)
    
    for(number of primes) { result *= number }
  } return result
  
}

function getNextPrimeNumber(prime) {
  
  let p = BigInt(prime)
  let next = p + 2n
  const check = isPrimeNumber(p)
  
  if(!check) { while (!isPrimeNumber(p)) { p += 1n } return p }
  
  while (!isPrimeNumber(next)) { next += 2n } return next
  
}
