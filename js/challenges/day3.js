let cssUpdater = () => {
    window.addEventListener('click', addInputListeners)
}

let addInputListeners = () => {
    const inputs = Array.from(document.querySelectorAll('.controls input'));
    inputs.forEach(input => input.addEventListener('change', handleInputUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleInputUpdate));
}

function handleInputUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

export { cssUpdater }


