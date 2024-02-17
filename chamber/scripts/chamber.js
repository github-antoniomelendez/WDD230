const json = ('members.json');
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(json);
  const data = await response.json();
  //console.table(data.prophets); // temporary testing of data retreival
  displayMembers(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
}

getMemberData();

const displayMembers = (companies) => {
  // card build code
  companies.forEach((company) => {

    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let membership = document.createElement("p");
    let website = document.createElement("p");
    let icon = document.createElement("img");

    //build h2 for the prophet's name
    fullName.textContent = `${company.name}`;
    //build p for birth info
    address.textContent = `Address: ${company.address}`; 
    phone.textContent = `Phone: ${company.phone}`;
    membership.textContent = `Membership: ${company.membership}`;
    website.textContent = `Website: ${company.website}`;
    //build image portrait
    icon.setAttribute('src', company.icon);
    icon.setAttribute('alt', `icon of ${company.name}`);
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '300');
    icon.setAttribute('height', '300');

    //append elements
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(website);
    card.appendChild(icon);

    cards.appendChild(card);

  });
}

// hamburger button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//dark mode button code
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

//code for calculating the number of visits to the page

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// footer and last modification code
const today1 = document.querySelector('#today1');

const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    min: "numeric",
    sec: "numeric"
};


today1.innerHTML = new Date().toLocaleDateString("en-US", options);

alert(document.lastModified);

const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("This page has changed!");
}

const year1 = document.querySelector('#year1');

const options1 = {
  year: "numeric"
};

year1.innerHTML = new Date().toLocaleDateString("en-US", options1);

const pattern1 = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern1)?.[1]) || 0)
);

