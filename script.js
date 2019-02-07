var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var trash = document.querySelectorAll("trash");
var counter = 4;
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	li.dataset.id = counter + 1;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event) {
		let list = document.querySelectorAll('.listItem');
	for (let i=0; i < list.length; i++) {
		if (event.target.dataset.id === list[i].dataset.id) {
			if (event.target.classList.contains("done")) {
				event.target.classList.remove("done");
			} else {
				console.log(i);
				event.target.classList.add("done");
			};
		};
	};
});