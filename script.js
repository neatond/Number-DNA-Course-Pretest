//----------------------------------------------------------------
// CONSTANTS
//----------------------------------------------------------------

//----------------------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------------------

var page = {};

//----------------------------------------------------------------
// CLASSES
//----------------------------------------------------------------

//----------------------------------------------------------------
// FUNCTIONS
//----------------------------------------------------------------

function setup() {
	console.log("FUNCTION CALL: setup()");

	page.navigation = {};

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
			loadQuestionTemplate(element);
		});
	}
}
function loadQuestionTemplate(element) {
	console.log("FUNCTION CALL: loadQuestionTemplate("+element+")");

	
}

//----------------------------------------------------------------
// EXECUTED CODE
//----------------------------------------------------------------