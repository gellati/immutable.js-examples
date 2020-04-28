const Immutable = require('immutable')

const firstMenu = Immutable.Map({ menuitem: 'cookie' })
const secondMenu = firstMenu.set('menuitem', 'corn')

console.log(firstMenu)
console.log(secondMenu)

// deep check to see if items are equal
console.log(Immutable.is(firstMenu, secondMenu))

var thirdMenu = firstMenu.set('menuitem', 'cookie')
console.log(thirdMenu)

console.log(Immutable.is(firstMenu, thirdMenu))
