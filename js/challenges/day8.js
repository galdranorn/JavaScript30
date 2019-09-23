let canvas = () => {
    window.addEventListener('click', setCanvas) 
}

let isDrawing = false;
let lastPosition;

let setCanvas = () => {
    const area = document.querySelector("#day-8");
    const canvas = area.querySelector("#draw");
    const ctx = canvas.getContext("2d");
    canvas.width = area.offsetWidth;
    canvas.height = area.offsetHeight;
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    let draw = (e) => {
        if (isDrawing) {
            ctx.beginPath()
            ctx.moveTo(...lastPosition)
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()
            lastPosition = [ e.offsetX, e.offsetY ] 
        }
    }

    canvas.addEventListener("mousemove", draw)
    canvas.addEventListener("mousedown", (e) => { isDrawing = true; lastPosition = [e.offsetX, e.offsetY] })
    canvas.addEventListener("mouseup", () => isDrawing = false)
    canvas.addEventListener("mouseout", () => isDrawing = false)

    window.removeEventListener('click', setCanvas)

}

export { canvas }
