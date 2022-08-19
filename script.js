var randomFunc = {
	lower: RandomLower,
	upper: RandomUpper,
	number: RandomNumber,
	symbol: RandomSymbol
}
function RandomLower() {
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
}

function RandomUpper() {
	var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)];
}

function RandomNumber() {
	var number = '1234567890'
  return number[Math.floor(Math.random() * number.length)];
}

function RandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

var passwordEl = document.getElementById('password');
var symbolsEl = document.getElementById('symbols');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var lengthEl = document.getElementById('length');
var numbersEl = document.getElementById('numbers');

generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var checkedNumber = numbersEl.checked;
	var checkedLower = lowercaseEl.checked;
	var checkedSymbol = symbolsEl.checked;
	var checkedUpper = uppercaseEl.checked;
	
	passwordEl.innerText = writePassword(checkedNumber, checkedUpper, checkedLower, checkedSymbol, length);
});

function writePassword(number, upper, lower, symbol, length) {
	var randomPassword = '';
	var typesCount = number + upper + lower + symbol;
	var typesArr = [{ number }, { upper }, { lower }, { symbol }].filter(item => Object.values(item)[0]);
	
	
	if(typesCount === 0) {
	  return "you must check one box ;)!";
    
	}

	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			randomPassword += randomFunc[funcName]();
		});
	}
	
	var newPassword = randomPassword;
	
	return newPassword;
};

var generateEl = document.getElementById('generate');



/* What i originally tried to do for the random algorithim 

function randomLower() {
    const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
    const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
    const lowletters = [lowercaseLetters.join("")];
    return lowletters[Math.floor(Math.random() * lowletters.length)];
  }
  
  function randomUpper() {
   const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
   const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
   const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
   const upperLetters = [uppercaseLetters.join("")];
   return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  
  function randomNumber() {
   const numbers = (1,2,3,4,5,6,7,8,9,0);
   return numbers[Math.floor(Math.random() * numbers.length)]; 
  }
  
  function randomSymbol() {
   const symbols = "!@#$%^&*()_[]{};':<>/,."
   return symbols[Math.floor(Math.random() * symbols.length)];
  }
*/