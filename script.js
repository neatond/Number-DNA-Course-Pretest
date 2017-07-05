//////////////////////////////////////////////////
/// CONSTANTS
//////////////////////////////////////////////////

var numCategories = 6; //The number of categories in the navigation bar sidebar, not including "home".

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var categories = []; //A list of the navigation sidebar's categories.

//////////////////////////////////////////////////
/// CLASSES
//////////////////////////////////////////////////

function category(id) {
	this.element = document.getElementById(id);

	var tempSectionsNodeList = this.element.childNodes;
	this.sections = [];
	for(var i=0; i<tempSectionsNodeList.length; ++i) {
		if(tempSectionsNodeList[i].nodeType == 1) {
			this.sections.push(tempSectionsNodeList[i]);
		}
	}
	for(var i=0; i<this.sections.length; ++i) {
		this.sections[i] = new section(this.sections[i].getAttribute("id"),
			document.getElementById(this.sections[i].getAttribute("id")));
	}

	this.hide = function() {
		this.visible = false;
		for(var i=1; i<this.sections.length; ++i) {
			this.sections[i].element.style.visibility = "hidden";
			this.sections[i].element.style.height = "0px";
			this.sections[i].element.style.padding = "0px 10px";
		}
	}
	this.unhide = function() {
		this.visible = true;
		for(var i=1; i<this.sections.length; ++i) {
			this.sections[i].element.style.visibility = "visible";
			this.sections[i].element.style.height = "auto";
			this.sections[i].element.style.padding = "10px 10px";
		}
	}
	this.toggle = function() {
		var i = Number(this.getAttribute("id").slice(4, 5)) - 1;
		if(categories[i].visible) {
			categories[i].hide();
		}
		else {
			categories[i].unhide();
		}
	}

	this.visible = false;
	this.element.addEventListener("click", this.toggle);
}
function section(id, element) {
	this.id = id;
	this.element = element;
}

//////////////////////////////////////////////////
/// FUNCTIONS
//////////////////////////////////////////////////

function setup() {
	for(var i=0; i<numCategories; ++i) {
		categories.push(new category("part" + String(i+1)));
	}
}

//////////////////////////////////////////////////
/// EXECUTED CODE
//////////////////////////////////////////////////

setup();