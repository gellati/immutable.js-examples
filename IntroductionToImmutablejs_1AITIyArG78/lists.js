const List = require("immutable").List

// a remains unchanged. Operations do not change the original array, but
//instead a new data object is returned with the changed values

const a = List([1, 2, 3])
console.log(a)

const b = a.set(2,5)
console.log(b)
console.log(a)

const c = a.pop()
console.log(c)
console.log(a)


const d = a.push(4)
console.log(d)
console.log(a)
