let timer = 60;
let timeId;
let spanTimeout = 5;
let currentQuestion = 0
let init = document.querySelector("#init");
let quizDiv = document.querySelector("#quiz");
let initial = document.querySelector("#initialize")
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let h1El = document.querySelector("#start");
let h2El = document.querySelector("#question");
let h3El = document.querySelector("#done")
let countdown = document.querySelector("#countdown")
let answer = document.querySelector("#correct")
let playerScore = 0;
let end = document.querySelector("#quizEnd")
let buttons = document.querySelector("#buttons")
let finalScore = document.querySelector("#finalScore")
let submit = document.querySelector("#submit")
let scores = document.querySelector("#highScores")
let tryAgain = document.querySelector("#tryAgain")
let highScoreLink = document.querySelector("#highScoreLink")
let userName = document.getElementById('name').value
let allScores = document.querySelector("#allScores")
let nameBox = document.querySelector("#name")
let goAway = document.querySelector("#goAway")
let intervalId;

initialize()
function initialize(){
    h1El.textContent = ("Press the start button to begin the quiz.");
    init.textContent = ("Start");
    h2El.style.visibility = "hidden";
    questionButton2.style.visibility = "hidden";
    questionButton3.style.visibility = "hidden";
    questionButton4.style.visibility = "hidden";
    questionButton1.style.visibility = "hidden";
    correct.style.visibility = "hidden";
    end.style.visibility = "hidden";
    tryAgain.style.visibility ="hidden"
}



init.addEventListener("click", function(event){

    if(event.target.matches("button")){
   
    h1El.remove()
    init.remove()
    
    h2El.style.visibility = "visible"
    questionButton1.style.visibility = "visible"
    questionButton2.style.visibility = "visible"
    questionButton3.style.visibility = "visible"
    questionButton4.style.visibility = "visible"
    renderQuestion();
    startTimer();
    
    }
    
    
    })

function updateTimerDisplay(timer) {
    document.getElementById('countdown').textContent = timer;
}

function startTimer() {
    timer
    updateTimerDisplay(timer);

    intervalId = setInterval(() => {
        timer--;
        updateTimerDisplay(timer);

        if (timer <= 0) {
           
            quizEnd(); 
        }
    }, 1000); 
}


   function spanTime (){
    timeId = setInterval(function(){
        timer -- ;
        answer.style.visibility = "hidden"


    }, 3000)}
   
   
let questions = [
                {question:"Who named the city of Philadelphia?", answers:["William Penn", "George Washington", "Henry Hudson", "Leif Erikson"], correctAnswer:"William Penn"},
                 {question:"What year was Philadelphia established as the capital of the United States?", answers:["1776", "1780", "1790", "1800"], correctAnswer:"1790"},
                 {question:"Who was the first mayor of Philadelphia?", answers:["William Penn", "Griffith Jones", "Edward Shippen", "Humphrey Morrey"], correctAnswer:"Humphrey Morrey"},
                 {question:"Philadelphia is a combination of two words from which language?", answers:["French", "Greek", "Hebrew", "Dutch"], correctAnswer:"Greek"},   
                 {question:"Philadelphia is known as 'The city of ?", answers:["Terrible drivers", "Brotherly love", "Cheesesteaks", "Lights"], correctAnswer:"Brotherly love"},
                 {question:"", answers:[""], correctAnswer:""}
]



function renderQuestion(){

h2El.textContent = (questions[currentQuestion].question);
questionButton1.textContent = (questions[currentQuestion].answers[0]);
questionButton2.textContent = (questions[currentQuestion].answers[1]);
questionButton3.textContent = (questions[currentQuestion].answers[2]);
questionButton4.textContent = (questions[currentQuestion].answers[3]);

}

buttons.addEventListener("click", function(event){
    
   
if(event.target.matches("button")){
   
    
   
}

if (event.target.innerText === questions[currentQuestion].correctAnswer) {
    answer.style.visibility = "visible";
    answer.textContent = "Correct"
    spanTime()
    playerScore +=10
    
    
   
}
if (event.target.innerText != questions[currentQuestion].correctAnswer)  {
    answer.style.visibility = "visible";
    answer.textContent = "Wrong!";
    timer -=5
   
    spanTime();
    

}


if (answer.style.visibility = "visible"){
    currentQuestion++;
    renderQuestion();
    
   
}
// the only way i could get the if statement below to work is if I added another blank question in the questions array. I tried a dozen solutions over several hours, and this works so i'm sticking with it.
if (currentQuestion >= questions.length -1) {
    quizEnd();
}

})

function timeCheck(){
    
}


function quizEnd (){
    clearInterval(intervalId); 
    initial.style.visibility = "hidden";
    quizDiv.style.visibility = "hidden";
    countdown.style.visibility = "hidden";
    end.style.visibility = "visible";
    h2El.style.visibility = "hidden";
    questionButton2.style.visibility = "hidden";
    questionButton3.style.visibility = "hidden";
    questionButton4.style.visibility = "hidden";
    questionButton1.style.visibility = "hidden";
    correct.style.visibility = "hidden";
    finalScore.textContent ="Your Score: " + playerScore;
    submit.textContent = "Submit"
    tryAgain.style.visibility = "hidden"
    finalScore.textContent = "Your Score: " + playerScore;
}

submit.addEventListener("click", function(event){

    if(event.target.matches("button")){
        let userName = document.getElementById('name').value
        let userScore = playerScore;
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push({name: userName, score: userScore});
        localStorage.setItem('highScores', JSON.stringify(highScores))
        
    
        displayHighScores();
    }
    
    })
    
    highScoreLink.addEventListener("click", function(event){
  
   
        if(event.target.matches("button")){
           displayHighScores();
            
           
        }})
        

tryAgain.addEventListener("click", function(event){

    if(event.target.matches("button")){
   
    location.reload();
    }
    
    
    })

    

function displayHighScores() {
    initial.style.visibility = "hidden";
    quizDiv.style.visibility = "hidden";
    countdown.style.visibility = "hidden";
    end.style.visibility = "hidden";
    h2El.style.visibility = "hidden";
    questionButton2.style.visibility = "hidden";
    questionButton3.style.visibility = "hidden";
    questionButton4.style.visibility = "hidden";
    questionButton1.style.visibility = "hidden";
    correct.style.visibility = "hidden";
    highScoreLink.style.visibility = "hidden";
    scores.textContent = "High Scores";
    tryAgain.style.visibility = "visible";
    tryAgain.textContent = "Try again";
    h3El.style.visibility = "hidden"
    finalScore.style.visibility = "hidden"
    nameBox.style.visibility = "hidden"
    goAway.style.visibility ="hidden"
    submit.style.visibility = "hidden"
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Sorts the scores
    highScores.sort((a, b) => b.score - a.score);

    
    let highScoresList = document.getElementById('allScores');
    highScoresList.innerHTML = '';
// function for each element in an array
    highScores.forEach((entry, index) => {
        let listEl = document.createElement('li');
        // entry is like the key
        listEl.textContent = (index + 1) + '. ' + entry.name + ': ' + entry.score;
        highScoresList.appendChild(listEl);
    });
}










