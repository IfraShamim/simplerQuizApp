const startQuiz = document.querySelector(".startQuiz");
const quizBox = document.querySelector(".quizBox");
const quesText = quizBox.querySelector(".quesText");
const optionsBox = quizBox.querySelector(".options");
const nextBtn = document.querySelector(".nextBtn");
const check = `<i class="fa-solid fa-check"></i>`;
const mark = `<i class="fa-solid fa-xmark"></i>`;
const totalQue = document.querySelector(".quizFooter .totalQue");
const countQue = document.querySelector(".quizFooter .countQue");
const resultBox = document.querySelector(".resultBox");
const totalsQues = document.querySelector(".totalQues span");
const rightAns = document.querySelector(".rightAns span");
const wrongAns = document.querySelector(".wrongAns span");
const percentage = document.querySelector(".percentage span");
const againQuiz = document.querySelector(".resultFooter .againQuiz");
const exit = document.querySelector(".resultFooter .exit");

startQuiz.onclick = () => {
    quizBox.classList.remove("inactive");
    startQuiz.classList.add("inactive");
}
totalQue.innerText = questions.length;
totalsQues.innerText = questions.length;

var queIndex = 0;
var rightAnsw = 0;
var wrongAnsw = 0;
countQue.innerText = queIndex+1;
showQuestion(queIndex);
function showQuestion(qIndex) {
    quesText.innerText = questions[qIndex].num + ". " + questions[queIndex].question;
    var optionStatement = "";
    for (var i = 0; i < questions[qIndex].options.length; i++) {
        optionStatement += `<div class="option">${questions[queIndex].options[i]}</div>`;
    }
    optionsBox.innerHTML = optionStatement;
    var allOptions = optionsBox.querySelectorAll(".option");
    for (var j = 0; j < allOptions.length; j++) {
        allOptions[j].setAttribute("onclick", "userAnswer(this)");
    }
    nextBtn.classList.add("inactive");
}
nextBtn.onclick = () => {
    queIndex++;
    
    if (questions.length > queIndex) {
        countQue.innerText = queIndex + 1;
        showQuestion(queIndex);
    }
    else {
        console.log("Questions Completed");
        quizBox.classList.add("inactive");
        resultBox.classList.remove("inactive");
        rightAns.innerText = rightAnsw;
        wrongAns.innerText = wrongAnsw;
        percentage.innerText = ((rightAnsw * 100)/questions.length).toFixed(2)+"%";
    }
    if(questions.length-1 ==queIndex){
        nextBtn.innerText = "Finish";
    }
}
function userAnswer(answer) {
    let userAnswer = answer.innerText;
    let correctAns = questions[queIndex].answer;
    var allOptions2 = optionsBox.querySelectorAll(".option");
    nextBtn.classList.remove("inactive");
    if (userAnswer == correctAns) {
        console.log("%c Right Answer", "color:green");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", check);
        rightAnsw ++;
    }
    else {
        console.log("%c Wrong Answer", "color:red");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", mark);
        wrongAnsw ++;
        for (var i = 0; i < allOptions2.length; i++) {
            if (allOptions2[i].innerText == correctAns) {
                allOptions2[i].classList.add("correct");
                allOptions2[i].insertAdjacentHTML("beforeend", check);
            }
        }

        for (var j = 0; j < allOptions2.length; j++) {
            allOptions2[j].classList.add("disabled");
        }
    }
    againQuiz.onclick = () => {
        quizBox.classList.remove("inactive");
        resultBox.classList.add("inactive");
      
        reset();
      
      }
      
      exit.onclick = () => {
        startQuiz.classList.remove("inactive");
        resultBox.classList.add("inactive");
        reset();
      }
      
      function reset() {
        queIndex = 0;
        rightAnsw = 0;
        wrongAnsw = 0;
        nextBtn.innerText = "Next Question";
        countQue.innerText = queIndex + 1;
        showQuestion(queIndex);
      }
      
}
