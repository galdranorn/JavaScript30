import { createHtmlFromObject } from './structure.js';
import { dataForEx4 } from '../data.js';
const data = dataForEx4;

const arrayCardio1 = () => {
    window.addEventListener('click', displayResults)
}

const displayResults = () => {
    const exercisesBox = document.querySelector("#exercises")
    if (exercisesData.methods.length === 0) { 
        doExercises() 
    }
    exercisesBox.innerHTML=createHtmlFromObject(exercisesData)
}

const exercisesData = { methods: [], exercises: [], answers: [] }

let doExercises = () => {

    exercisesData.methods.push      (`1. Array.prototype.filter`)
    exercisesData.exercises.push    (`Filter the list of inventors for those who were born in the 1500's`)
    exercisesData.answers.push      ('inventors.filter(inventor => (inventor.year >= 1500 && inventor.year<1600))') 
    const fifteen = data.inventors.filter(inventor => (inventor.year >= 1500 && inventor.year<1600))

    exercisesData.methods.push      (`2. Array.prototype.map()`)
    exercisesData.exercises.push    (`Give us an array of the inventors' first and last names`)
    exercisesData.answers.push      ('inventors.map(inventor => `${inventor.first} ${inventor.last}`)')
    const fullNames = data.inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    
    exercisesData.methods.push      (`3. Array.prototype.sort()`)
    exercisesData.exercises.push    (`Sort the inventors by birthdate, oldest to youngest`)
    exercisesData.answers.push      (`inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1)`)
    const ordered = data.inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1)

    exercisesData.methods.push      (`4. Array.prototype.reduce()`)
    exercisesData.exercises.push    (`How many years did all the inventors live?`)
    exercisesData.answers.push      (`inventors.reduce((total, inventor) => {return total + (inventor.passed-inventor.year)}, 0)`)
    const totalYears = data.inventors.reduce((total, inventor) => {return total + (inventor.passed-inventor.year);}, 0)

    exercisesData.methods.push      (`5. Exercise 1`)
    exercisesData.exercises.push    (`Sort the inventors by years lived`)
    exercisesData.answers.push      (`inventors.sort((firstPerson, secondPerson) => firstPerson.passed-firstPerson.year<secondPerson.passed-secondPerson.year ? 1 : -1)`)
    const sorted = data.inventors.sort((firstPerson, secondPerson) => firstPerson.passed-firstPerson.year<secondPerson.passed-secondPerson.year ? 1 : -1);

    exercisesData.methods.push      (`6. Exercise 2`)
    exercisesData.exercises.push    (`Create a list of Boulevards in Paris that contain 'de' anywhere in the name`)
    exercisesData.answers.push      ('Array.map(link => link.textContent).filter(streetName.includes(\'de\')')

    exercisesData.methods.push      (`7. Exercise 3`)
    exercisesData.exercises.push    (`Sort the people alphabetically by last name`)
    exercisesData.answers.push      (`people.sort(function(lastOne, nextOne){<br>
                                        const [aLast, aFirst] = lastOne.split(', ');<br>
                                        const [bLast, bFirst] = nextOne.split(', ');<br>
                                        return aLast > bLast ? 1 : -1;<br>
                                    })`)
    const alphabetically = data.people.sort(function(lastOne, nextOne){
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    })

    exercisesData.methods.push      (`8. Exercise 4`)
    exercisesData.exercises.push    (`Sum up the instances of each of these`)
    exercisesData.answers.push      (`data.reduce(function(obj, item){<br>
                                        if (!obj[item]) { obj[item] = 0; }<br>
                                        obj[item]++;<br>
                                        return obj;<br>
                                    }, {})`)
    const transportation = data.vehicles.reduce(function(obj, item){
        if (!obj[item]) { obj[item] = 0; } // creates initial instance of ex. "car: 0"
        obj[item]++;
        return obj;
    }, {})

}

export { arrayCardio1 }