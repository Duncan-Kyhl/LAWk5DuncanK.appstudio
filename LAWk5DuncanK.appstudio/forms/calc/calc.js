
x = Number(prompt('Enter a number:'))
y = Number(prompt('Enter a number:'))

if (!(Number.isFinite(x))) {
    x = prompt('Sorry, please enter a number:')
}
if (!(Number.isFinite(y))) {
    y = prompt('Sorry, please enter a number:')
}

function Calculate(num1, num2) {
    return num1 + num2
}

let summedNumbers = Calculate(x,y)

console.log(`The sum of ${x} and ${y} is ${summedNumbers}`)