module.exports = function reverse (n) {
  let absN = Math.abs(n)
  let result = +(absN.toString().split('').reverse().join(''))
  return result
}
