let dekat = prompt('Whats dekat is it?')

if( dekat >= 1 && dekat <= 10) {
    console.log('First dekat')
} else if( dekat >= 11 && dekat <= 20) {
    console.log('Second dekat')
} else if( dekat >= 21 && dekat <= 31) {
    console.log('Third dekat')
} else {
    console.log('There are not this number in month')
}

let check = num => ["чётное", "нечётное"][parseInt(num) & 1]
const numb = prompt("Введите любое число")
console.log(check(numb))

let month = prompt('Напишите любое число месяца')

if( month >= 1 && month <= 2) {
    console.log('Winter')
} else if( month >= 3 && month <= 5) {
    console.log('Spring')
} else if( month >= 6 && month <= 8) {
    console.log('Summer')
} else if( month >= 9 && month <= 11) {
    console.log('Autumn')
} else if( month <= 12) {
    console.log('Winter')
}
else {
    console.log('Its not a month')
}