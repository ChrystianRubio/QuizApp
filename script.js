const questions = [
    {
        questions: "Em que ano a linguagem ADA foi criada?",
        answer: [
            { text: "1900", correct: false},
            { text: "1980", correct: true},
            { text: "1981", correct: false},
            { text: "2005", correct: false},

        ]
    },
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currenQuestionIndex = 0;
let score = 0;




