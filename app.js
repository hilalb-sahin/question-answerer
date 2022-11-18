
//possible answers 
let answers = ["Seems as an odd question. But yes.", "Yes", "No" , "Maybe" , "Definitely not", "Don't even think about it", "Gladly, no."];

//function for getting a random answer from the answers array
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

let input= document.getElementById('question');

let answerP = document.getElementById("answer");
let idleTime = 0; //initialize the idle time as 0 
idleTime = setInterval(timerIncrement, 60000); //every 1 minute call the callback function

function handleSubmit(){

    answerP.innerHTML = "";
    input.value= "";
    answerP.innerHTML += getRandomItem(answers);
    idleTime=0;
    //reset the idle time if you have submitted the form;
}

// use callback to check idle time


function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime>2) { // 2 minutes limit for idle time
        alert("teller is available for your questions!")
    }
    console.log(idleTime);
}

//
