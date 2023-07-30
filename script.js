let timer = 10;
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
let score = 0;
let end = document.querySelector("#quizEnd")
let buttons = document.querySelector("#buttons")
let finalScore = document.querySelector("#finalScore")
let submit = document.querySelector("#submit")


// will have to figure out where exactly to start timer, first page of the thing should have some kind of "start quiz" button, will have to call start timer after they click that button. might also have to make a function to disable timer if they answer all questions. Will definitely have to make a function that if timer === 0, update the page to the "timeout". here's your score, put in your initials to log your highscore, log to local storage 


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

    let intervalId = setInterval(() => {
        timer--;
        updateTimerDisplay(timer);

        if (timer <= 0) {
            clearInterval(intervalId); 
            quizEnd(); 
        }
    }, 1000); 
}


   function spanTime (){
    timeId = setInterval(function(){
        timer -- ;
        answer.style.visibility = "hidden"


    }, 3000)}
   

        // something about the initialize function or the event listener above is causing the current question to ++, needs re-structuring. added a blank line below for quick fix, will get dinged if left as is 
let questions = [
                {question:"Who named the city of Philadelphia?", answers:["William Penn", "George Washington", "Henry Hudson", "Leif Erikson"], correctAnswer:"William Penn"},
                 {question:"What year was Philadelphia established as the capital of the United States?", answers:["1776", "1780", "1790", "1800"], correctAnswer:"1790"},
                 {question:"Who was the first mayor of Philadelphia?", answers:["William Penn", "Griffith Jones", "Edward Shippen", "Humphrey Morrey"], correctAnswer:"Humphrey Morrey"},
                 {question:"Philadelphia is a combination of two words from which language?", answers:["French", "Greek", "Hebrew", "Dutch"], correctAnswer:"Greek"},   
                 {question:"Philadelphia is known as 'The city of ?", answers:["Terrible drivers", "Brotherly love", "Cheesesteaks", "Lights"], correctAnswer:"Brotherly love"}   
]


// structure: questions, the global variable which is made up of several arrays, we take questions at the index 0, the first array, and grab the question obj there. that is the first line in this sequence. The first array contains 3 obj, question, answer and correct answer. to print the available answers, we look at the first array in the questions variable [0], then look for the obj answers, which is an array, and we look for the answers at given indexes 
// renderQuestion();
// have to call renderQuestion after questions variable is defined or text content displays empty
function renderQuestion(){
// going to have to change something about this so that it displays all available answer choices but one of them is linked to the correct answer because this function is being called to render the page for the next question, so currently choice 4 will always be the correct answer. maybe using random numbers, idk will have to think about this further
h2El.textContent = (questions[currentQuestion].question);
questionButton1.textContent = (questions[currentQuestion].answers[0]);
questionButton2.textContent = (questions[currentQuestion].answers[1]);
questionButton3.textContent = (questions[currentQuestion].answers[2]);
questionButton4.textContent = (questions[currentQuestion].answers[3]);

}

buttons.addEventListener("click", function(event){
  
   
if(event.target.matches("button")){
    console.log("clicked")
    // to check if answer clicked was correct answer check if value is the same as correct answer
    
    console.log("value: " + event.target.innerText);
    console.log("Correct Answer: " + questions[currentQuestion].correctAnswer);
    
   
}

if (event.target.innerText === questions[currentQuestion].correctAnswer) {
    answer.style.visibility = "visible";
    answer.textContent = "Correct"
    spanTime()
    score +=10
    console.log(score)
    
   localStorage.setItem("score:", JSON.stringify(score))
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

})

function timeCheck(){
    
}
// incriment the number for currentQuestion when button pressed to render the next question

function quizEnd (){
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
    finalScore.textContent ="Your Score: " + score;
    submit.textContent = "Submit"
    let userName = document.getElementById('name').value
    localStorage.setItem("Name:", JSON.stringify(userName))

}

submit.addEventListener("click", function(event){

    if(event.target.matches("button")){
        let userName = document.getElementById('name').value
        localStorage.setItem("Name:", JSON.stringify(userName))
        
    
    }
    document.location.href = "highScores.html";
    
    })




// event listener to subtract x seconds from the timer on incorrect answer. this will have to be reformatted as currently it is just listening for a click, we want it to only subtract when an answer is wrong. will also have to change the number being subtracted, maybe -10. will have to give id so we can clear interval on quiz end. clearinterval(timerId) currently it is timeId
// container.addEventListener("click",function(){
//     timer-=5;
//     currentIndex++;
//     renderobject()
    
// } )




// function to start timer countdown. Will have to change the h4 below to whichever html element the timer ends up being
