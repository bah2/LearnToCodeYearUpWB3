
// sample exercise

// function displayNmaeAndAge(age,name){
//     let message = name + " is " + age;
//     console.log(message);
// }


// let someAge = "16";
// let someName = "Ibrahim";

// displayNmaeAndAge(someAge,someName);

function getNumGrandKids (name){
    let num = 0;
    if (name == "Dana"){
        num = 6;
    }
    else if ( name == "Karla"){
        num = 3;
    }
    else if (name == "Leslyne"){
        num = 2;
    }
    else if (name == "Ibrahim"){
        num = 10;
    }
    return num;
}
let num = getNumGrandKids ("Dana");
console.log(num);

num = getNumGrandKids("Karla");
console.log(num);
num = getNumGrandKids("Ibrahim");
console.log(num);


// Rough work

let taxrate = 1.5;

function getSosTax(grosspay,taxrate){
    
   taxrate = (grosspay*0.062)
   
    let fedtax = (gross-taxrate);
    console.log(fedtax);

}

let fedtax = (20000);

getSosTax(fedtax);


// come to this later
// // 
// let grosspay = 30000;
// let mediCare = (grosspay*0.00145);



// function mediCareTax (grosspay,mediCare){

//     let healthCareTax = (grosspay-mediCare)
//     console.log(healthCareTax);
// }


// let healthCareTax = 30000;

// mediCareTax(healthCareTax);



// check

// Calculating tax 



// 
// let grosspay = 0;
// let mediCare = (grosspay*0.0145)

// function getSosTax(grosspay,mediCare){
    
//     let mediCareTax = (grosspay-(grosspay*0.0145));
//     console.log(mediCareTax);

// }

// let mediCareTax = 20000;
// getSosTax(mediCareTax);