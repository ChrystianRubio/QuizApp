const questions = [
    {
        question: "Em que ano a linguagem ADA foi criada?",
        answers: [
            { text: "1900", correct: false},
            { text: "1980", correct: true},
            { text: "1981", correct: false},
            { text: "2005", correct: false},

        ]
    },
];


const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currenQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currenQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}

function showQuestion(){

    resetState();
    let currenQuestion = questions[currenQuestionIndex];
    let questionNo = currenQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currenQuestion.question
    
    currenQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";

}

startQuiz();
selectAnswer();

