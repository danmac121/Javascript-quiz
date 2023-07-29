let timer = 60;
let timeId;
let currentQuestion = 0
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let h1El = document.querySelector("#question");

// will have to figure out where exactly to start timer, first page of the thing should have some kind of "start quiz" button, will have to call start timer after they click that button. might also have to make a function to disable timer if they answer all questions. Will definitely have to make a function that if timer === 0, update the page to the "timeout". here's your score, put in your initials to log your highscore, log to local storage 

// 
let questions = [{question:"What is Dan's favorite color?", answers:["red", "blue", "purple", "gold"], correctAnswer:"blue"},
                 {question:"What is Dan's favorite game?", answers:["Squad", "Minecraft", "Battle Bit", "Ready or Not"], correctAnswer:"Minecraft"},
                 {question:"What is Dan's favorite hobby?", answers:["piano", "reading", "chess", "video games"], correctAnswer:"video games"},
                 {question:"Who is Dan's favorite friend?", answers:["sean", "ben", "timmy", "joe"], correctAnswer:"ben"}   
]

// structure: questions, the global variable which is made up of several arrays, we take questions at the index 0, the first array, and grab the question obj there. that is the first line in this sequence. The first array contains 3 obj, question, answer and correct answer. to print the available answers, we look at the first array in the questions variable [0], then look for the obj answers, which is an array, and we look for the answers at given indexes, 0,2,and 3 because there are 4 answers, but the second object in the array[1] is also equal to the correct answer obj. 
renderQuestion();
// have to call renderQuestion after questions variable is defined or text content displays empty
function renderQuestion(){
// going to have to change something about this so that it displays all available answer choices but one of them is linked to the correct answer because this function is being called to render the page for the next question, so currently choice 4 will always be the correct answer. maybe using random numbers, idk will have to think about this further
h1El.textContent = (questions[currentQuestion].question);
questionButton1.textContent = (questions[currentQuestion].answers[0]);
questionButton2.textContent = (questions[currentQuestion].answers[2]);
questionButton3.textContent = (questions[currentQuestion].answers[3]);
questionButton4.textContent = (questions[currentQuestion].correctAnswer);

}

quizDiv.addEventListener("click", function(event){

if(event.target.matches("button")){
    console.log("clicked")
    // to check if answer clicked was correct answer check if value is the same as correct answer
    console.log("value: " + event.target.innerText);
    console.log("Correct Answer: " + questions[currentQuestion].correctAnswer);
    currentQuestion++
renderQuestion();
}


})

// incriment the number for currentQuestion when button pressed to render the next question








// event listener to subtract x seconds from the timer on incorrect answer. this will have to be reformatted as currently it is just listening for a click, we want it to only subtract when an answer is wrong. will also have to change the number being subtracted, maybe -10. will have to give id so we can clear interval on quiz end. clearinterval(timerId) currently it is timeId
// container.addEventListener("click",function(){
//     timer-=5;
//     currentIndex++;
//     renderobject()
    
// } )




// function to start timer countdown. Will have to change the h4 below to whichever html element the timer ends up being
function startTimer(){
    timeId = setInterval(function(){
                timer--;
                h4El.textContent = timer;
        
              
        
        
            },1000)


}