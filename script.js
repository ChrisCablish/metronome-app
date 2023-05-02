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
    let beatsInASecond = bpm/60;
    let milliseconds = beatsInASecond*1000
    return milliseconds;
}

// Add an event listener to the tempo range input
tempoRangeInput.addEventListener('input', function() {
  // Get the current value of the tempo range input
  currentTempo = tempoRangeInput.value;
  // Update the tempo display element with the current tempo value
  tempoDisplay.textContent = `${currentTempo} BPM`;
  //set milliseconds equal to return value of convert function
  millisecondsBetweenClicks = convertBpmToMilliseconds(currentTempo);
});


start.addEventListener('click', () => {
    setInterval(() => {
        clickSound.currentTime = 0;
        clickSound.play();
        console.log('click');
    }, 300);
});


//SOMETHING WRONG WITH MILLISECONDSBETWEENCLICKS EVERYTHING ELSE WORKING 





