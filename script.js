const tempoRangeInput = document.getElementById('tempo-range');
const tempoDisplay = document.getElementById('tempo-display');
const clickSound = document.getElementById('click-sound');
const start = document.getElementById('start-button');
const stop = document.getElementById('stop-button');


//GET DEFAULT MET VALUE & DISPLAY IT = 130 (min + (max - min))
let currentTempo = tempoRangeInput.value;
tempoDisplay.textContent = `${currentTempo} BPM`
let millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

// Function to convert bpm to milliseconds for setInterval() function
function convertBpmToMilliseconds(bpm) {
    const beatsPerSecond = bpm / 60;
    const msPerBeat = 1000 / beatsPerSecond;
    return msPerBeat;
  }

// Add an event listener to the tempo range input
tempoRangeInput.addEventListener('input', function() {
  // Get the current value of the tempo range input
  currentTempo = tempoRangeInput.value;
  // Update the tempo display element with the current tempo value
  tempoDisplay.textContent = `${currentTempo} BPM`;
  //set milliseconds equal to return value of convert function
  millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);

  //THIS SECTION ALLOWS TEMPO TO BE ADJUSTED DURING PLAYBACK
  //stop current tempo when slider is adjusted
  clearInterval(intervalID);
  //new interval and interval ID for new tempo. 
  intervalID = setInterval(() => {
    clickSound.currentTime = 0;
    clickSound.play();
}, millisecondsBetweenClicks);

});

let intervalID

start.addEventListener('click', () => {
    intervalID = setInterval(() => {
        clickSound.currentTime = 0;
        clickSound.play();
    }, millisecondsBetweenClicks);
});


stop.addEventListener('click', () => {
    clearInterval(intervalID);
});





