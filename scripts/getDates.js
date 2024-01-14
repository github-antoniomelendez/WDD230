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


function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

document.querySelector('#temp1').value = `${getCelsius(53).toFixed(1)}°C`;
