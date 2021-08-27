// let products = [
//   { name: "asus laptop", price: 30000 },
//   { name: "dell laptop", price: 20000 },
//   { name: "samsung phone", price: 52000 },
//   { name: "vivo phone", price: 41000 },
//   { name: "iphone", price: 34000 },
//   { name: "apple laptop", price: 74000 },
// ];
// function searchproduct(products, searchtext) {
//   let arrEmpty = [];
//   for (let product of products) {
//     let name = product.name;
//     if (name.indexOf(searchtext) != -1) {
//       arrEmpty.push(product);
//       //   console.log(name);
//     }
//   }
//   return arrEmpty;
// }
// let match = searchproduct(products, "phone");
// console.log(match);
////////////////////////////////////////////////////////////////
let products = [
  { name: "vivo phone", price: 28000 },
  { name: "samsung phone", price: 28000 },
  { name: "lg phone", price: 28000 },
  { name: "lg tv", price: 28000 },
  { name: "skyview tv", price: 28000 },
  { name: "lg laptop", price: 28000 },
  { name: "dell laptop", price: 28000 },
  { name: "apple laptop", price: 28000 },
];
function searchProduct(products, searchText) {
  let emptyArr = [];
  for (let element of products) {
    let name = element.name;
    if (name.indexOf(searchText) != -1) {
      emptyArr.push(element);
      // console.log(name);
    }
  }
  return emptyArr;
}
let matched = searchProduct(products, "laptop");
console.log(matched);
