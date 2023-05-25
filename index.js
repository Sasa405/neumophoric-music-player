function togglePlay() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const progTimeLeft = document.querySelector('.prog-time .left');
    const progBarInner = document.querySelector('.prog-bar-inner');
    const duration = audioPlayer.duration;

    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause fa-lg"></i>';

        // Update the progress time and progress bar dynamically
        const updateTime = setInterval(function() {
            const currentTime = audioPlayer.currentTime;
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);
            progTimeLeft.textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
            progBarInner.style.width = (currentTime / duration) * 100 + '%';

            // Stop updating when the audio has finished
            if (currentTime >= duration) {
                clearInterval(updateTime);
            }
        }, 1000); // Update every second
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play fa-lg"></i>';
    }
}










// Settings for preparation the buttons



// function playPrevious() {
//     // Implement functionality for playing the previous track
// }

// function playNext() {
//     // Implement functionality for playing the next track
// }

// function toggleRandom() {
//     // Implement functionality for toggling random playback
// }

// function toggleRepeat() {
//     // Implement functionality for toggling repeat mode
// }

// function openSearch() {
//     // Implement functionality for opening search
// }