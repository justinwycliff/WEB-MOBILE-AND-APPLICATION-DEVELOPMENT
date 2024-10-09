//write a function calculateProfit that accepts the selling price, cost price, 
//and the number of units sold, and returns the profit for small business selling products like maize flour
function profit(cost_price,sell_price,units_sold){
    var we_paid = ((sell_price*units_sold) - (cost_price*units_sold));
    console.log("If i had ",units_sold,"units of laptops i bought at",cost_price,"and sold at",sell_price);
    console.log("I would make a profit of ",we_paid);
}
profit(3000,4000,90);










