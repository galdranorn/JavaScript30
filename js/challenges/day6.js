const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const citySearcher = () => {
    window.addEventListener("click", setSearcher)
}

const setSearcher = () => {
    const area = document.querySelector("#day-6")
    const searchInput = area.querySelector(".search")
    const suggestions = area.querySelector(".suggestions")

    function displayMatches() {
        suggestions.innerHTML=convertToHtml(this.value);
    }

    importCitiesData();   
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
}

const convertToHtml = (value) => {
    const matchingCities = findMatches(value, cities);
    return matchingCities.map(place => {
        const regex = new RegExp(value, 'gi');
        const cityName=place.city.replace(regex, `<span class="highlighted">${value}</span>`)
        const stateName=place.state.replace(regex, `<span class="highlighted">${value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>`
        }).join('')
}

const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

const importCitiesData = () => {
    fetch(endpoint) // fetch returns a promise
        .then(blob => blob.json() )
        .then(data => cities.push(...data) );
}

export { citySearcher }