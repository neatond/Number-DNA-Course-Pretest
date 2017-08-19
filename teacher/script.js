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
	var partNum = Number(id.slice(4, 5));
	if(currentPart != 0) {
		document.getElementById("part" + currentPart + "Checkbox").checked = false;
	}
	else {
		document.getElementById("selectedPart").style.display = "inline-block";
	}
	currentPart = partNum;
	document.getElementById("part" + currentPart + "Checkbox").checked = true;
}
function setup() {
	username = prompt("What is your name?");
	while(!validUsername(username)) {
		username = prompt("I'm sorry, but that's not a valid name. Try again!");
	}
	document.getElementById("mainContent").style.display = "inline-block";
	document.getElementById("teacherName").innerHTML = username;
	for(var i=1; i<=4; ++i) {
		var part = "part" + String(i);
		document.getElementById(part + "Checkbox").addEventListener("click", function(event) {
			clickedACheckbox(event);
		});
	}
}

window.setTimeout(setup, 0);