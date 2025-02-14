let currentIndex = 0;  // Properly initialize currentIndex

const sentences = [
    "Will you be my valentine?", // Sentence1
    "Even if I ask nicely?",        // Sentence2
    "Pretty please?", // Sentence3
    "I'll be sad TwT", // Sentence4
    "TwT", // Sentence5
    "I'M SO HAPPY!!", // SentenceYES
    // Add more as needed up to sentence8
];

const button2Texts = [
    "No",      // Text1
    "Nope",// Text2
    "Still No", // Text3
    "No", // Text4
    // Add more corresponding texts for each sentence
];

const gifPaths = [
    "dudurosegive.gif", // Initial GIF
    "dudujumprizz.gif", // ifno GIF
    "dudusadcute.gif", // finalno GIF
    "duduehugslove.gif", // ifyes GIF
    // Add paths for more GIFs as needed
];

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainGif').src = gifPaths[3]; // Change to ifyes GIF
    document.getElementById('mainSentence').textContent = sentences[5]; // Change to final yes sentence
    this.style.display = 'none'; // Remove yes button
    document.getElementById('noButton').style.display = 'none'; // Remove no button
});

document.getElementById('noButton').addEventListener('click', function() {
    currentIndex++;  // Increment the index to move to the next sentence and button text

    if (currentIndex < sentences.length - 1) {  // Check if it's not the last no
        document.getElementById('mainSentence').textContent = sentences[currentIndex];
        document.getElementById('mainGif').src = gifPaths[1]; // Maintain ifno GIF for all nos except the last
        this.textContent = button2Texts[currentIndex - 1];  // Update button text
    } else {
        // Handle the last no scenario
        document.getElementById('mainSentence').textContent = sentences[currentIndex];
        document.getElementById('mainGif').src = gifPaths[2]; // Change to finalno GIF
        this.style.display = 'none';  // Remove no button
        document.getElementById('yesButton').style.display = 'none';  // Remove yes button as well
    }
});

