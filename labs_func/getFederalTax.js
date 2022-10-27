
let taxRate = (0.23)
let person =1;
let grosspay = 750;
let withholdingCode =0;

function federalTax (grosspay, withholdingCode ){
    let fedTax = (grosspay- (grosspay*taxRate))

    if (taxRate==0.23){
        person = 1;
        console.log(fedTax);
    }
    else {
        console.log("not sure");
    }

    federalTax(fedTax)
    console.log(fedTax)




}

