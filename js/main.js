//Init SpeechSynth API
const synth = window.speechSynthesis;


//DOM Elements 
const textForm = document.querySelector('form');
const rate = document.querySelector('#rate'); //slider itself 
const rateValue = document.querySelector('#rate-value'); //value of slider 
// const body = document.querySelector('body'); 


var number = 1; 

function jump(){

    number = document.getElementById('jump').value; 

    document.getElementById('number').innerHTML = number;

}
function range(){

    start = document.getElementById('start').value; 
    number = start; 
    end = document.getElementById('end').value;

    document.getElementById('number').innerHTML = number;

}

function speakitAuto(){
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

function speakit(){
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
function next(){
    // alert("next")
    number++;
  document.getElementById('number').innerHTML = number;
   
}
function prev(){
    // alert("next")
    number--;
  document.getElementById('number').innerHTML = number;
   
}

//when click button, call speach function 
//Text form submit

// EVENT LISTENERS 
textForm.addEventListener('submit', e =>{
    e.preventDefault();
    speakit();
   

});


 
rate.addEventListener('change', e=> rateValue.textContent = rate.value);