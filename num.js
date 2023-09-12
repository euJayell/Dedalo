function fibonacciSequence(length) {
  
  if(length < 0) { return undefined }
  let fibonacci = length === 1 ? [0] : (length === 0) ? [] : [0, 1]
  
  for(let i = 1; i < length; i++) {
    if(fibonacci[i] === undefined){ fibonacci.push(fibonacci[i-1] + fibonacci[i-2]) }
  } return fibonacci
}
