var read = require("readline-sync");
var chalk = require("chalk");

const userName = read.question(chalk.green("May I know your name please "));
console.log(chalk.yellow("Welcome, " + userName));
var date = read.question(chalk.yellow("Enter your date of birth in 'DD-MM-YYYY' format "));

function takedate(){
  var date = read.question(chalk.yellow("Enter your date of birth in corerct valid format again "));
  return date
}

function checkDateFormat(date){

  var dateArray = date.split("-");
  var dd = Number(dateArray[0]);
  var mm = Number(dateArray[1]);
  var yyyy = Number(dateArray[2]);

  if(date.length !== 10){
   return false;
  }else if(dd>31 || mm>12){
    return false
  }else{
    return true
  }

}

var flag = checkDateFormat(date);

while(!flag){
  date = takedate();
  flag = checkDateFormat(date)
}



var dateArray = date.split("-");
var dd = Number(dateArray[0]);
var mm = Number(dateArray[1]);
var yyyy = Number(dateArray[2]);

var dds= dd.toString();
var mms= mm.toString();
var yyyys= yyyy.toString();

isPrime(dds+mms+yyyys);






function isPrime(date){
  console.log(chalk.green("Thank You for playing the game"));
  const prime = "Hurray! your Date of Birth is a prime number";
  const notPrime = "Ohh! your Date of Birth is not prime";
  const composite = chalk.yellow("It is neither prime nor composite, because it is one");

  var numDate = Number(date);
  if(numDate === 1){
    return composite
  }

  if(numDate === 2){
    return notPrime
  }else{
    for(let i = 2; i<=date.length; i++){
        if(numDate%i === 0){
          return notPrime
        }
    }

  }

  return prime

}