/*
//in java script the == is a loose equality while the === is an absolute equality like the == in python //
// IF statements in java script //

//They have a syntax  is "if()"-were the condition is put in the brackets //
//THe condition is the one put in the "{}"//

//Example 1//
let number = 5;

if (number > 0){
    console.log("The number is positive ");
    
}
//Example 2//

let isRaining = true;
if (isRaining){
    console.log("true");
}

//Example3//
let num =7;
if(num % 2 === 0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

//Example 4//
let score = 75;
if (score >= 80){
    console.log("You got an A");
}
else if (score >= 60){
    console.log("You got a B");
}

else{
    console.log("You did not pass");
}


//Example 5//
let temperature = 45;

if(temperature > 30){
console.log("It is too Hot");
}
else if (temperature >=20){
    console.log("It is moderate");

}
else{
    console.log("It is cold");
}


//Example 6 The admission program//
let score = 55;
if (score >= 70){
    console.log("Eligible for Admission");
}
else if (score >= 50){
    console.log("Admission on probation");

}
else{
    console.log("Not eligible for Admission");
}


//Example 7 water//
let waterAvailable = 300;

if (waterAvailable > 500){
    console.log("Enough water");
}
else if (waterAvailable >=200){
    console.log("water is limited");
}
else{
    console.log("Water shortage")
}


/////////NESTED LOOPS -loops within loops //////////
//these help to shorten code by reducing number of iterations//
//Example1//
let number = -3;

if (number >= 0 ){
    if(number === 0){
        console.log("The number is zero");
    } else{
        console.log("The number is positive");
    }
}
else{
    console.log("The number is negative ")
}
*/

//Example 2//
let expired = false;//this is a boolean//
let quality = 7;

if (expired === true){
    console.log("Do not use ")
}
else{
    if (quality > 8){
        console.log("Good quality");
    }
    else if(quality >=5){
        console.log("Average quality");
    }
    else{
        console.log("Poor quality")
    }
}



























