function sumOfArgs(arg1) {
	return function (arg2) {
		return arg1 + arg2
	}
}

console.log(sumOfArgs(5)(1))
