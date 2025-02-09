/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
	let x = n;
	return function () {
		return x++;
	};
};

const counter = createCounter(10);
counter();
counter();
counter();
