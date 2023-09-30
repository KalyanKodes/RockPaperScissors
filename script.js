const outerContainer = document.querySelector('.outerContainer')
const startButton = document.querySelector('.startGame');
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const imageContainer = document.querySelector(".imagesContainer");
const userImage = document.querySelector(".userImage");
const computerImage = document.querySelector(".computerImage");
const feedbackLabel = document.querySelector('.feedback');
var images = ['./Assests/rock.png' , './Assests/paper.png' , './Assests/scissors.png'];  /* Array that contains the path of every image */
var userChoice = null;
var computerChoice = null;
var userScore = 0;
var computerScore = 0;
// The following event listener wiil render the main container when clicked
startButton.addEventListener('click' , ()=>{
    outerContainer.style.transform = 'scale(1)';
    startButton.style.transform = 'scale(0)';
});
// The following events are responsible for calling theh renderImage function with properties of 0,1,2 when clicked
rockButton.addEventListener('click' , ()=>{
    imageContainer.style.display = 'block';
    userChoice = 'rock';
    renderImage(userImage , 0);
    getRandomNumber();
});
paperButton.addEventListener('click' , ()=>{
    imageContainer.style.display = 'block';
    userChoice = 'paper';
    renderImage(userImage , 1);
    getRandomNumber();
});
scissorsButton.addEventListener('click' , ()=>{
    imageContainer.style.display = 'block';
    userChoice = 'scissors';
    renderImage(userImage , 2);
    getRandomNumber();
});
// This function will render the selected images on the screen to both computer and user
function renderImage(player , choice){
    player.classList.add('move');
    player.src = images[choice];
    setTimeout(()=>{
        player.classList.remove('move');
    } , 500);
};
// This function will generate a random number and invokes the renderImage function to render the image
function getRandomNumber() {
    const randomDecimal = Math.random();
    let choices = ['rock' , 'paper' , 'scissors'];
    const randomNumberBetween0And3 = randomDecimal * 3;
    const randomNumber = Math.floor(randomNumberBetween0And3);
    computerChoice = choices[randomNumber];
    renderImage(computerImage , randomNumber);
    check();
};
// This function wiil check the winning conditions of both user and computer and dispalys the feedback label based on who won and also render s the score
function check(){
    let content = undefined;
    console.clear();
    console.log(`User Choice: ${userChoice}\nComputer Choice: ${computerChoice}`);
    if(userChoice === computerChoice){
        content = 'Draw';
    }
    else if(userChoice === 'rock' && computerChoice === 'scissors'){
        content = 'You Won';
        userScore++;
    }
    else if(userChoice === 'scissors' && computerChoice === 'paper'){
        content = 'You Won';
        userScore++;
    }
    else if(userChoice === 'paper' && computerChoice === 'rock'){
        content = 'You Won';
        userScore++;
    }
    else{
        content = 'Computer Won';
        computerScore++;
    }
    console.log(`User Score: ${userScore}\nComputer Score: ${computerScore}`);
    feedbackLabel.innerHTML = content;
    document.querySelector('.userScore').innerHTML = userScore;
    document.querySelector('.computerScore').innerHTML = computerScore;
};