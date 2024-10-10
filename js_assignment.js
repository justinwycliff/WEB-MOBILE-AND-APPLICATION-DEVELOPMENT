/
qn1
//explain the difference between var, let and const in Javascript

var
// var  function scope if declared inside a function, only available to that function but if initialised outside, it becomes global.

//when Hoisting var declarations are hoisted to the top of their closest enclosing function scope, it does not matter if they are inside an if or for block, the declaration is processed before any code is executed, but no its assignment.

//when reassigning & Redeclaration We can reasign and redeclare the variables if we have defined them with var in the same scope


let
//when scopping let has block scope, (if, while…etc) which means it only in the block {} is written.

//when Hoisting let is hoisted, but it's in the "temporal dead zone" until the actual declaration is encountered. Reading it before declaration will throw an error.

//when ReAssignment  variables Were Declare with let can be Reassign but not Redeclare


const
//when scoppoing: Same as let, the const keyword also has block scope.
//when hoisting: const is also hoisted but just like let, it is in the temporal dead zone and cannot therefore be used before it is declared.
//when reassigning & Redeclaration: In other words, once a variable has been declared with a const header, this variable cannot be reinitialized or even redeclared. It is used when you want the variable’s value to remain constant after allocation has been made.


qn2
//what happens  if yoou try to reassign values to variables declared with let or const?

//const type cannot be reassigned to other variables unlike other types of data
//If you try to change the value of any const variable, 
//JavaScript will produce a TypeError saying assignment to constant variable is prohibited


qn3
// var x = 10; defines a var variable x and assigns the value of 10 to that variable.

//let y = 5; defines a new let variable y, and at the same time, the value it will hold is 5.

//In const z = 3; there is a declaration of a const z and then it is initialized with the value of 3.

//statement x = 10; replaces the value of x to 10 with 20. This is allowed because var allows reassignment not letting the value to take a permanent residence in that portion of the memory assigned to it.

//It equals y = 15; shifts the value of y from 5 to 15. This is permitted due to let since it permits reassignment.

//Here it sets the value of z to 7; now try to changing the value of z from 3 to 7. This will help to throw a TypeError because a new variable z is declared with const, and it means that we cannot change a value of the constant variable.

//Expected Output:
//The variable reassignment to z will result in a TypeError for in line seven and hence the output to the console will not be made. The program continues its execution until an error occurs, and in this case, the console.log(x, z) will not be called.
//How come the code reproduces such a phenomenon?

//Both var and let allow reassignment, so, changing x and y is perfectly acceptable.
//Two const are used, and an error is thrown when trying to reassign z thus stopping the further execution of the code.




//explain the syntax  of an if statement in java script. what is the purpose of using if statements in a program?
//if: This is the keyword used to state the conditional statement.
//condition: In parentheses (), you put a condition – an expression that can turn out to be true or false. If the condition is true it will execute the code that follows it in the set of braces {}. Else, the code enclosed in the braces will not be executed, that is, it will be bypassed.
//{} (curly braces): Put brackets around the code which will be executed if the condition equals to true.

//purpose
//The general reason for prior use of if statements is to direct the flow of program based on conditions. 
//They enable you to write the script which executes the different instructions given at distinct states of the variables and more. 
//This makes programs more adaptive, in a way that they are able to respond within different context or environment.


qn
//given the following code what will be the out put and why
//let temperature =36;
//if (temperature > 25) { console.log("its hot");} else {console,log("its cold");}

//let temperature = 36; — The variable temperature is declared and assigned a value of 36.

//The if statement checks the condition temperature > 25. Since 36 is greater than 25, the condition evaluates to true.

 //Because the condition is true, the code inside the if block is executed, which is console.log("It's hot");.

//The else block is skipped because the condition was true. Therefore, "It's cold" is not printed.



qn
//how would uoy modify the program to printa message for temperature between 15 and 25 degrees?
//let temperature = 36;

if (temperature > 25) {
  console.log("It's hot");
} else if (temperature >= 15 && temperature <= 25) {
  console.log("It's mild");
} else {
  console.log("It's cold");
}
//explanation
//if (temperature > 25): If the temperature is greater than 25 it says “It is hot”

//else if (temperature >= 15 && temperature <= 25): This condition examines the situation if temperature=fahrenheitnumber is between 15 and 25 both numbers are included. If true it should print “It’s mild”.

//else: If the above stated conditions are not met, that is, if the temperature is below 15, it will print “It’s cold”.


qn
//write a code using a single if -esle structure without nesting
let age = 23;
if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}






























