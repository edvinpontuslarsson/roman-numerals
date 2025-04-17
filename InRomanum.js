// usque ad VIII
const InRomanum = num =>
    num <  1  ? '' :
    num >= 5  ? 'V'  + InRomanum(num - 5) :
    num >= 4  ? 'IV' + InRomanum(num - 4) :
    'I' + InRomanum(num - 1);

console.log(InRomanum(0)); // "" - just below lower bound (not valid in Roman numerals)
console.log(InRomanum(1)); // "I" - lower bound
console.log(InRomanum(2)); // "II" - just above lower bound
console.log(InRomanum(3)); // "III" - highest number of same symbol in a row
console.log(InRomanum(4)); // "IV" - special case
console.log(InRomanum(5)); // "V" - next base value
console.log(InRomanum(6)); // "VI" - hej hopp
console.log(InRomanum(7)); // "VII" - hej hopp
console.log(InRomanum(8)); // "VIII" - hej hopp
console.log(InRomanum(9)); // "IX" - special case
