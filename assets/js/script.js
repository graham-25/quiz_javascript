/*
document.addEventListener("DOMContentLoaded", function() (
   // let buttons = document.getElementsByTagName('button');

    for(let i = 0; i < buttons.length; i++) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === 'start') {
                alert("You clicked GOOD");
            } else {
                let gameType = this.getAttribute("data-type");
                alert('You clicked' ${gameType}); 
            }
        })
    }
)) 
*/

const startButton = document.getElementById('btn-start')
const endButton = document.getElementById('btn-end')
const questionElement = document.getElementById('displayQuestion')

startButton.addEventListener('click', this.startGame)
endButton.addEventListener('click', this.endGame)


/*
This is the first function that will be called, it initalises, clears the 
game board and starts the game. 
*/
function startGame() {
    console.log('Game started');
    alert('Game Started');
    let gameCount = 0;
    displayQuestion()
    console.log('gameCount');

}

/*
This is the function that will display our question inthe HTML page,
*/
function displayQuestion() {
    document.getElementById('displayQuestion').textContent = "Hello World"
        //questionElement.innerText = questions.question
}
    

function checkAnswer() {

}

function endGame() {
    alert('Game Over');

}


/* This is where the Array of questions will be, 
I've put objects inside an Array of questions and 
I'm trying to write code to interact with code. */  

const questions = [
  
    {
        question: "What is the capital of United Kingdom?", 
        answer1: "Manchester",
        answer2: "London",
        answer3: "Birmingham",
        answer4: "Newcastle",
        correct: 2
    },

    {
        question: "What colour is grass?",
        answer1: "Blue",
        answer2: "yellow",
        answer3: "Green",
        answer4: "Red",
        correct: 3
    },

    {
        question: "How many Spice Girls where their back in the 90's",
        answer1: 3,
        answer2: 7,
        answer3: 5,
        answer4: 9,
        correct: 3
    },

    {
        question: "What does WWW stand for in computing?",
        answer1: "Washing, Wiping, Wimpering",
        answer2: "World Wide Web",
        answer3: "Words With Wepons",
        answer4: "What Windy Women",
        correct: 2
    },

    {
        question: "What is the capital of america?",
        answer1: "Ohio",
        answer2: "Washington DC",
        answer3: "Alabama",
        answer4: "pencilvainer",
        correct: 2
    },

    {
        question: "What did Donald Trump wanted to use to keep out the maxicans?",
        answer1: "G.I Jane",
        answer2: "Arnold Schortinigger",
        answer3: "Wall",
        answer4: "M16 Assolt Rifel",
        correct: 3
    }
]
