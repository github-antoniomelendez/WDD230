const user1 = document.querySelector("#password");
const user2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

user2.addEventListener("focusout", checkSame);

function checkSame() {

    if (user1.value !== user2.value){
        message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		user2.style.backgroundColor = "#fff0f3";
		user2.value = "";
		user2.focus();
	} else {
		message.style.display = "none";
		user2.style.backgroundColor = "#fff";
		user2.style.color = "#000";
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}