//This program will be able to add, divide and multiply any two given numbers//
//one function to add subtract multiply any two numbers that you give it//

function calculator(){
    let userInput;
    
    userInput = "+";
    if (userInput === "+"){
        function add(num1,num2) {
            return num1+num2;
        }
        console.log("Adding two numbers ",add(23,89));
    }

    userInput = "/";
    if(userInput === "/"){
        function divide(num1,num2) {
            return num1/num2;
        }
        console.log("An example of dividing is:", divide(67,3));
    }

    userInput = "*";
    if(userInput === "*"){
        function multiply(num1,num2) {
            return num1*num2;
        }
        console.log("An example of multiplying is:",multiply(5,8));
    }
    var multi_1 =(multiply(23,3));
    
    userInput ="-";
    if (userInput = "-"){
        function subtract(num1,num2) {
            return num1-num2;
        }
        console.log("Subtracting two numbers",subtract(90,8));  
    }  

    else{
        console.log("Wrong operation");
    }
} 
calculator();





