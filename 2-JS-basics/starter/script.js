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