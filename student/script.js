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
function clickedACheckbox(e) {
	var id = e.target.id;
	var partNum = Number(id.slice(-1));
	if(currentPart != 0) {
		document.getElementById("testSelectionCheckbox" + String(currentPart)).checked = false;
	}
	else {
		var continueButton = document.getElementById("testSelectionContinueButton");
		continueButton.style.display = "inline-block";
		continueButton.addEventListener("click", loadTestInstructions);
	}
	currentPart = partNum;
	document.getElementById("testSelectionCheckbox" + currentPart).checked = true;
}
function loadTestInstructions() {
	document.getElementById("testSelectionCont").style.display = "none";
	document.getElementById("testExplanationCont").style.display = "inline-block";
	document.getElementById("part" + String(currentPart) + "Explanation").style.display = "inline-block";
}
function setup() {
	username = prompt("What is your name?");
	while(!validUsername(username)) {
		username = prompt("I'm sorry, but that's not a valid name. Try again!");
	}
	document.getElementById("testSelectionCont").style.display = "inline-block";
	for(var i=1; i<=4; ++i) {
		document.getElementById("testSelectionCheckbox" + String(i)).addEventListener("click", function(event) { clickedACheckbox(event); });
	}
}

window.setTimeout(setup, 0);