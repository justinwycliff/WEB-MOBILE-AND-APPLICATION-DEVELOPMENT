/*VAR
 scope:
var is function scoped which means it is present throughout the function in which it is declared and if declared outside a function, it becomes global

Hoisting:
Variables that are declared with var are hoisted to the top of their scope, but their initialization stays where it is in the code which means the variable is there but is undefined until the point where it is initialized

redeclaration:
a var variablencan be redeclared in the same scope without an error


LET
Scope: 
let is block scoped.this means it is only available within the nearest enclosing block like a function, loop, or if statement

Hoisting: 
Variables declared with let are also hoisted, but they remain in a "temporal dead zone" until they are initialized. Using them before initialization will throw an error.

Re-declaration: 
You cannot re-declare a let variable in the same scope

CONST
Scope: 
const is block scoped just like let variable

Hoisting:
const variables are also hoisted but they remain in a temporal dead zone until initialized

Re-declaration and Re-assignment:
const cant be reassigned or redeclared.
once a const is assigned a value, it cannot be changed. but if the const refers to an object or array, the properties or elements of that object or array can still be modified
*/