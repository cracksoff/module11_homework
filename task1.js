const arr1 = [1, 3, 5, 6, 8, 10, 12, null, 0, 'string', ':', NaN]
const arrEven = []
const arrOdd = []
const arrNan = []
const arrZero = []
const task = (arr) => {
	arr.forEach((elem) => {
		if (elem === 0) {
			arrZero.push(elem)
		} else if (isNaN(elem) === true) {
			arrNan.push(elem)
		} else if (typeof elem === 'number') {
			if (elem % 2 === 0) {
				arrEven.push(elem)
			} else {
				arrOdd.push(elem)
			}
		} else {
			arrNan.push(elem)
		}
	})
	console.log(`Even Numbers: ${arrEven.length}\nOdd Numbers: ${arrOdd.length}\nNaN: ${arrNan.length}\nZero Numbers: ${arrZero.length}`)
}
task(arr1)
