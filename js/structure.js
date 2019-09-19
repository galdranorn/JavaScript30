let renderStructure = (days) => {
    createNav(days);
    renderPages(days);
    importHtmlFiles(days);
}

let createNav = (days) => {
    const navigationBox = document.querySelector('#nav');
    let nav = document.createElement('ul');
    nav.classList.add('nav', 'nav-tabs');
    nav.setAttribute('role','tablist');
    nav.innerHTML = createTabs(days);
    navigationBox.appendChild(nav);
}

let createTabs = (days) => {
    let tabsHtml = ``;
    for (let i=1; i<(days+1); i++) {
        tabsHtml = tabsHtml + `
            <li class='nav-item'>
                <a 
                    class='nav-link active'
                    data-toggle='tab'   
                    role='tab'   
                    aria-selected='true'   
                    id='day-${i}-tab'   
                    href='#day-${i}'   
                    aria-controls='day-${i}'
                > 
                    ${i} 
                </a>
            </li>`;
    }
    return tabsHtml;
}

let renderPages = (days) => {
    const pagesBox = document.querySelector("#pages");
    let pages = document.createElement("div");
    pages.classList.add("tab-content");
    for (let i=1; i<(days+1); i++) {
        let page = `<div id='day-${i}' class='tab-pane fade' role='tabpanel' aria-labelledby='day-${i}-tab'></div>`;
        pages.innerHTML+=page;
    }
    pagesBox.appendChild(pages);
}

let importHtmlFiles = (days) => {
    for (let i=1; i<(days+1); i++) {
        $("#day-"+i).load("pages/day"+i+".html"); 
    }
}

export { renderStructure }