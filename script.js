//----------------------------------------------------------------
// CONSTANTS
//----------------------------------------------------------------

var timeLimits = { //In seconds
	CountBy3s: 120,
	Multiplication: 120,
	Division: 120,
	Divisibility: 120,
	Factoring: 120,
	PrimeFactorization: 120,
	LeastCommonMultiple: 120,
	GreatestCommonFactor: 120,
	AddingAndSubtractingIntegers: 120,
	MultiplyingAndDividingIntegers: 120,
	TheNumberGame: 120,
	EquivalentFractions: 120,
	ReducingFractions: 120,
	ProperAndImproperFractionsAndMixedNumbers: 120,
	AddingAndSubtractingFractions: 120,
	MultiplyingAndDividingFractions: 120,
	PositiveAndNegativeExponents: 120,
	ScientificNotation: 120
};

//----------------------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------------------

var page = {};
var tStart;
var t0;
var t;
var currentQuestionByCategory = {
	CountBy3s: 0,
	Multiplication: 0,
	Division: 0,
	Divisibility: 0,
	Factoring: 0,
	PrimeFactorization: 0,
	LeastCommonMultiple: 0,
	GreatestCommonFactor: 0,
	AddingAndSubtractingIntegers: 0,
	MultiplyingAndDividingIntegers: 0,
	TheNumberGame: 0,
	EquivalentFractions: 0,
	ReducingFractions: 0,
	ProperAndImproperFractionsAndMixedNumbers: 0,
	AddingAndSubtractingFractions: 0,
	MultiplyingAndDividingFractions: 0,
	PositiveAndNegativeExponents: 0,
	ScientificNotation: 0
};
var currentQuestionCategory = "";
var questions = {};
var numCounting3sQuestions = 30;
var firstQuestionLoaded = false;

//----------------------------------------------------------------
// CLASSES
//----------------------------------------------------------------

function CountBy3s(id) {
	this.id = id;
	this.expected3 = (1+id)*3;
	this.load = function(pageObj) {
		var previous3s = document.createElement("p");
		var listOf3s = [];
		for(var i=3; i<this.expected3; i+=3) {
			listOf3s.push(i);
		}
		previous3s.appendChild(document.createTextNode(String(listOf3s)));
		var current3 = document.createElement("textarea");
		pageObj.question.previous3s = previous3s;
		pageObj.questionArea.appendChild(previous3s);
		pageObj.question.current3 = current3;
		pageObj.questionArea.appendChild(current3);
	}
	this.checkAns = function(pageObj) {
		return Number(pageObj.question.current3.value) == this.expected3
	}
}
function Multiplication() {
	//
	//
}
function Division() {
	//
	//
}
function Divisibility() {
	//
	//
}
function Factoring() {
	//
	//
}
function PrimeFactorization() {
	//
	//
}
function LeastCommonMultiple() {
	//
	//
}
function GreatestCommonFactor() {
	//
	//
}
function AddingAndSubtractingIntegers() {
	//
	//
}
function MultiplyingAndDividingIntegers() {
	//
	//
}
function TheNumberGame() {
	//
	//
}
function EquivalentFractions() {
	//
	//
}
function ReducingFractions() {
	//
	//
}
function ProperAndImproperFractionsAndMixedNumbers() {
	//
	//
}
function AddingAndSubtractingFractions() {
	//
	//
}
function MultiplyingAndDividingFractions() {
	//
	//
}
function PositiveAndNegativeExponents() {
	//
	//
}
function ScientificNotation() {
	//
	//
}

//----------------------------------------------------------------
// FUNCTIONS
//----------------------------------------------------------------

function setup() {
	console.log("FUNCTION CALL: setup()");

	page.navigation = {};
	page.question = {};

	page.navigation.CountBy3s = document.getElementById("CountBy3s");
	page.navigation.Multiplication = document.getElementById("Multiplication");
	page.navigation.Division = document.getElementById("Division");
	page.navigation.Divisibility = document.getElementById("Divisibility");
	page.navigation.Factoring = document.getElementById("Factoring");
	page.navigation.PrimeFactorization = document.getElementById("PrimeFactorization");
	page.navigation.LeastCommonMultiple = document.getElementById("LeastCommonMultiple");
	page.navigation.GreatestCommonFactor = document.getElementById("GreatestCommonFactor");
	page.navigation.AddingAndSubtractingIntegers = document.getElementById("AddingAndSubtractingIntegers");
	page.navigation.MultiplyingAndDividingIntegers = document.getElementById("MultiplyingAndDividingIntegers");
	page.navigation.TheNumberGame = document.getElementById("TheNumberGame");
	page.navigation.EquivalentFractions = document.getElementById("EquivalentFractions");
	page.navigation.ReducingFractions = document.getElementById("ReducingFractions");
	page.navigation.ProperAndImproperFractionsAndMixedNumbers = document.getElementById("ProperAndImproperFractionsAndMixedNumbers");
	page.navigation.AddingAndSubtractingFractions = document.getElementById("AddingAndSubtractingFractions");
	page.navigation.MultiplyingAndDividingFractions = document.getElementById("MultiplyingAndDividingFractions");
	page.navigation.PositiveAndNegativeExponents = document.getElementById("PositiveAndNegativeExponents");
	page.navigation.ScientificNotation = document.getElementById("ScientificNotation");
	page.questionArea = document.getElementById("questionArea");

	document.addEventListener("keydown", function(e) { submittedAnswer(e); });

	createQuestions();

	for(var element in page.navigation) {
		page.navigation[element].addEventListener("click", function() {
			firstQuestionLoaded = true;
			currentQuestionCategory = this.getAttribute("id");
			loadQuestionTemplate(this.getAttribute("id"));
		});
	}
}
function createQuestions() {
	console.log("FUNCTION CALL: createQuestions()");

	questions.CountBy3s = [];
	for(var i=0; i<numCounting3sQuestions; ++i) {
		questions.CountBy3s.push(new CountBy3s(i));
	}
}
function loadQuestionTemplate(element) {
	console.log("FUNCTION CALL: loadQuestionTemplate("+element+")");

	while(page.questionArea.firstChild) {
		page.questionArea.removeChild(page.questionArea.firstChild);
	}
	page.question = {};

	page.question.titleElement = document.createElement("h1");
	page.question.titleElement.appendChild(document.createTextNode(page.navigation[element].innerHTML));
	page.questionArea.appendChild(page.question.titleElement);
	page.question.timer = document.createElement("h2");
	page.question.timer.setAttribute("id", "timer");
	page.questionArea.appendChild(page.question.timer);

	tStart = Math.round(window.performance.now() / 1000);
	t0 = tStart;
	t = Math.round(window.performance.now() / 1000);
	var dt = t-t0;
	console.log(dt);
	var tLeft = timeLimits[element] - dt;
	var min = ("0" + String(Math.floor(tLeft/60))).substr(-2);
	var sec = ("0" + String(tLeft % 60)).substr(-2);
	page.question.timer.appendChild(document.createTextNode(min + ":" + sec));

	switch(element) {
		case "CountBy3s":
			questions.CountBy3s[currentQuestionByCategory.CountBy3s].load(page);
			break;
		case "Multiplication":
			//
			break;
		case "Division":
			//
			break;
		case "Divisibility":
			//
			break;
		case "Factoring":
			//
			break;
		case "PrimeFactorization":
			//
			break;
		case "LeastCommonMultiple":
			//
			break;
		case "GreatestCommonFactor":
			//
			break;
		case "AddingAndSubtractingIntegers":
			//
			break;
		case "MultiplyingAndDividingIntegers":
			//
			break;
		case "TheNumberGame":
			//
			break;
		case "EquivalentFractions":
			//
			break;
		case "ReducingFractions":
			//
			break;
		case "ProperAndImproperFractionsAndMixedNumbers":
			//
			break;
		case "AddingAndSubtractingFractions":
			//
			break;
		case "MultiplyingAndDividingFractions":
			//
			break;
		case "PositiveAndNegativeExponents":
			//
			break;
		case "ScientificNotation":
			//
			break;
	}
}
function submittedAnswer(event) {
	if(event.which == 13 && firstQuestionLoaded) {
		var correct = questions[currentQuestionCategory][currentQuestionByCategory[currentQuestionCategory]].checkAns(page);
		if(correct) {
			
		}
	}
}

//----------------------------------------------------------------
// EXECUTED CODE
//----------------------------------------------------------------

setup();