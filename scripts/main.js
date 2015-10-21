// // Questions & Answers
//
// Show me how to calculate the average price of all items. Please console.log the average.
//
// The average price is $23.63
// I'll accept either $23.63 or $23.62
//
var prices = items.map(function (prices){
  return prices.price;
});

// console.log(prices);

var total = prices.reduce(function (a, b){
  return a + b;
});

// console.log(total);

var numberItems = prices.length;
// console.log(numberItems);

var avg = total / numberItems
console.log("The average price is $" + avg.toFixed(2));
//
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
//
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
// {
//   title: "1970s Coors Banquet Glass Beer Pitcher",
//   ...
// },
// {
//   title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//   ...
// },
// {
//   title: "Hand Painted Colorful Feather Glass",
//   ...
// }
// ]
//
var modprice = items.filter(function (things){
  return things.price > 14.00 && things.price < 18.00;
});
console.log("Items that cost between $14.00 USD and $18.00 USD: "
+ '\n' + "title: " + modprice[0].title
 + '\n' + "title: " + modprice[1].title
  + '\n' + "title: " + modprice[2].title);
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
//
var gbp = items.filter(function(gbp){
  return gbp.currency_code === "GBP";
});
console.log(gbp[0].title + ' costs £' + gbp[0].price + " British Pounds Sterling, ol chap!");
//
// Show me how to find which items are made of wood. Please console.log the ones you find.
//
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
//
var wooden = items.filter(function(wooden){
  return wooden.materials.indexOf('wood') != -1;
});
console.log(
  "title: " + wooden[0].title
  + '\n' + "title: " + wooden[1].title
  + '\n' + "title: " + wooden[2].title
  + '\n' + "title: " + wooden[3].title
  + '\n' + "title: " + wooden[4].title
);
//
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass
//
var complex = items.filter(function(complex){
  return complex.materials.length > 7;
});
console.log(
  "title: " + complex[0].title
  + '\n' + "materials: " + complex[0].materials
  + '\n' + "title: " + complex[1].title
  + '\n' + "materials: " + complex[1].materials
);
//
// Show me how to calculate how many items were made by their sellers
//
// 18 were made by their sellers
//
var made = items.filter(function(made){
  return made.who_made === "i_did";
});
console.log(made.length + ' were made by their sellers');
//
