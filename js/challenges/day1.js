let drumKit = () => window.addEventListener('keydown', playDrum);

let playDrum = (e) => {
    const area = document.querySelector("#day-1");
    const audio = area.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = area.querySelector(`.key[data-key="${e.keyCode}"]`);
    playAudio(audio);
    animateKey(key);
}

let playAudio = (audio) => {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

let animateKey = (key) => {
    key.classList.add("playing");
    key.addEventListener('transitionend', removeTransition);
}

let removeTransition = (action) => {
    action.srcElement.classList.remove('playing');
}

export { drumKit }