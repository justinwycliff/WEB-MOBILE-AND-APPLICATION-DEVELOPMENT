
//Functions help simplify and make our code neater 
var num = 23;
var num_two = 87;
var sum = num + num_two;
console.log(sum)

                        /////////TYPES OF FUNCTOINS////////
//a, Functions without parameters or arguments//
    //i) Void Function//
function summation() {
    var num_1 = 23;
    var num_2 = 56;
    var sum_1 = num_1 + num_2;
    console.log("Sum one is", sum_1)
}
summation();

    //ii) Returning Function//
function summation_2(){
    var num_3 = 45;
    var num_4 = 76;
    var sum_2 = num_3 + num_4;
    return sum_2;
}
console.log("The second sum is",summation_2());
//We can also  assign the function to a variable 
var sum_4 = summation_2();


//You cannot assign a variable to a void function . It will not return a value rathe rit wil return undefined

var sum_5 = summation();
console.log(sum_5)


///b, Functions with parameters or arguments ////
    //i) Void function //
function summation_one(num_one,num_two){
    
    var sum_one = num_one + num_two;
    console.log("The sum of",num_one, "+",num_two,"=",sum_one)
  
}//we are able to call the function multiple times 
summation_one(23,76);
summation_one(76,26);
summation_one(3,6);

    //ii) Returning Function//
function summation_two(num_three,num_four){
    
    return num_three + num_four;
}
console.log("Sum_three",summation_two(34,67));














