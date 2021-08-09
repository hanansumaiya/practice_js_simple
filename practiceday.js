//////////////////////////////////////////!!!!!!!!!!!!    1
var price = 300;
var name = "Sumaiya";
var isRaining = true;
//////////////////////////////////////////!!!!!!!!!!!!    2 & 3 & 4 5 & 6
const firstNumber = 142;
const secondNumber = 512;
const sum = firstNumber + secondNumber;
const differ = firstNumber - secondNumber;
const multiply = firstNumber * secondNumber;
const divide = firstNumber / secondNumber;
console.log("Adding two numbers", sum);
console.log("Difference two numbers", differ);
console.log("Multiplications two numbers", multiply);
console.log("Dividing two numbers", divide);
if (firstNumber > secondNumber) {
  console.log(firstNumber, "is a big number then second one");
} else {
  console.log(secondNumber, "is a big number than first one");
}
//////////
if (firstNumber == secondNumber) {
  console.log("Two numbers are equal");
} else {
  console.log("Two numbers are not same");
}
/////////
const p = firstNumber % 2 == 0 ? "even" : "odd";
console.log(firstNumber, "is", p);
const q = secondNumber % 2 == 0 ? "even" : "odd";
console.log(secondNumber, "is", q);
/////////////////////////////
function leapyear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(leapyear(2016));
//
//
//
//////////////////////////////////////////!!!!!!!!!!!!    7
let i = 0;
while (i <= 20) {
  if (i >= 7 && i <= 19 && i % 2 != 0) {
    console.log("7 to 19 :", i);
  }
  i++;
}
//////////////////////////////////////////!!!!!!!!!!!!    8
//
//
//
let arr = [8, 6, 4, 36, 34, 23, 12, 7, 89, 81, 6, 94, 103, 3];
////////////
let arrayLength = arr.length;
console.log("Array length ", arrayLength);
arr[3] = 136;
console.log("New Array:", arr);
let arrSum = arr[4] + arr[6];
console.log("2 array element adding:", arrSum);
let arrSplice = arr.splice(8, 1);
console.log("1 array element delete:", arrSplice);
console.log("After delete 1 element NEW array:", arr);

//////////////////////////////////////////!!!!!!!!!!!!    10
//
// for (const element of arr) {
//   // console.log(element);
//   if (element > 30) {
//     console.log(element);
//   }
// }
//
//
let bigNumber = [
  58, 75, 85, 81, 89, 95, 85, 97, 100, 158, 123, 5, 2, 75, 12, 35, 4,
];
for (const elem of bigNumber) {
  if (elem > 80) {
    console.log(elem);
  }
}
//////////////////////////////////////////!!!!!!!!!!!!    11
//
//
let profile = {
  name: "Sumaiya",
  id: 901,
  phone: 098765,
};
console.log(profile);
profile["id"] = 870;
console.log(profile);
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
// 1
//Foot to Inch
function feetToInch(feet) {
  //1 Foot = 12 Inch
  let inch = 12 * feet;
  return inch;
}
let giveFoot = 15;
let totalinch = feetToInch(giveFoot);
console.log(giveFoot, "foot =", totalinch, "inch");
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
// 2
//Centemeter to Meter
function centimeterToMeter(cm) {
  // 1 cm = 1/100 m
  let meter = cm / 100;
  return meter;
}
let givecentimeter = 15;
let totaMeter = centimeterToMeter(givecentimeter);
console.log(givecentimeter, "cm =", totaMeter, "m");
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
// 3
//Paper Requirements
function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
  let firstBookPageNeed = 100;
  let secondBookPageNeed = 200;
  let thirdBookPageNeed = 300;
  ////////////
  let firstBook = firstBookCopy * firstBookPageNeed;
  let secondBook = secondBookCopy * secondBookPageNeed;
  let thirdBook = thirdBookCopy * thirdBookPageNeed;
  ////
  let totalThreeBook = firstBook + secondBook + thirdBook;
  return totalThreeBook;
}
let total = paperRequirements(3, 2, 2);
console.log("Paper needed", total, "Page");
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
// 4
//Best Friend
let friends = [
  "sumaiya",
  "arifuzzaman",
  "momotaj",
  "khadija",
  "alomgir",
  "jinan",
  "maaz",
];
function bestFriend(friends) {
  let largeNames = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let friendName = friends[i];
    if (friendName.length > largeNames.length) {
      largeNames = friendName;
    }
  }
  return largeNames;
}
let largeBestFriend = bestFriend(friends);
console.log(largeBestFriend);
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
// 5
//Positive Negative value
let numberArray = [1, 4, 5, 8, 52, -8, -8, -9, 5, 2, 4];
let positiveNumber = [];
for (let element of numberArray) {
  // console.log(element);
  if (element > 0) {
    positiveNumber.push(element);
  } else {
    break;
  }
}
console.log(positiveNumber);
//////////////////////////////////////////!!!!!!!!!!!!/////////////////
