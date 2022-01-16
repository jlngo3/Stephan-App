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

//once you answer the question and move on, the color of the answers goes back to default
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//questions are random and once you run out, the restart buttons shows, selecting a button and then it hides
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

//if you pick an answer and its true then the color turns green, if false then red
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    } 
}

//once you answer the question and move on, the color of the answers goes back to default
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
        question: 'Are you looking forward to an amazing year?',
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
            {text: 'I got hit in the face with a football', correct: false},
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
        question: 'A number is increased by 2 and then multiplied by 3. The result is 24. What is this number?',
        answers: [
            {text: '6', correct: true},
            {text: '12', correct: false},
            {text: '4', correct: false},
            {text: '7', correct: false}
        ]
    },{
        question: 'Who was the first player in NBA history to make 400 three-pointers in a season?',
        answers: [
            {test: 'Stephen Curry', correct: true},
            {test: 'Trae Young', correct: false},
            {test: 'Laterell Sprewell', correct: false},
            {test: 'Klay Thompson', correct: false}
        ]
    },{
        question: 'When is our anniversary?',
        answers: [
            {test: 'Jan. 28', correct: false},
            {test: 'Jan. 29', correct: true},
            {test: 'Jan. 30', correct: false},
            {test: 'Trick question, it changes depending on our schedule', correct: false}
        ]
    },{
        question: 'What is my favorite quirk that you do?',
        answers: [
            {test: 'Pretending to shoot a basketball', correct: false},
            {test: 'Elevator music', correct: false},
            {test: 'Pointing with middle finger', correct: false},
            {test: 'Leg wiggles', correct: true}
        ]
    },{
        question: 'What was I wearing when we first met?',
        answers: [
            {test: 'Denim jacket and sweatpants', correct: false},
            {test: 'Blue sweater and biker shorts', correct: true},
            {test: 'Nike hoodie and leggings', correct: false},
            {test: 'Black windbreaker and leggings', correct: false}
        ]
    },{
        question: 'What is my preferred fashion style?',
        answers: [
            {test: 'Comfy, streetwear', correct: false},
            {test: 'Preppy, cute', correct: false},
            {test: 'Edgy, classy', correct: true},
            {test: 'Punky, goth', correct: false}
        ]
    },{
        question: 'What is the correct order of my love language?', 
        answers: [
            {test: 'Words of affirmation, Acts of service, Quality time', correct: false},
            {test: 'Acts of service, recieving gifts, Physical touch', correct: false},
            {test: 'Recieving gifts, Quality time, Words of affirmation', correct: false},
            {test: 'Quality time, Words of affirmation, Physical touch', correct: true},
            {test: 'Physical touch, Quality time, Words of affirmation', correct: false},
            {test: 'None of the above'}
        ]
    },{
        question: 'What is my Myer Briggs personality type? (You may use google for this one)', 
        answers: [
            {test: 'INTJ', correct: false},
            {test: 'ENTJ', correct: false},
            {test: 'ENFJ', correct: false},
            {test: 'INFJ', correct: true}
        ]
    },{
        question: 'What are my top 3 favorite holidays?', 
        answers: [
            {test: 'Christmas, Halloween, Valentines Day', correct: false},
            {test: 'New Years, Thanksgiving, Christmas', correct: false},
            {test: 'Valentines day, New Years, Halloween', correct: false},
            {test: 'Halloween, Christmas, Valentines Day', correct: true}
        ]
    },{
        question: 'What is my favorite Harry Potter Movie?', 
        answers: [
            {test: 'Deathly Hallows', correct: false},
            {test: 'Half Blood Prince', correct: false},
            {test: 'Goblet of Fire', correct: true},
            {test: 'Chamber of Secrets', correct: false}
        ]
    },{
        question: 'Who do I prefer to play on League atm?', 
        answers: [
            {test: 'Miss Fortune', correct: false},
            {test: 'Jinx', correct: false},
            {test: 'Viegar', correct: false},
            {test: 'Thresh', correct: false},
            {test: 'Kha Zix', correct: true},
            {test: 'None of the above', correct: false}
        ]
    },{
        question: 'Who is my favorite Youtuber?', 
        answers: [
            {test: 'Jacksepticeye', correct: false},
            {test: 'Markiplier', correct: false},
            {test: 'Pewdiepie', correct: true},
            {test: 'IAMKARENO', correct: false}
        ]
    },{
        question: 'What type of date do you think I would enjoy the most?', 
        answers: [
            {test: 'Museum hopping', correct: true},
            {test: 'Pinic at a park', correct: false},
            {test: 'Stay home and chill', correct: false},
            {test: 'Long walks on short beaches', correct: false}
        ]
    },{
        question: 'What GRAND gesture do you think I would enjoy the most', 
        answers: [
            {test: 'Decorating a room with flowers and candles, romantic music playing, cute fits and great food', correct: false},
            {test: 'Plan trip to another city, state or country', correct: false},
            {test: 'Plan date to dance the night away in cute fits', correct: false},
            {test: 'All of the above', correct: true}
        ]
    },


]