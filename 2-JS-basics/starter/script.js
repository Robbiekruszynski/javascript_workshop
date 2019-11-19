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

// let bills = [124, 48, 268];
// let withTip = [X, X, X];

// 20% bill < 50
// 15% bill > 50 && bill < 201
// 10% bill > 200

// so position 0 = 15%
//    position 1 = 20%
//    position 2 = 10%

// const tipCalc = (bill) => {
//   let = [
//   let = []
//   let percentage;

//  if (bill < 50){
//    percentage = .2;
//     console.log ( " this is a 20% tip");

//   } else if ( bill > 50 && bill < 201){
//     percentage = .15;
//     console.log ( " this is a 15% tip");

//  } else {
//     percentage= .1;
//     console.log ( " this is a 10% tip");
//   } return percentage * bill;
// }

// console.log(tipCalc(10));

// let bills = [124, 48, 268];
// let tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);

///////promise work

let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

//anything inside of a .then is going to run for a revolve
p.then(message => {
  console.log("this is in the then" + " " + message);
}).catch(message => {
  console.log("this is in the catch " + message);
});

////////////////callback function////////////////

const userLeft = false;
const userRight = false;

// function watchCallBack(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":("
//     });
//   } else if (userRight) {
//     errorCallback({
//       name: "User Right",
//       message: ";)"
//     });
//   } else {
//     callback("thumbs up");
//   }
// }

// watchCallBack(
//   message => {
//     console.log("success" + " " + message);
//   },
//   error => {
//     console.log(error.name + " " + error.message);
//   }
// );

//////////////////refactor the above code to use a promise instead////////////////

function watchCallBackPromise() {
  return new Promise((res, rej) => {
    if (userLeft) {
      rej({
        name: "User Left",
        message: ":("
      });
    } else if (userRight) {
      rej({
        name: "User Right",
        message: ";)"
      });
    } else {
      res("thumbs up");
    }
  });
}

watchCallBackPromise()
  .then(message => {
    console.log("success: " + message);
  })
  .catch(error => {
    console.log(error.name + " " + error.message);
  });

//you can shorten reject / resolve to res / rej

//whats nice about using a promise you can can just
//add .then opposed to "callback hell" which is a
//wild world of nesting that gets messy

//promise (rej, res) muc more simple way to execute

const studyJavascript = new Promise((res, rej) => {
  res("Going over Javascript");
});
const studyExpress = new Promise((res, rej) => {
  res("Going over Node and Express");
});

const studyMongo = new Promise((res, rej) => {
  res("Going over MongoDB work");
});

// Promise.race will return as soon as one of the promises are complete
// opposed to all of them
//instead of (messages) change to (message) since it is the first
//one to pass

Promise.all([studyJavascript, studyExpress, studyMongo]).then(messages => {
  console.log(messages);
});

//how do you add something to the beginning and end of an array

var myArray = ["a", "b", "c", "d"];

myArray.push("end");
myArray.unshift("start");

console.log(myArray);

// doing this in ES6

var myArray = ["a", "b", "c", "d"];

myArray = ["start", ...myArray, "end"];
console.log(myArray);

//how do you create a private variable in javascript

function secretVar() {
  var private = "super secret code";
  return function() {
    return private;
  };
}

var getPrivateVar = secretVar();

console.log(getPrivateVar());

///fizzbuzz/////
for (i = 1; i < 101; i++) {
  if (i % 15 === 0) console.log("Fizzbuzz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else console.log(i);
}
