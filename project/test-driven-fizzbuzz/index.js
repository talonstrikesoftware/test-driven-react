module.exports = (num) => {
  if ((num % 3 === 0) && (num % 5 === 0)) {
    return `FizzBuzz`;
  }
  else if (num % 3 === 0) {
    return `Fizz`;
  }
  if (num % 5 === 0) {
    return `Buzz`;
  }
  else {
    return `${num}`;
  }
}