const multiCheckboxes = () => {

    const area = document.querySelector("#day-10");
    const checkboxes = area.querySelectorAll('.checkbox')

    let lastChecked;

    let handleCheck = (e) => {
        let inBetween = false;
        if (e.shiftKey && e.target.checked) {
            checkboxes.forEach(checkbox => {
                (checkbox===e.target || checkbox===lastChecked) ? inBetween=!inBetween : inBetween;
                (inBetween || checkbox===lastChecked || checkbox===e.target) ? checkbox.checked=true : checkbox.checked=false;
            })
        }
        lastChecked = e.target;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

}

export { multiCheckboxes }