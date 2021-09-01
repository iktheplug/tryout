//1 What JavaScript Data type is: “Hello”;
console.log("Datatype = String");

// console.log("\n")

//2. What JavaScript data type is: false
console.log("Datatype = Boolean");

// console.log("\n")

//3 Create an array of odd numbers between 1 and 20
let sureOdds = []
let x = 0;
while (x < 20){
 x++;
if (x % 2!==0){
sureOdds.push(x);
 }
}
console.log(sureOdds);

//4 A student is an entity with following details
//name = John doe, age = 30, gender = male, nationality = Korean, Number of languages is 3, Favorite music is:,I shot the Sheriff, Kokonbilo, It’s a man’s world
//Using a JavaScript object create a variable that describe the student
let student_Bio = [{name: "John Doe"}, {Age: 30}, {Gender: "male"}, {Nationality: "Korean"}, {"Number of languages": 3},
     {"Favorite music":["I shot the Sheriff", "Kokonbilo", "It’s a man’s world"]}]
     console.log(student_Bio)



//5. What is a group of related components, directives, pipes, and services called in angular?
console.log("Module")