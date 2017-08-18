var username;
var currentPart = 0;

function validUsername(name) {
	if(name == null) {
		return false;
	}
	else if(name == "") {
		return false;
	}
	else {
		return true;
	}
}

function setup() {
	username = prompt("What is your name?");
	while(!validUsername(username)) {
		username = prompt("I'm sorry, but that's not a valid name. Try again!");
	}
	document.getElementById("testSelectionCont").style.display = "inline-block";
}

setup();