document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainGif').src = 'new_path_yes.gif';
    document.getElementById('mainSentence').textContent = 'New sentence for yes.';
    this.textContent = 'Clicked Yes';
    this.style.width = '150px';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('mainGif').src = 'new_path_no.gif';
    document.getElementById('mainSentence').textContent = 'New sentence for no.';
    this.textContent = 'Clicked No';
    this.style.width = '150px';
});
