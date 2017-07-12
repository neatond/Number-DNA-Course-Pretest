//////////////////////////////////////////////////
/// CONSTANTS
//////////////////////////////////////////////////

var numCategories = 6; //The number of categories in the navigation bar sidebar, not including "home".

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var categories = []; //A list of the navigation sidebar's categories.
var sections = []; //A list of the different sections.
var currentLoadedSection = "home"; //The sections are home, countBy3s, multiply, divide, divisibility, factoring,
                                   //primeFactorization, lcm, gcf, intAddSubtract, intMultiplyDivide, theNumberGame,
                                   //equivalentFractions, reducingFractions, improperAndMixedFractions, fracAddSubtract,
                                   //fracMultiplyDivide, exponents, toScientificNotation, fromScientificNotation

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
	this.header = document.getElementById(this.sections[0].getAttribute("id"));
	for(var i=1; i<this.sections.length; ++i) {
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
	this.header.addEventListener("click", this.toggle);
}
function section(id, element) {
	this.id = id;
	this.element = element;
	this.contents = document.getElementById(id + "CONT")

	this.load = function() {
		var allSections = document.getElementById("mainCont").childNodes;
		for(var i=0; i<allSections.length; ++i) {
			if(allSections[i].nodeType == 3) {
				continue;
			}
			document.getElementById(allSections[i].getAttribute("id")).style.display = "none";
		}
		var id = this.getAttribute("id");
		document.getElementById(id + "CONT").style.display = "inline-block";
		currentLoadedSection = id;
	}

	this.element.addEventListener("click", this.load);

	sections.push(this);
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