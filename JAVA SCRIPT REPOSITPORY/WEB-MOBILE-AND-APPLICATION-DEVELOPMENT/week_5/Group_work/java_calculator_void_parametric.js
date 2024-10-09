//This program will be able to add, divide and multiply any two given numbers//
//one function to add subtract multiply any two numbers that you give it//

function calculator(){
 
    function add(num1,num2) {
        var sum= num1 + num2;
        console.log("The sum of",num1, "+",num2,"=",sum)
    }
    add(23,89);


    function divide(num1,num2) { 
        var divide = num1 + num2;
        console.log("The division of",num1, "/",num2,"=",divide)
    }
    divide(67,3);


    function multiply(num1,num2) {
        var multiply = num1 + num2;
        console.log("The multiplication of",num1, "*",num2,"=",multiply)
    }
    multiply(5,8);


    function subtract(num1,num2) {
        var subtract = num1 - num2;
        console.log("The subtraction of",num1, "-",num2,"=",subtract)
    }
    subtract(90,8);    

} 
calculator();

















