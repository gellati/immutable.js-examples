const Map = require("immutable").Map

const map1 = Map({a:1, b:2, c:3})
const map2 = map1.set('b', 50)

console.log(map1.get('b') === 2)
console.log(map2.get('b') === 50)

map3 = map1.merge({d: 4, e: 5})
