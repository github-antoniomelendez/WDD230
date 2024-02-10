
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    // card build code
    prophets.forEach((prophet) => {

      let card = document.createElement("section");
      let fullName = document.createElement("h2");
      let birthInfo = document.createElement("p");
      let birthPlace = document.createElement("p");
      let portrait = document.createElement("img");

      //build h2 for the prophet's name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      //build p for birth info
      birthInfo.textContent = `Date of Birth: ${prophet.birthdate}`; 
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
      //build image portrait
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      //append elements
      card.appendChild(fullName);
      card.appendChild(birthInfo);
      card.appendChild(birthPlace);
      card.appendChild(portrait);

      cards.appendChild(card);

    });
  }

