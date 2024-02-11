const baseURL = "https://github-antoniomelendez.github.io/wdd230/";
const linksURL = "https://github-antoniomelendez.github.io/wdd230/data/links.json";
const cards = document.querySelector('#card');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let card = document.createElement("section");
        let week = document.createElement("h2");
        let assignment = document.createElement("p");
        let link = document.createElement("p");

        week.textContent = `This is week ${weeks.week}`;
        assignment.textContent = `This is assignment ${week.links.title}`;
        link.textContent = `hello ${week.links.url}`;

        card.appendChild(week);
        card.appendChild(assignment);
        card.appendChild(link);

        cards.appendChild(card);


        
    });
}