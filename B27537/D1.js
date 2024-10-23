// User's input for network code(1 for mtn, 2 for airtel, 3 for africell)
let networkCode = 2;

// determining the call rate 
switch (networkCode) {
    case 1:
        console.log("MTN: Call rate is 5 UGX per second");
        break;
    case 2:
        console.log("Airtel: Call rate is 4 UGX per second");
        break;
    case 3:
        console.log("Africell: Call rate is 6 UGX per second");
        break;
    default:
        console.log("Invalid network code");
}
