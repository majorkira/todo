var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const deleteButton = document.getElementsByTagName("i");
var counter = 4;
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
	span.dataset.id = counter + 1;
	span.className += "listItem";
	var span2 = document.createElement("span");
	span2.className="trash";
	span2.innerHTML="<i class='fas fa-trash-alt'></i> ";
	li.insertBefore(span2, span);
	deleteParentOnClick();
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
				event.target.classList.add("done");
			};
		};
	};
});

function deleteNodeOnClick() {
	var trash = document.querySelectorAll("i");
	for (let i=0; i < trash.length; i++) {
			this.parentNode.parentNode.remove();
	}
}
function deleteParentOnClick() {
	for (let i=0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener("click", deleteNodeOnClick);
	}
}
deleteParentOnClick();