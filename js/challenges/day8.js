let canvas = () => {
    window.addEventListener('click', setCanvas) 
}

let isDrawing = false;
let lastPosition = [];
let hue = 0;
let direction = true;

let setCanvas = () => {
    const area = document.querySelector("#day-8");
    const canvas = area.querySelector("#draw");
    const ctx = canvas.getContext("2d");
    canvas.width = area.offsetWidth;
    canvas.height = area.offsetHeight;
    ctx.lineWidth = 50;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    

    let draw = (e) => {
        if (isDrawing) {
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath()
            ctx.moveTo(...lastPosition)
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()

            lastPosition = [ e.offsetX, e.offsetY ];
            (hue >= 360) ? hue = 0 : hue++;
            (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) ? direction = !direction : direction;
            (direction) ? ctx.lineWidth++ : ctx.lineWidth--;
        }
    }

    canvas.addEventListener("mousemove", draw)
    canvas.addEventListener("mousedown", (e) => { isDrawing = true; lastPosition = [e.offsetX, e.offsetY] })
    canvas.addEventListener("mouseup", () => isDrawing = false)
    canvas.addEventListener("mouseout", () => isDrawing = false)

    window.removeEventListener('click', setCanvas)
}

export { canvas }