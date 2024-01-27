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
) 

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

document.querySelector('#temp1').value = `${getCelsius(53).toFixed(1)}°C`;

