document.getElementById('music-btn').addEventListener('click', function () {
    var audio = document.getElementById('my-audio');
    if (audio.paused) {
        audio.play();
        this.textContent = "Pause"; // Change button text to "Pause"
        localStorage.setItem('isPlaying', 'true'); // Store playing state in local storage
    } else {
        audio.pause();
        this.textContent = "Play"; // Change button text back to "Play"
        localStorage.setItem('isPlaying', 'false'); // Store paused state in local storage
    }
});

// Check the stored state of the audio when the page loads
window.addEventListener('load', function () {
    var audio = document.getElementById('my-audio');
    var isPlaying = localStorage.getItem('isPlaying');

    if (isPlaying === 'true') {
        audio.play(); // Play audio if it was playing before navigating to this page
        document.getElementById('music-btn').textContent = "Pause";
    } else {
        audio.pause(); // Pause audio if it was paused before navigating to this page
        document.getElementById('music-btn').textContent = "Play";
    }
});
