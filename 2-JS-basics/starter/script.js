const firstName = "Robbie";
console.log(firstName);

const lastName = "Kruzynski";
console.log(lastName);

let fullAge = true;
const myAge = 30;
console.log(myAge);
console.log(fullAge);
console.log(firstName + " " + lastName + " " + myAge + " " + fullAge);

let job, isMarried;
job = "dev";
isMarried = true;

console.log(
  firstName +
    " " +
    lastName +
    " " +
    "my age is" +
    " " +
    myAge +
    " " +
    "is that true?" +
    " " +
    fullAge +
    "my job is a" +
    " " +
    job +
    " " +
    "and I am married" +
    " " +
    isMarried
);

let year, yearJohn, yearMark;
year = 2019;
yearJohn = year - 30;
yearMark = year - 10;

console.log(yearJohn);

console.log(year * 2);

let now, yearKate, yearRobbie;
now = 2019;
yearKate = 38;
yearRobbie = 30;

let kateOlder = yearKate > yearRobbie;
console.log(kateOlder);

let x, y;
x = (3 + 5) * 4 - 6;
console.log(x);

var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi, markMore;
markMass = 20;
markHeight = 1.6;
johnMass = 30;
johnHeight = 2.3;
markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);
johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);
markMore = markBmi > johnBmi;
console.log("Is Mark's BMI higher than John's?" + " " + markMore);

//to get BMI
//BMI = mass / height^2 = mass / (height * height);
//mass in kg and height in meter

//PASSED

let birthName = "Robbie";
let civilStatus = "married";

if (civilStatus !== "married") {
  console.log(birthName + " " + "is not married");
} else {
  console.log(birthName + " " + "is married");
}

/////////////////////////////// code challenge #1//////////////////////////////////////////

var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi, markMore;
markMass = 20;
markHeight = 1.6;
johnMass = 30;
johnHeight = 2.3;
markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);
markMore = markBmi > johnBmi;

if (markBmi > johnBmi) {
  console.log("Good boy, Mark");
} else {
  console.log("Thadda boy, John");
}

let hisName = "Joe";
let hisAge = "15";

if (hisAge < 13) {
  console.log(hisName + " is a boy ");
} else if (hisAge < 20 && hisAge > 12) {
  console.log(hisName + " is a teen");
} else {
  console.log(hisName + " is an adult");
}

let birthCall = "Robbie";
let currentAge = "21";

currentAge >= 21
  ? console.log(birthCall + " can drink booze")
  : console.log(birthCall + " can not drink");

let drinker = currentAge >= 21 ? "beer" : "juice";
console.log(drinker);

let currentJob = "teacher";
switch (currentJob) {
  case "teacher":
    console.log(birthCall + " teaches");
    break;
  case "driver":
    console.log(birthCall + " drives");
    break;
  default:
    console.log(birthCall + " something else");
    break;
}

//truthy falsy

let height = 15;
// let height;

if (height) {
  console.log("Var is defined");
} else {
  console.log("Var has NOT been defined");
}

////////////////////////////code challenge #2/////////////////////////

let JohnGameOne,
  JohnGameTwo,
  JohnGameThree,
  MikeGameOne,
  MikeGameTwo,
  MikeGameThree,
  MaryGameOne,
  MaryGameTwo,
  MaryGameThree;

JohnGameOne = 989;
JohnGameTwo = 120;
JohnGameThree = 103;
MikeGameOne = 316;
MikeGameTwo = 94;
MikeGameThree = 123;
MaryGameOne = 97;
MaryGameTwo = 534;
MaryGameThree = 105;

let JohnAvg = (JohnGameOne + JohnGameTwo + JohnGameThree) / 3;
console.log(JohnAvg);

let MikeAvg = (MikeGameOne + MikeGameTwo + MikeGameThree) / 3;
console.log(MikeAvg);

let MaryAvg = (MaryGameOne + MaryGameTwo + MaryGameThree) / 3;
console.log(MaryAvg);

if (JohnAvg > MikeAvg && JohnAvg > MaryAvg) {
  console.log("Go John" + " " + JohnAvg);
} else if (MikeAvg > JohnAvg && MikeAvg > MaryAvg) {
  console.log("Go Mike" + " " + MikeAvg);
} else if (MaryAvg > MikeAvg && MaryAvg > MikeAvg) {
  console.log("Go Mary" + " " + MaryAvg);
} else {
  console.log("There is a draw");
}

//function work

const calculateAge = birthYear => {
  return 2019 - birthYear;
};

let getAge = calculateAge(1989);
let ageJohn = calculateAge(1982);
let ageKate = calculateAge(1981);

console.log(getAge);
console.log(ageJohn);
console.log(ageKate);

const yearsUntilRetire = (year, firstName) => {
  let age = calculateAge(year);
  let retirement = 65 - age;
  console.log(firstName + " retires in" + " " + retirement + " years");
};

yearsUntilRetire(1989, "Robbie");

///functions////////////////////////functions///////////////////////////////functions

// function calculateAge(birthYear){

// }

const calculateAging = birthYear => {
  return 2019 - birthYear;
};

let ageRobbie = calculateAging(1989);
let ageKatie = calculateAging(1981);
let ageJohnny = calculateAging(1982);

console.log(ageRobbie, ageKatie, ageJohnny);

//a function is like a machine that recives some input then does something with that
//input and returns something else

const yearsUntilRelax = (year, firstName) => {
  let age = calculateAging(year);
  let relaxYear = 65 - age;
  if (relaxYear > 0) {
    console.log(firstName + " retires in " + relaxYear + " years");
  } else {
    console.log(firstName + " you're retired already!");
  }
};

yearsUntilRelax(1989, "Robbie");
yearsUntilRelax(1950, "Bill");
yearsUntilRelax(1970, "Connor");

////////////////Function Statements and Expressions//////////////////

//function delcaration
//function whatDoYouDo(job, firstName) {

//}

//function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " is a great driver";
    case "designer":
      return firstName + " is a pretty good designer";
    default:
      return firstName + " doesn't have a job";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Stan"));
console.log(whatDoYouDo("coder", "Cory"));

////////////////////////arrays/////////////////////////

let differentNames = ["John", "Kate", "Josh", "Robbie"];
let differentYears = new Array(1989, 1941, 1943, 1984);

////Mutate array data/////
differentNames[3] = "Robbles";
console.log(differentNames[3], differentYears[0]);
console.log(differentNames.length);
console.log(differentNames);

//differnet data types

let Jill = ["Jack", "Phil", 1990, "designer", false];

//////add to the array, last position
Jill.push("blue");

//////adds to the first position
Jill.unshift("Mr.");

//////removes the last element in an Array
Jill.pop();
Jill.pop();

//////removes the first position
Jill.shift();

console.log(Jill);

let isDesigner =
  Jill.indexOf("designer") === -1
    ? "John is Not a designer"
    : "John is a designer";
console.log(isDesigner);

////////////////////////Coding challenge #3////////////////////////

let bills = [124, 48, 268];
let withTip =[X,X,X];

// 20% bill < 50
// 15% bill > 50 && bill < 201
// 10% bill > 200

// so position 0 = 15%
//    position 1 = 20%
//    position 2 = 10%

const tipper = (billing) => {
  let bill = bills(billing);
  if (bill < 50){
    console.log ( " this is a 20% tip");
  } else if ( bill > 50 && bill < 201){
  console.log ( " this is a 15% tip");
  } else (bill > 200){
    console.log ( " this is a 10% tip");
  }
};



const tipCalc = (amount) => {
  let tips = [0.2*amount, 0.15*amount, 0.1*amount]
  let finalBill= [amount + tips[0], amount + tips[1], amount + tips[2]]


