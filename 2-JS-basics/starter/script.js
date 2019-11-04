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
