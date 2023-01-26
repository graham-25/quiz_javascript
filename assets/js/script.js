const startButton = document.getElementById('btn-start')

startButton.addEventListener('click' this.startGame)

function startGame() {
    let gameCount = 0;
    displayQuestion()

}

function displayQuestion() {
    
}


const questions [
    {
        question: "What is the capital of United Kingdom?", 
        answer: 
        {text: "Manchester", correct: false },
        {text: "London", correct: true },
        {text: "Birmingham", correct: false },
        {text: "Newcastle", correct: false }
    }

    {
        question: "What colour is grass?",
        answer:
        {text: "Blue", correct: false },
        {text: "yellow", correct: false },
        {text: "Green", correct: true },
        {text: "Red", correct: false }
    }
]