// Find the divisors!
function divisors(integer) {
  let result = []
  for (let i = 1; i < integer; i++) {
    if (integer % i == 0) {
        if (i > 1) result.push(i)
    }
  }
  if (result.length != 0) {
    return result
  } else return integer + " is prime"
}

console.log(divisors(15));