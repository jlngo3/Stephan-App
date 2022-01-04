const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuiestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuiestion()
}


function setNextQuiestion() {
    resetState()
    showQuestion(shuffledQuestions [currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>  {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    } 
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Would you like to continue our relationship?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false}
        ]
    },{
        question: 'Do you love me?',
        answers: [
            {text: 'Yes, of course', correct: true},
            {text: 'No', correct: false}
        ]
    },{
        question: 'What is my favorite color?',
        answers: [
            {text: 'Red', correct: false},
            {text: 'Black', correct: true},
            {text: 'Purple', correct: false},
            {text: 'Pink', correct: false}
        ]
    },{
        question: 'What is my RISING/Ascendant sign?',
        answers: [
            {text: 'Taurus', correct: false},
            {text: 'Aquarius', correct: false},
            {text: 'Leo', correct: true},
            {text: 'Pisces', correct: false}
        ]
    },{
        question: 'What is my MOON sign?',
        answers: [
            {text: 'Aquarius', correct: false},
            {text: 'Taurus', correct: true},
            {text: 'Gemini', correct: false},
            {text: 'Scorpio', correct: false}
        ]
    },{
        question: 'What is my SUN sign?',
        answers: [
            {text: 'Cancer', correct: false},
            {text: 'Leo', correct: false},
            {text: 'Aquarius', correct: true},
            {text: 'Libra', correct: false}
        ]
    },{
        question: 'What is my favorite type of food?',
        answers: [
            {text: 'Seafood', correct: false},
            {text: 'Soups', correct: false},
            {text: 'Salads', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },{
        question: 'What was my favorite song in middle school?',
        answers: [
            {text: 'Lucifer - Shinee', correct: false},
            {text: 'Viva La Vida - Coldplay', correct: false},
            {text: 'Better Together - Jack Johnson', correct: false},
            {text: 'Vanilla Twilight - Owl City', correct: true}
        ]
    },{
        question: 'Finish this sentence: "Stephan is ___________ .',
        answers: [
            {text: 'Hot', correct: false},
            {text: 'Cute', correct: false},
            {text: 'Sexy', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },{
        question: 'What is my favorite physical part of your body?',
        answers: [
            {text: 'Arms', correct: false},
            {text: 'Face', correct: false},
            {text: 'Legs', correct: false},
            {text: 'Penis', correct: false},
            {text: 'Body Hair', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },{
        question: 'Do you have anything planned for 2022 that involves us?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
            {text: 'Im working on it', correct: false},
        ]
    },{
        question: 'Are looking forward to an amazing year?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false}
        ]
    },{
        question: 'How many tattoos do I have?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true}
        ]
    },{
        question: 'How did I get the scar on my face?',
        answers: [
            {text: 'I got hit int he face with a football', correct: false},
            {text: 'I got hit in the face with a basketball', correct: true},
            {text: 'I got hit in the face with a frisbee', correct: false},
            {text: 'I got hit in the face with a volleyball', correct: false}
        ]
    },{
        question: 'What is the first thing you should do when I have an anxiety attack?',
        answers: [
            {text: 'Hold me and focus my breathing', correct: true},
            {text: 'Ask me if Im okay', correct: false},
            {text: 'Distract me with something', correct: false},
            {text: 'None of the above', correct: false}
        ]
    },{
        question: 'What would you do if someone is being rude to me?',
        answers: [
            {text: 'Stand aside and let me stand up for myself', correct: false},
            {text: 'Start throwing punches', correct: false},
            {text: 'Stand up for me and say something back', correct: true},
            {text: 'Pull the other person aside to calmly address the situation', correct: false}
        ]
    },{
        question: 'Do you have my back NO MATTER WHO OR WHAT the situation is about?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
            {text: 'I rather just stand aside and watch', correct: false}
        ]
    },{
        question: 'Do I have a mole on the left side of my nose or right side of my nose?',
        answers: [
            {text: 'Left', correct: true},
            {text: 'Right', correct: false},
            {text: 'Trick question, you dont have a mole there', correct: false}
        ]
    },{
        question: '',
        answers: [
            {text: 'Cancer', correct: false},
            {text: 'Leo', correct: false},
            {text: 'Aquaris', correct: true},
            {text: 'Libra', correct: false}
        ]
    },

]