const readline = require(`readline-sync`);
let input= readline.question("Enter student grade?");

const score = Number(input);
//assign grades
let grade;
switch (true){
    case(score>=90):grade ="A";break;
    case (score>=80):grade ="B";break;
    case (score>=70):grade="c";break;
    case(score>=60):grade="D";break;
    default:grade="F";
}
console.log(`Grade : ${grade}`);