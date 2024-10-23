//prices of three products
let prdt1 = 45000;
let prdt2 = 30000;
let prdt3 = 35000;

// total price
let totalPrice = prdt1 + prdt2 + prdt3;

// Checking if discount is applicable
if (totalPrice > 100000) {
    console.log("Discount applicable! Total price: " + totalPrice + " UGX");
} else {
    console.log("No discount. Total price: " + totalPrice + " UGX");
}
