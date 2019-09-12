// ---- DAY 1 CHALLENGE ---- //
// ---- JAVASCRIPT DRUM KIT ---- //

let drumKit = () => {
    function playSound(e) {
        const area = document.querySelector("#day-1");
        const audio = area.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = area.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function if there is no corresponding audio
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add("playing");
    }

    window.addEventListener('keydown', playSound);

    // the rest of the function is in <script> in html files
}

export { drumKit }