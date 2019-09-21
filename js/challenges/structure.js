function createHtmlFromObject(exercisesData) {
    let arraysToHtml = ``;

    for (let i=0; i<exercisesData.answers.length; i++) {
        arraysToHtml = arraysToHtml + `
        <div class="question">
            <h3 class="header">${exercisesData.methods[i]}</h3>
            <p class="exercise"><span>Exercise:</span> ${exercisesData.exercises[i]}</p>
            <p class="answer"><span>Answer:</span> ${exercisesData.answers[i]}</p>
        </div>`;
    }

    return arraysToHtml
}

export { createHtmlFromObject }