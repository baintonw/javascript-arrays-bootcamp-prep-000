var  chocolateBars = [
  "Snickers",
  "Hundred Grand",
  "Kitkat",
  "Skittles"]
  
  var cities = ["New York", "San Francisco"];
  
  var cereal = ["Lucky Charms", "Fruit Loops"];

  
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
<<<<<<< HEAD
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
=======
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
>>>>>>> 93801d202f259c9b527734a03a0337d7bbd66add
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
<<<<<<< HEAD
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
}

function accessElementInArray (array, n) {
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  array.slice(0, array.length - 1)
  array = array.slice(0, array.length - 1)
=======
  return  array
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
>>>>>>> 93801d202f259c9b527734a03a0337d7bbd66add
  return array
}

