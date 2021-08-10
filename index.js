// A constant for calculating temperature
const kelvin = 303;

// The result of celsius given the kelvin
const celsius = kelvin - 273;

// Calculate Fahrenheit = Celsius * (9/5) + 32

let fahrenheit = celsius * (9/5) +32;

// Round down fahrenheit

fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton = Celsius * (33/100)

let newton = celsius * (33/100);

newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);