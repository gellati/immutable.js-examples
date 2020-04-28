const Map = require('immutable').Map

const alpha = Map({a:1, b:2, c:3, d:4})
const alpha2 = alpha.map((v,k) => k.toUpperCase()).join('')

console.log(alpha2)

const alpha3 = alpha.filter(value => value !== 2)

console.log(alpha3)
