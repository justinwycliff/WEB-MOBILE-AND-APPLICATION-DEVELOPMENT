ing// calculate tax based on income at a 15% tax rate
function calculateTax(income) {
    const taxRate = 0.15;
    let taxPayable = income * taxRate;
    return taxPayable;
}

let income = 500000;
console.log("Tax Payable: " + calculateTax(income) + " NGN");
