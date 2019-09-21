let clickablePanels = () => {
    window.addEventListener('click', addPanelListeners)
}

let addPanelListeners = () => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => panel.addEventListener('click', toggleOpen))
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
}

let toggleOpen = (e) => {
    e.target.classList.toggle('open')
    e.target.parentElement.classList.toggle('open')
}

let toggleActive = (e) => {
    console.log(e.target);
    if (e.propertyName.includes('flex')) {
        e.target.classList.toggle('open-active')
        e.target.parentElement.classList.toggle('open-active')
    }
}

export { clickablePanels }