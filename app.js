// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const askfortuneButton = document.getElementById('ask');
const restartButton = document.getElementById('restart');

const initialContainer = document.getElementById('initial-container');
const fortuneCont = document.getElementById('fortune-cont');

const fortune = document.getElementById('fortune');

const answers = [
    'Yes, for sure!',
    'It is most certain!',
    'It is decided',
    'Without any doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

askfortuneButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    initialContainer.classList.toggle('hide');
    fortuneCont.classList.toggle('hide');
});
