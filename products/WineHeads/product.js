document.addEventListener('DOMContentLoaded', function () {
    // First sound button
    const speakerImg1 = document.getElementById('speaker');
    const audioFile1 = document.getElementById('audio-file1');
    let isPlaying1 = false; // Initially, the audio is not playing

    speakerImg1.addEventListener('click', () => {
        if (isPlaying1) {
            audioFile1.pause();
            speakerImg1.src = "../../images/icons/webButtons/speaker-off.png"; // Change to 'off' icon
        } else {
            audioFile1.play();
            speakerImg1.src = "../../images/icons/webButtons/speaker-on.png"; // Change to 'on' icon
        }
        isPlaying1 = !isPlaying1; // Toggle playing state
    });

    audioFile1.addEventListener('ended', () => {
        isPlaying1 = false;
        speakerImg1.src = "../../images/icons/webButtons/speaker-off.png"; // Reset to 'off' icon
    });

    // Second sound button (example for additional buttons)
    const speakerImg2 = document.getElementById('speaker2');
    const audioFile2 = document.getElementById('audio-file2');
    let isPlaying2 = false;

    if (speakerImg2 && audioFile2) {
        speakerImg2.addEventListener('click', () => {
            if (isPlaying2) {
                audioFile2.pause();
                speakerImg2.src = "../../images/icons/webButtons/speaker-off.png";
            } else {
                audioFile2.play();
                speakerImg2.src = "../../images/icons/webButtons/speaker-on.png";
            }
            isPlaying2 = !isPlaying2;
        });

        audioFile2.addEventListener('ended', () => {
            isPlaying2 = false;
            speakerImg2.src = "../../images/icons/webButtons/speaker-off.png";
        });
    }
});
