var questions =[
    {
        question:"Which is the Largest Animal in The world",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Eleghant",correct:false},
            {text:"Giraffe",correct:false},
        ]


    },

    {
        question:"Which is the Smallest Continent in The world",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]


    },
    {
        question:"Which is the Largest Desert in The world",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]


    },

    {
        question:"What is the Capital City of Pakistan",
        answer:[
            {text:"Lahore",correct:false},
            {text:"Karachi",correct:true},
            {text:"Peshawar",correct:false},
            {text:"Multan",correct:false},
        ]


    },
]

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-button");
var nextButton = document.getElementById("next");

var currentQuestionIndex = 0
var score = 0;
var percentage;

function startQuiz(){
    resetState();
    currentQuestionIndex =0
    score=0;
    nextButton.innerHTML="Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    var currentQuestion = questions[currentQuestionIndex]
    var questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        var button = document.createElement("button");
        button.innerHTML = answer.text
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click",selectAnswer);


    })
    
}

function resetState(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    var selectBtn = e.target;
    var isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("Correct")
        
        score ++;
        percentage = (score/questions.length) * 100
        
    }
    else{
        selectBtn.classList.add("InCorrect")

    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("Correct")

        }
        button.disabled = true;
    })

    nextButton.style.display = 'block'

}

function showScore(){
    resetState();
    questionElement.innerHTML= `You Score ${score} out of ${questions.length}  </br> Your Percentage is ${percentage} %!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = 'block'
}






function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}





nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn()

    }
    else{
        startQuiz();
    }
})




startQuiz()