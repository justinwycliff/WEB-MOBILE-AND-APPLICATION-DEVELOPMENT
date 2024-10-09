function calculateOperations(first_number, second_number) {
    //addition of two numbers
    const addResult = first_number1 + second_number;

    //multiplication of two numbers
    const multiplyResult = first_number * second_number;

    //division of two numbers
    let divideResult;
    if (num2 !== 0) {
        divideResult = first_number / second_number;
    } else {
        divideResult = "undifined (division by zero)";
    }

    console.log("addition: ${first_number} + ${second_number} = ${addResult}");
    console.log("multiplication: ${first_number} * ${second_number} = ${multiplyResult}");
    console.log("division: ${first_number} / ${second_number} = ${divideResult}");
}

calculateOperations(20, 4);
