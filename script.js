let currentIndex = 0;  // Properly initialize currentIndex

const sentences = [
    "Strawberry, will you be my valentine?", // Sentence1
    "Even if I ask nicely?",        // Sentence2
    "Pretty please?", // Sentence3
    "I'll be sad TwT", // Sentence4
    "TwT", // Sentence5
    "I'M SO HAPPY!!", // SentenceYES
];

const button2Texts = [
    "No",      // Text1
    "Nope",    // Text2
    "Still No", // Text3
    "No",       // Text4
];

const gifPaths = [
    "dudurosegive.gif", // Initial GIF
    "dudujumprizz.gif", // ifno GIF
    "dudusadcute.gif", // finalno GIF
    "duduehugslove.gif", // ifyes GIF
];

function playMusic() {
    let audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
    }
    // Remove event listeners after the first play
    document.getElementById('yesButton').removeEventListener('click', playMusic);
    document.getElementById('noButton').removeEventListener('click', playMusic);
}

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainGif').src = gifPaths[3]; // Change to ifyes GIF
    document.getElementById('mainSentence').textContent = sentences[5]; // Change to final yes sentence
    this.style.display = 'none'; // Remove yes button
    document.getElementById('noButton').style.display = 'none'; // Remove no button
    playMusic(); // Play music on button click
});

document.getElementById('noButton').addEventListener('click', function() {
    playMusic(); // Play music on button click
    currentIndex++;  // Increment the index to move to the next sentence and button text

    if (currentIndex < sentences.length - 1) {  // Check if it's not the last no
        document.getElementById('mainSentence').textContent = sentences[currentIndex];
        document.getElementById('mainGif').src = gifPaths[1]; // Maintain ifno GIF for all nos except the last
        this.textContent = button2Texts[currentIndex - 1];  // Update button text
    } else {
        // Handle the last no scenario
        document.getElementById('mainSentence').textContent = sentences[4]; // Directly use index 4 for "TwT"
        document.getElementById('mainGif').src = gifPaths[2]; // Change to finalno GIF
        this.style.display = 'none';  // Remove no button
        document.getElementById('yesButton').style.display = 'none';  // Remove yes button as well
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.volume = 0.2;  // Set the volume to 20%
});
