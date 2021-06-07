const input = require('readline-sync');

let candidateName = "";

let question = "Who was the first American woman in space? "

let questions = [
     "Who was the first American woman in space? ",
     "True or false: 5 kilometer == 5000 meters? ",
     "(5 + 3)/2 * 10 = ? ",
     "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
     "What is the minimum crew size for the ISS? "
];
let correctAnswer= "Sally Ride"

let correctAnswers = ["Sally Ride",
 "true",
  "40",
   "Trajectory",
    "3"];
let candidateAnswer= "";

let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name //
function askForName() {
     candidateName = input.question("Your name here: ");
}

function askQuestion() {
     for (let q = 0; q < questions.length; q++) {
         candidateAnswers.push(input.question(questions[q]));
     }
}

function gradeQuiz(givenAnswers) {
     let grade = 0;
     let totalAnswers = correctAnswers.length;
     let totalCorrect = 0;
     
     
     //TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
     
     for (let answer = 0; answer < givenAnswers.length; answer++) {
         console.log(`Your answer: ${givenAnswers[answer]} || Correct answer: ${correctAnswers[answer]}`);
         if (givenAnswers[answer].toLowerCase() === correctAnswers[answer].toLowerCase()) {
             totalCorrect++;
         }
     }
     grade = (totalCorrect / totalAnswers) * 100;

     if (grade >= 80) {
         console.log(`You passed with a score of: ${grade}%`);
     } else {
         console.log(`You failed and have a score of: ${grade}%`);
     }

     return grade;
}
// TODO 1.1c: Ask for candidate's name //
  //console.log ("Hello " + candidateName + "!")

function runProgram() {
     askForName();
     console.log("Hello " + candidateName + "!");
     askQuestion();
     gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
     candidateName: candidateName,
     correctAnswer:correctAnswer,
     correctAnswers:correctAnswers,
     questions:questions,
     question:question,
     candidateAnswers:candidateAnswers,
     candidateAnswer:candidateAnswer,
     gradeQuiz: gradeQuiz,
     runProgram: runProgram
};