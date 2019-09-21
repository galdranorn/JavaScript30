let clock = () => {
    window.addEventListener('click', setDate)
    setInterval(setDate, 1000)
}

let setDate = (e) => {
    const area = document.querySelector('#day-2');
    const now = new Date();
    const currentTimeInfo = [
        {
            value: now.getSeconds(),
            whole: 60,
            element: area.querySelector(`.second-hand`) 
        },
        { 
            value: now.getMinutes(),
            whole: 60,
            element: area.querySelector('.min-hand')
        },
        {
            value: now.getHours(),
            whole: 12,
            element: area.querySelector('.hour-hand')
        }
    ];
    currentTimeInfo.forEach(hand => rotateHand(hand.value, hand.whole, hand.element));
}

function rotateHand(value, whole, element) {
    const degrees = ((value/whole) * 360)+90;
    element.style.transform=`rotate(${degrees}deg)`;
}

export { clock }