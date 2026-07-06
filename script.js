function checkFraud(){

let amount=document.getElementById("amount").value;

if(amount==""){
alert("Please enter transaction amount");
return;
}

let status="Safe Transaction";

if(amount>50000){
status="Fraud Detected";
}

document.getElementById("result").innerHTML="Status: "+status;
}
