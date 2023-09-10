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

function getNextPrimeNumber(prime, isInt = false) {
  
  let p = BigInt(prime)
  let next = p + 1n
  

  while (!isPrimeNumber(next, isInt)) { 
    const mod = (next < 0n) ? ( (next % 2n) * -1n) : next % 2n
    
    if( next === 1n || next === 2n ) { next++ }
    else { next = next + 1n + mod }
  } return next
  
}

function getPreviousPrimeNumber(prime, isInt = false) {
  
  if(prime <= 2n && !isInt) { return null }

  let p = BigInt(prime)
  let next = p - 1n
  
  while (!isPrimeNumber(next, isInt)) { 
    const mod = (next < 0n) ? ( (next % 2n) * -1n) : next % 2n
    
    if( -2 <= next <= 3 && next !== -1 ) { next-- }
    else { next = next - 1n - mod }
  } return next
  
}
