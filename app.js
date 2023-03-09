// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0062;
    //return the dollar value
    return parseFloat(valueInPound.toFixed(4));
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 137.08;
    //return the dollar value
    return parseFloat(valueInYen.toFixed(1));
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
