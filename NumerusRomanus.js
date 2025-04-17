const InRomanum = num =>
    num < 1   ? '' :
    num >= 90 ? 'XC' + InRomanum(num - 90) :
    num >= 50 ? 'L'  + InRomanum(num - 50) :
    num >= 40 ? 'XL' + InRomanum(num - 40) :
    num >= 10 ? 'X'  + InRomanum(num - 10) :
    num >= 9  ? 'IX' + InRomanum(num - 9) :
    num >= 5  ? 'V'  + InRomanum(num - 5) :
    num >= 4  ? 'IV' + InRomanum(num - 4) :
    'I' + InRomanum(num - 1);  

console.log(InRomanum(0)); // "" - just below lower bound (not valid in Roman numerals)
console.log(InRomanum(1)); // "I" - lower bound
console.log(InRomanum(2)); // "II" - just above lower bound
console.log(InRomanum(3)); // "III" - highest number of same symbol in a row
console.log(InRomanum(4)); // "IV" - special case
console.log(InRomanum(5)); // "V" - next base value
console.log(InRomanum(9)); // "IX" - special case
console.log(InRomanum(10)); // "X" - transition to tens
console.log(InRomanum(39)); // "XXXIX" - just below XL
console.log(InRomanum(40)); // "XL" - edge of 40
console.log(InRomanum(49)); // "XLIX" - edge case combining XL and IX
console.log(InRomanum(50)); // "L"
console.log(InRomanum(89)); // "LXXXIX"
console.log(InRomanum(90)); // "XC"
console.log(InRomanum(99)); // "XCIX"
