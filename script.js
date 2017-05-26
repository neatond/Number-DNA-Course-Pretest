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

//----------------------------------------------------------------
// CLASSES
//----------------------------------------------------------------

funciton CountBy3s() {
	//
	//
}
funciton Multiplication() {
	//
	//
}
funciton Division() {
	//
	//
}
funciton Divisibility() {
	//
	//
}
funciton Factoring() {
	//
	//
}
funciton PrimeFactorization() {
	//
	//
}
funciton LeastCommonMultiple() {
	//
	//
}
funciton GreatestCommonFactor() {
	//
	//
}
funciton AddingAndSubtractingIntegers() {
	//
	//
}
funciton MultiplyingAndDividingIntegers() {
	//
	//
}
funciton TheNumberGame() {
	//
	//
}
funciton EquivalentFractions() {
	//
	//
}
funciton ReducingFractions() {
	//
	//
}
funciton ProperAndImproperFractionsAndMixedNumbers() {
	//
	//
}
funciton AddingAndSubtractingFractions() {
	//
	//
}
funciton MultiplyingAndDividingFractions() {
	//
	//
}
funciton PositiveAndNegativeExponents() {
	//
	//
}
funciton ScientificNotation() {
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

	for(var element in page.navigation) {
		page.navigation[element].addEventListener("click", function() {
			loadQuestionTemplate(this.getAttribute("id"));
		});
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
			//
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

//----------------------------------------------------------------
// EXECUTED CODE
//----------------------------------------------------------------

setup();