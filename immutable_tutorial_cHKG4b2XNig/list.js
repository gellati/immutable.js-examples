const Immutable = require('immutable')

const myList = Immutable.List('string')
console.log(myList)

const myListOf = Immutable.List.of('string')
console.log(myListOf)


// create a new list from a javascript array

var menuArray = ['fries', 'burger']
var menuList = Immutable.List(menuArray)
console.log(menuList)


// create a new list from a javascript object

var menu = {
  first: 'burger',
  second: 'fries'
}

var menuList = Immutable.List.of(menu)

console.log(menuList)
