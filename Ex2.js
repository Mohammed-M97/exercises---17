// Find the stray number
function stray(numbers) {
  let result = numbers.sort()
  if (result[0] == result[1]) {
    return result[result.length - 1]
  } else return result[0]
}

console.log(stray([2,2,2,2,2,2,2,2,2,4]));