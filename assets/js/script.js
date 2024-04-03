
const startButton = document.getElementById('btn-start');
const endButton = document.getElementById('btn-end');
const questionElement = document.getElementById('displayQuestion');
const answerButtons = document.getElementsByClassName('answerBTNs');

let currentQuestion;
let scores;

startButton.addEventListener('click', this.startGame);
endButton.addEventListener('click', this.endGame);
startButton.style.display = 'block';
endButton.style.display = 'none';

/*
This is the first function that will be called, it initalises score and current question to 0, 
calls the next function display question. 
*/
function startGame() {
    startButton.style.display = 'none';
    endButton.style.display = 'block';
    questionElement.style.display = 'block';
    
    
    score = 0;
    currentQuestion = 0;
    displayQuestion()
}

/*
This is the function that will display our question in the HTML page,
first it checks to see the length of the questions array is not more than
the variable current question. It then displays the current question and the answers.
*/
function displayQuestion() {
    console.log("Current question is " + currentQuestion);
    if ((currentQuestion + 1) > questions.length) {
        endGame();
    }
    questionElement.innerHTML = questions[currentQuestion].question;
    for (let i = 1; i < 5; i++) {
        document.getElementById('btn' + i).innerHTML = questions[currentQuestion].answers[i - 1];
        document.getElementById('btn' + i).dataset.type = questions[currentQuestion].answers[i - 1];
    } 
};

    
/*
This function waits for the user to select an answer, it then checks if the data set type
is the same as the questions object correct and increments score if so.
*/
function checkAnswer(e) {
    console.log(e.dataset.type);
    if (e.dataset.type == questions[currentQuestion].correct) {
        score++;
        alert("correct");
        correctAnswer();
    }else{
        alert("Wrong");
        wrongAnswer();
    }
    console.log("Score is " + score);
    currentQuestion++;
    displayQuestion();
}

/**
 * This code will execute when the user has selected a correct answer.
 */
function correctAnswer() {

}

/**
 * This code will execute when the user has selected a wrong answer.
 */
function wrongAnswer() {

}

/*
This function stops the game, it shows the user how many correct answers they got.
*/
function endGame() {
    startButton.style.display = 'block';
    alert('Game Over');
    alert('You scored ' + score + ' correct answers' );
    questionElement.style.display = 'none';
    endButton.style.display = 'none';
    answerButtons;
}


/* This is where the Array of questions will be, 
I've put objects inside an Array of questions and 
I'm trying to write code to interact with code. */  

const questions = [
  
    {
        question: "What is the capital of the United Kingdom?", 
        answers: ["Manchester", "London", "Birmingham", "Newcastle"],
        correct: "London"
    },
    {
        question: "What colour is grass?",
        answers: ["Blue", "Yellow", "Green", "Red"],
        correct: "Green"
    },

    {
        question: "How many Spice Girls where their back in the 90's",
        answers: [3, 7, 5, 9],
        correct: 5
    },

    {
        question: "What does WWW stand for in computing?",
        answers: ["Washing, Wiping, Wimpering", "World Wide Web", "Words With Wepons", "What Windy Women"],
        correct: "World Wide Web"
    },

    {
        question: "What is the capital of the United States of America?",
        answers: ["Phoenix", "Washington DC", "Montgomery", "Philadelphia"],
        correct: "Washington DC"
    },

    {
        question: "What did Donald Trump wanted to use to keep out the Mexicans?",
        answers: ["G.I Jane", "Arnold Schortinigger", "Wall", "M16 Assault Rifle"],
        correct: "Wall"
    }
]
