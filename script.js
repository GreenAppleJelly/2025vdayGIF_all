let currentIndex = 0;

const sentences = [
    "Will you be my valentine?",
    "Even if I ask nicely?",
    "Pretty please?",
    "I'll be sad TwT",
    "TwT",
    "I'M SO HAPPY!!",
];

const button2Texts = [
    "No",
    "Nope",
    "Still No",
    "No",
];

const gifPaths = [
    "dudurosegive.gif",
    "dudujumprizz.gif",
    "dudusadcute.gif",
    "duduehugslove.gif",
];

// Function to toggle music play/pause
function toggleMusic() {
    let audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        document.getElementById('musicButton').textContent = "Pause Music"; // Change button text to "Pause"
    } else {
        audio.pause();
        document.getElementById('musicButton').textContent = "Play Music"; // Change button text to "Play"
    }
}

document.getElementById('musicButton').addEventListener('click', toggleMusic);

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainGif').src = gifPaths[3];
    document.getElementById('mainSentence').textContent = sentences[5];
    this.style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < sentences.length - 1) {
        document.getElementById('mainSentence').textContent = sentences[currentIndex];
        document.getElementById('mainGif').src = gifPaths[1];
        this.textContent = button2Texts[currentIndex - 1];
    } else {
        document.getElementById('mainSentence').textContent = sentences[4];
        document.getElementById('mainGif').src = gifPaths[2];
        this.style.display = 'none';
        document.getElementById('yesButton').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.volume = 0.2;
});
