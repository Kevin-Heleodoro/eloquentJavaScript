// Growing functions

// Easy solution to print only cows and chickens with no consideration for growth
function printFarmInventory(cows, chickens) {
	let cowString = String(cows);

	// Will continue to add '0' to the front of the string until it is 3 characters long
	while (cowString.length < 3) {
		cowString = '0' + cowString;
	}

	console.log(`${cowString} Cows`);

	let chickenString = String(chickens);

	while (chickenString.length < 3) {
		chickenString = '0' + chickenString;
	}

	console.log(`${chickenString} Chickens`);
}

// console.log(printFarmInventory(7, 13));

//
//
//
//
// Now to add pigs we can refactor the current code into the following.
function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);

	// Takes the padding portion of the above function and puts it into its own function
	while (numberString.length < 3) {
		numberString = '0' + numberString;
	}

	console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, 'Cows');
	printZeroPaddedWithLabel(chickens, 'Chickens');
	printZeroPaddedWithLabel(pigs, 'Pigs');
}

// console.log(printFarmInventory2(7, 11, 3));

//
//
//
//
//
// Simplified even more
function zeroPad(number, width) {
	let string = String(number);

	while (string.length < width) {
		string = '0' + string;
	}

	return string;
}

function printFarmInventory3(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}

// console.log(printFarmInventory3(7, 11, 3));
//
//
//
//
//
// 	EXERCISES
//
//
// MINIMUM
// Takes two values and return the minimum of them
const minimum = (a, b) => {
	if (a > b) return b;
	return a;
};

// console.log(minimum(19, 18));

// RECURSION
const isEven = (num) => {
	if (num < 0) {
		num += num * -2;
	}
	if (num === 0) return 'is even';
	if (num === 1) return 'is odd';

	return isEven(num % 2);
};

// console.log(isEven(-1));
//
//
//
//
//
// BEAN COUNTING
// Count the number of 'B's in a string
const countBs = (string) => {
	let count = 0;
	for (let char in string) {
		if (string[char] === 'B') count++;
	}

	return count;
};

// console.log(countBs('LKDJFKLAASBDBBASFBBBB'));

// Count the number of any character in any string
const charCounter = (string, char) => {
	let count = 0;

	for (let letter in string) {
		if (string[letter] === char) count++;
	}

	return count;
};

const countAs = (s) => {
	return charCounter(s, 'A');
};

console.log(countAs('AAABCDE'));
