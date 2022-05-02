function minToMax(arg1, arg2) {
	try {
		const interval = setInterval(function () {
			console.log(arg1)
			if (arg1 == arg2) {
				clearInterval(interval)
			}
			arg1++
		}, 1000)
	} catch (err) {
		console.log(err)
	}
}

minToMax(5, 15)
