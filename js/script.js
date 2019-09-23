import { renderStructure }  from './structure.js'

import { drumKit }          from './challenges/day1.js'
import { clock }            from './challenges/day2.js'
import { cssUpdater }       from './challenges/day3.js'
import { arrayCardio1 }     from './challenges/day4.js'
import { clickablePanels }  from './challenges/day5.js'
import { citySearcher }     from './challenges/day6.js'
import { canvas }           from './challenges/day8.js'

renderStructure(30);

const challenges = [
    drumKit,
    clock,
    cssUpdater,
    arrayCardio1,
    clickablePanels,
    citySearcher,
    function() {console.log('no function')},
    canvas,
]

const showPage = (e) => {
    if(e.target.classList.contains("nav-link")){
        for (let i=1; i<=challenges.length; i++) {
            checkClasses(e.target.id, i)
        }
    }
}

const checkClasses = (id, i) => {
    let page = document.querySelector(`#day-${i}`);
    if (id==`day-${i}-tab`) {
        page.classList.remove("invisible")
        challenges[i-1]();
        console.log(challenges[i-1])
    } else { page.classList.add("invisible") }
}

const navigation = document.querySelector("#nav");
navigation.addEventListener("click", showPage)


