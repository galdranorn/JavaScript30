const customVideoPlayer = () => {
    const area = document.querySelector("#day-11")
    const player = area.querySelector(".player")
    const video = player.querySelector(".viewer")
    const progress = player.querySelector(".progress")
    const progressBar = player.querySelector(".progress__filled")
    const toggle = player.querySelector(".toggle")
    const skipButtons = player.querySelector("[data-skip]")
    const ranges = player.querySelector(".player__slider")

    let togglePlay = () => {
        (video.paused) ? video.play() : video.pause();
    }
    function updateButton() {
        toggle.textContent = this.paused ? ">" : "||"
    }
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    /* Hook up the event listeners */
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);
    skipButtons.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);

}





export { customVideoPlayer }