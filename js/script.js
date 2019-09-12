
let createNav = function() {
    // create ul element for tabs
    let nav = document.createElement("ul");
    nav.classList.add("nav", "nav-tabs");
    nav.setAttribute("role","tablist");
    // create tabs for each day of challenge
    for (let i=1; i<31; i++){
        let block = document.createElement("li");
        block.classList.add("nav-item");
        block.innerHTML = "<a class='nav-link active' id='day-"+i+"-tab'data-toggle='tab' href='#day-"+i+"' role='tab' aria-controls='day-"+i+"' aria-selected='true'>Day "+i+"</a>";
        nav.appendChild(block);
    }
    // append created ul element to section defined in index.html
    document.querySelector("#nav").appendChild(nav);
}


let renderPages = function() {
    // create div element where pages will be switched
    let pages = document.createElement("div");
    pages.classList.add("tab-content");
    // create div element for each day of challenge
    for (let i=1; i<31; i++) {
        let page = document.createElement("div");
        page.setAttribute("id", "day-"+i);
        page.classList.add("tab-pane", "fade");
        page.setAttribute("role", "tabpanel");
        page.setAttribute("aria-labelledby", "day-"+i+"-tab");
        pages.appendChild(page);
    }
    // append each div to section pages defined in index.html
    document.querySelector("#pages").appendChild(pages);
}

let importHtmlFiles = function() {
    // for every tab with daily challenge import external file
    for (i=1; i<31; i++) {
        $("#day-"+i).load("pages/day"+i+".html"); 
    }
}

createNav();
renderPages();
importHtmlFiles();

let drumKit = function() {
    function playSound(e) {
        const area = document.querySelector("#day-1");
        const audio = area.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = area.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function if there is no corresponding audio
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add("playing");
    }

    window.addEventListener('keydown', playSound);
}

drumKit();