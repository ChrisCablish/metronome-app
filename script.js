// const tempoRangeInput = document.getElementById('tempo-range');
// const tempoDisplay = document.getElementById('tempo-display');
// const clickSound = document.getElementById('click-sound');
// const start = document.getElementById('start-button');
// const stop = document.getElementById('stop-button');

// clickSound.volume = 1;

// let togglePlay = false;


// //GET DEFAULT MET VALUE & DISPLAY IT = 130 (min + (max - min))
// let currentTempo = tempoRangeInput.value;
// tempoDisplay.textContent = `${currentTempo} BPM`
// let millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

// // Function to convert bpm to milliseconds for setInterval() function
// function convertBpmToMilliseconds(bpm) {
//     const beatsPerSecond = bpm / 60;
//     const msPerBeat = 1000 / beatsPerSecond;
//     return msPerBeat;
//   }

// // Add an event listener to the tempo range input
// tempoRangeInput.addEventListener('input', function() {
//   currentTempo = tempoRangeInput.value;
//   tempoDisplay.textContent = `${currentTempo} BPM`;
//   millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

//   //THIS SECTION ALLOWS TEMPO TO BE ADJUSTED DURING PLAYBACK
//   if (togglePlay === true) {
//     clearInterval(intervalID);
//     intervalID = setInterval(() => {
//       clickSound.currentTime = 0;
//       clickSound.play();
//   }, millisecondsBetweenClicks);
//   } else if (togglePlay === false) {
//     return
//   }
// });

// let intervalID

// start.addEventListener('click', () => {
//     togglePlay = true;
//     intervalID = setInterval(() => {
//         clickSound.currentTime = 0;
//         clickSound.play();
//     }, millisecondsBetweenClicks);
// });

// stop.addEventListener('click', () => {
//     togglePlay = false;
//     clearInterval(intervalID);
// });


const tempoRangeInput = document.getElementById('tempo-range');
const tempoDisplay = document.getElementById('tempo-display');
const clickSound = document.getElementById('click-sound');
const start = document.getElementById('start-button');
const stop = document.getElementById('stop-button');

let togglePlay = false;
let timeoutID;

//GET DEFAULT MET VALUE & DISPLAY IT = 130 (min + (max - min))
let currentTempo = tempoRangeInput.value;
tempoDisplay.textContent = `${currentTempo} BPM`
let millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

// Function to convert bpm to milliseconds for setTimeout() function
function convertBpmToMilliseconds(bpm) {
    const beatsPerSecond = bpm / 60;
    const msPerBeat = 1000 / beatsPerSecond;
    return msPerBeat;
}

// Add an event listener to the tempo range input
tempoRangeInput.addEventListener('input', function() {
    currentTempo = tempoRangeInput.value;
    tempoDisplay.textContent = `${currentTempo} BPM`;
    millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

    //THIS SECTION ALLOWS TEMPO TO BE ADJUSTED DURING PLAYBACK
    if (togglePlay === true) {
        clearTimeout(timeoutID);
        playClickSound();
    }
});

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
    timeoutID = setTimeout(playClickSound, millisecondsBetweenClicks);
}

start.addEventListener('click', () => {
    togglePlay = true;
    playClickSound();
});

stop.addEventListener('click', () => {
    togglePlay = false;
    clearTimeout(timeoutID);
});









