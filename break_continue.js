let products = [
  { name: "vivo phone", price: 28000 },
  { name: "samsung phone", price: 19000 },
  { name: "lg phone", price: 8000 },
  { name: "lg tv", price: 9500 },
  { name: "skyview tv", price: 6000 },
  { name: "lg laptop", price: 15000 },
  { name: "dell laptop", price: 25000 },
  { name: "apple laptop", price: 128000 },
];
for (let product of products) {
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
