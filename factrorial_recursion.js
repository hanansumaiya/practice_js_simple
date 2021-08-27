//6! = 6*5*4*3*2*1
// function factorial(number) {
//   let fact = 1;
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(factorial(6));
//////////////////////
///// Decrement recursion
function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(5));
