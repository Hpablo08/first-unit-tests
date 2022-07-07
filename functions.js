// functions.js
function addTwoNumbers(value1, value2) {
  return value1 + value2

}


function sayHello(name) {
  if (name === 'Will') {
  return 'No more testing Will!'
  } else {
return `Hi there ${name}!`
   }
  }



function buildCar(color, type) {
if (color === undefined && type === undefined){
  return {}
  }
else {
  return {
    color: color,
    type: type,
  }
}
}


module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
