/*Write a function that receives two numbers and should be able to Multiple, Subtract, Add or Divide those numbers.*/
let num1 = 5;
let num2 = 30;

console.log("The first number is :",num1);
console.log("The second number is :",num2);

function operator(num1,num2){
    var add = num1 + num2;
    console.log("When the numbers are adding :",add);

    var subtract = num2 - num1;
    console.log("When the numbers are subtracting :", subtract);

    var multiply = num1* num2;
    console.log("When the numbers are multiplying :",multiply);

    var divide = num2/num1;
    console.log("When the numbers are dividing :",divide);

}
operator(num1,num2);