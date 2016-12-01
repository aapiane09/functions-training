function concat(word1, word2, word3) {
    return word1 + " " + word2 + " " + word3 + ".";
}

function repeat(word, num) {
    for (var i = 0; i < num; i++) {
        console.log(word);
    }
}

function powerOf(num, power) {
    var value = 1;
    for (var i = 0; i < power; i++){
        value *= num;
        }
    return value;
}

function areaOfACircle(radius) {
    return 3.14159 * (radius * radius)
}

function pythagTheorem(a, b) {
    var cSquared = (a * a) + (b * b)
    return Math.sqrt(cSquared);
}

function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        console.log(true);
}
    else {
        console.log(false);
    }
}

function countVowels(word) {
    var array = word.split("")
    word = word.toLowerCase();
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u" || array[i] === "y"
        || array[i] === "A" || array[i] === "E" || array[i] === "I" || array[i] === "O" || array[i] === "U" || array[i] === "Y") {
        counter++
    }
}
 return counter;
}

function findWdi(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'wdi') {
        return 'true';
        }
    }
        return 'false';
}

function printTriangle(length) {
    var star = '*';
    console.log(star)
    for (var i = 0; i < length-1; i++) {
        star = star + '*'
        console.log(star)
    }
}
