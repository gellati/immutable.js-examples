const Immutable = require('immutable')

var menuArray = [
  ['firstItem', 'fries'],
  ['secondItem', 'burger']
]

var menuMap = Immutable.Map(menuArray)

console.log(menuMap)
