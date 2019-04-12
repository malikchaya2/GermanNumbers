//Init SpeechSynth API
const synth = window.speechSynthesis;


//DOM Elements 
const textForm = document.querySelector('form');
const rate = document.querySelector('#rate'); //slider itself 
const rateValue = document.querySelector('#rate-value'); //value of slider 
// const body = document.querySelector('body'); 


var number = 1; 
current = 1;
start= 0; 
end = 0 ; 
total = 1; 
started = 0; 
var d=0; 

// quiz variables
quizcurrent= current-1; 
var quizarray = [];
quizScore = 0; 



function restart(){
    console.log("in restart ")
    current = 1;
    number = start;  
    document.getElementById("container").style.display = "block";
    document.getElementById("cont").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    
    // var x = document.getElementById("cont");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    //   } else {
    //     x.style.display = "none";
    //   }
    // // document.getElementById("cont").style.display = "none";
    // document.getElementById("container").style.visibility = "visible";
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
    document.getElementById('number').innerHTML = number;
}
function jump(){
    console.log("in jump ")

    number = document.getElementById('start').value; 

    document.getElementById('number').innerHTML = number;

}
function range(){
    document.getElementById("prevButton").style.display = "none";
    console.log("in range ")
    //hide space 
    document.getElementById("sp").innerHTML= "";
    // unhide box 
    document.getElementById("page").style.display = "block";
    
    display = document.getElementById('range');
    start = document.getElementById('start').value;
    current = 1; 
    number = start; 
    end = document.getElementById('end').value;
    total = (end - start) + 1;
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
    document.getElementById('number').innerHTML = number;
}

function speakitAuto(){
    console.log("in speakitauto")
    if((current + 1) <= 1){
        console.log("current = " + current + "about to hide in speakitauto")
        document.getElementById("prevButton").style.display = "none";
    }
    else{
        console.log("current = " + current + "about to unhide in speakitauto")
        document.getElementById("prevButton").style.display = "block";
    }
    //check if already speaking 
    if(synth.speaking){
        console.error('Already Speaking');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(number)
    utterance.pitch = 1
    utterance.volume = 1
    // utterance.rate = 1
    utterance.rate= rate.value;
    utterance.lang = 'de-DE'
    speechSynthesis.speak(utterance)
    console.log(`Voices #: ${speechSynthesis.getVoices().length}`)
    speechSynthesis.getVoices().forEach(voice => {
    //   console.log(voice.name, voice.lang)
    })
    if(current >= total){
        setTimeout(done, 1500) 
    }
    setTimeout(nextNumber, 1500)
}

function done(){
    console.log("in done")
    // document.getElementById("prevButton").style.display = "none";
    document.getElementById("container").style.display = "none";
   
    
    var x = document.getElementById("cont");
    if (x.style.display === "none") {
        x.style.display = "block";
        // document.getElementById("container").style.visibility = "hidden";
    } else {
        var target = document.getElementById("cont");
    // document.getElementById("container").style.visibility = "hidden";
    target.innerHTML = '<div class="row ">' +
    '<div class="col-12">' +
            '<div class="mx-auto counter " >' +
                    'Congratualtions! You Finished Stuyding ' + start + " to " + end + '!' +
                    '<img src="https://media.giphy.com/media/xT8qB7u5XikjS4OGzK/giphy.gif" alt="">' + 
       ' </div>' + 
    '</div>' +
   
'</div>'  +

'<div class="row">' + 
       ' <button class="btn btn-secondary btn-lg btn-block " onclick="restart();">Restart Practice </botton>' + 
        '<button class="btn btn-secondary btn-lg btn-block " onclick="startQuiz();">Take a Quiz</botton>' +
'</div>'
    }
    
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}
function speakit(){
    console.log("in speakit ")
    //check if already speaking 
    if(synth.speaking){
        console.error('Already Speaking');
        return;
    }
        
    const utterance = new SpeechSynthesisUtterance(number)
    utterance.pitch = 1
    utterance.volume = 1
    // utterance.rate = 1
    utterance.rate= rate.value;
    utterance.lang = 'de-DE'

    

    speechSynthesis.speak(utterance)

    console.log(`Voices #: ${speechSynthesis.getVoices().length}`)

    speechSynthesis.getVoices().forEach(voice => {
      console.log(voice.name, voice.lang)
    })
}

function nextNumber(){
    console.log("in number ")
    current++; 
    number++;
    // current= current + 1; 
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    
    display.innerHTML = div
  document.getElementById('number').innerHTML = number;
   
}
function next(){

    console.log("in next ")
    if(current == total){
        done(); 
        return; 
    }
    // current++; 
    number++;
    current++;
    // current= current + 1; 
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
  document.getElementById('number').innerHTML = number;
  
}
function prev(){
    console.log("current = " + current)
    console.log("in prev ")
    if((current - 1) <= 1){
        console.log("current = " + current + "about to hide in speakitauto")
        document.getElementById("prevButton").style.display = "none";
    }
    if(current == 1 || current <= 0){
        document.getElementById("prevButton").style.display = "none";
        alert("oops, you've reached the end")
        return; 
    }
    number--;
    current = current-1; 
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
  document.getElementById('number').innerHTML = number;
}

function startQuiz(){ 
    document.getElementById('answer').value = "";
    restorePlayIcon(); 
    d = 0; 
    console.log("in startquiz ")
   
    document.getElementById("container").style.display = "block";
    document.getElementById("page").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    current = 1
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div

    start = parseInt(start)
    for (i = start ; i<= end; i++) {
        quizarray.push(i); 
    }
    quizarray.sort(function(a, b){return 0.5 - Math.random()});
    console.log(quizarray);

}
function play(){  
    console.log("in play ")  
    quizspeak(quizarray[quizcurrent]); 
    
}
function check(){
    console.log("in check ")
    // alert("current: " + current )
    
    givenanswer = document.getElementById('answer').value; 
    answer= quizarray[quizcurrent]
    if(answer == givenanswer){
        // alert("correct")
        document.getElementById("plimg").src = "https://media.giphy.com/media/PhH1YUDVz6ibilN4Mq/giphy.gif";
        quizScore++; 
        setTimeout(restorePlayIcon, 1100) 
    }else{
        // document.getElementById("plimg").src = "https://media.giphy.com/media/pjFF8YLW996aXqFHAu/giphy.gif";
        
        document.getElementById("quiz").style.display = "none";
        // alert("done display")
        div = '  <div class="col-6">' +
        '<img src="https://media.giphy.com/media/pjFF8YLW996aXqFHAu/giphy.gif" alt="INCORRECT">' + 
     ' </div>' +
      '<div class=" col-6 mt-5 pt-5">' +
        '<div class="topspace mt-5 pt-5 pb-3 counter">Correct Answer: '  + answer
        +
        ' </div> ' +
        '<button class="btn btn-secondary btn-lg btn-block " onclick="play();">Pronounce It </botton>'+ 
      '  <button class="btn btn-secondary btn-lg btn-block " onclick="quiznext();">Next </botton>   ' +
     ' </div>'
        document.getElementById("incorrect").innerHTML = div; 
        console.log("done attatching div ")
        return
        
    }
    // console.log("quiz current: " + quizcurrent +"length"+ quizarray.length + " is current greater?")
    if(current >= quizarray.length){
        doneQuiz();
        return 
    }

    current++;
    quizcurrent = current -1; 
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
    document.getElementById('answer').value = "";

}
function quiznext(){
    console.log("in quiznext ")
    if(current >= quizarray.length){
        doneQuiz()
        return 
    }
    document.getElementById("quiz").style.display = "block";
    document.getElementById("incorrect").innerHTML = ""; 
    
    current++;
    quizcurrent = current -1; 
    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div

}
function restorePlayIcon(){
    if(d == 0){
        document.getElementById("plimg").src = "img/pl.png";
    }
    
    

}
function doneQuiz(){
    d = 1; 
    console.log("in donequiz ")
    console.log("done")
    document.getElementById("quiz").style.display = "none";
    document.getElementById("range").style.display = "none";
    document.getElementById("incorrect").style.display = "none"; 
    
    var newinner =  '<div class="row mt-5 ">' +
     '  <div class="col-6">' +
    ' <img id = "plimg" src="img/score.png" > ' + 
 ' </div>' +
  '<div class=" col-6 mt-5 pt-5">' +
    '<div class="topspace mt-5 pt-5 pb-3 counter">' +
     "Your Score: " + 
    quizScore + '/' + total +
    ' </div> ' +
    ' <button class="btn btn-secondary btn-lg btn-block " onclick="location.reload();">Start New Targeted Study</botton>' + 
    '<button class="btn btn-secondary btn-lg btn-block " onclick="retake();">Retake Quiz</botton>' +
    '</div>' +
    '</div>';

    var inner = '<div class="row mt-5 ">' +
            '<div class="col-12">' +
            '<div class="mx-auto counter " >' +
            ' <img id = "plimg" src="img/score.png" >    ' +
             "Your Score: " + 
             quizScore + '/' + total +
            ' </div>' + 
            '</div>' +
            '</div>'  +
            '<div class="row">' + 
            ' <button class="btn btn-secondary btn-lg btn-block " onclick="location.reload();">Start New Targeted Study</botton>' + 
            '<button class="btn btn-secondary btn-lg btn-block " onclick="startQuiz();">Retake Quiz</botton>' +
            '</div>';
    document.getElementById('done').innerHTML = number;
    document.getElementById('done').innerHTML = newinner;
   
    quizScore = 0; 
}
function quizspeak(u){
    console.log("in quizspeak ")
    
    //check if already speaking 
    if(synth.speaking){
        console.error('Already Speaking');
        return;
    }
        
    const utterance = new SpeechSynthesisUtterance(u)
    utterance.pitch = 1
    utterance.volume = 1
    // utterance.rate = 1
    utterance.rate= rate.value;
    utterance.lang = 'de-DE'

    speechSynthesis.speak(utterance)

    // console.log(`Voices #: ${speechSynthesis.getVoices().length}`)

    speechSynthesis.getVoices().forEach(voice => {
    })
}
function retake(){
    console.log(quizarray)
    number = start; 
    current = 1; 

    div = '<div class="mx-auto counter" style="width: 200px;">' +  current + "/" + total + '</div>'
    display.innerHTML = div
    alert("in retake") 
    console.log("in retake")
    d = 0; 
   
    document.getElementById("quiz").style.display = "block";
    document.getElementById("range").style.display = "block";
    document.getElementById("incorrect").style.display = "block";
    document.getElementById('done').innerHTML = "";
    document.getElementById("plimg").src = "img/pl.png";
    document.getElementById('answer').value = "";
    // document.getElementById("prevButton").style.display = "none";
    quizcurrent = current -1;
     
}

// EVENT LISTENERS 
textForm.addEventListener('submit', e =>{
    e.preventDefault();
    speakit();
   

});


 
rate.addEventListener('change', e=> rateValue.textContent = rate.value);