
// Calculating tax 
let grosspay = 20000;
let taxrate = (grosspay*0.062)
let netPay = (grosspay-taxrate);

function getSosTax(grosspay,taxrate){
    // make the variable global for this work
    // taxrate = (grosspay*0.062)
    
    let fedtax = (grosspay-(grosspay*0.062));
    console.log(fedtax);

}

let fedtax = 20000;



getSosTax(fedtax);

console.log("Net pay $ " + netPay );
console.log("Tax amount paid $" + taxrate);