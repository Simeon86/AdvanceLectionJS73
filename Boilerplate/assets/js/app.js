// Exercise
// 1.Let's convert a sentence from a string to an array, with each word being a separate element of the array!

const sentance = 'I love to sleep!';

function stringToArray(string) {
    const arrayFromString = string.split(' ');
    return arrayFromString;
}

console.log(stringToArray(sentance))

console.log('////////////////////////////////////////////////////////////////////////')

const sentance1 = '  I love to sleep!  ';

function stringToArray1(string) {
    const arrayFromString = string.split(' ');
    return arrayFromString;
}

console.log(stringToArray1(sentance1))

console.log('////////////////////////////////////////////////////////////////////////')

const sentance2 = '  I love to sleep!  ';

function stringToArray2(string) {
    const arrayFromString = string.trim().split(' ');
    return arrayFromString;
}

console.log(stringToArray2(sentance2))

console.log('////////////////////////////////////////////////////////////////////////')

const sentance3 = '  I love to sleep!  ';

let result = null;

function stringToArray3(string) {
    const arrayFromString = string.trim().split(' ');
    return arrayFromString;
}

result = stringToArray3(sentance3);

console.log('////////////////////////////////////////////////////////////////////////')

// 2. Array from the first task to return it as a string and each word to be pasted with a hyphen
// I_love_to_eat!

function arrayToSnakeCase(array) {
    return array.join('_').toLowerCase();
}
console.log(arrayToSnakeCase(result));

console.log('////////////////////////////////////////////////////////////////////////')

/**
 * 3.
 * Create a function that takes 2 parameters, x and y
 * x will be a number in radius from -3 to 3 inclusive
 * y will be either "m" or "f"
 * 
 * x\y          m               f
 * -3   great grandfather   great grandmother   
 * -2   grandfather         grandmother
 * -1   father              mother
 * 0    me!                 me!
 * 1    son                 daughter
 * 2    grandson            granddaughter
 * 3    great grandson      great granddaughter
 */

const generations = {
    "-3": {m: 'great grandfather', f: "great grandmother"},
    "-2": {m: 'grandfather', f: "grandmother"},
    "-1": {m: 'father', f: "mother"},
    "0": {m: 'me', f: "me"},
    "1": {m: 'son', f: "daughter"},
    "2": {m: 'grandson', f: "granddaughter"},
    "3": {m: 'great grandson', f: "great granddaughter"},
}

console.log(generations)
console.log(generations[0])

function findGeneration(x, y){
    return generations[x][y];
}

console.log(findGeneration(-1, "m"));