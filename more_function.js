
function displayMailingLabel (name,address,city,state,zip){
    let contactInf = name+address+city+state+zip;
    console.log(contactInf);
}



let individualname = "Ibrahim";
let individualAdd = "Harlem";
let nameOfCity = "NYC";
let nameState = "New York";
let nameOfZip =+ "0000";



// organized output later with some string
displayMailingLabel(individualname,individualAdd,nameOfCity,nameOfZip);

function addNumbers(num1,num2){
    let nums = (num1+num2)
    console.log(nums)

}

let addSomeNum = (10);
let addSomeONum = (14);

addNumbers(addSomeNum,addSomeONum);


function displayReceipt(totalDue,totalPaid){
    let payments = (totalPaid-totalDue);

    console.log(payments);

}
let totalmoneydue = (500);
let totalmoneypaid = (300);

displayReceipt(totalmoneypaid,totalmoneydue)



