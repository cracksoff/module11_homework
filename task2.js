function isPrimeNumber(arg) {
	try {
		if (arg > 1000) {
			console.log('Данные не верны')
			return
		}
		for (let i = 2; i < arg; i++)
			if (arg % i === 0) {
				console.log('Не простое число')
				return
			}
		if (arg > 1) console.log('Простое число')
	} catch (err) {
		console.log(err)
	}
}

isPrimeNumber(31)
isPrimeNumber(4)
isPrimeNumber(1004)
