const NumerusRomanus = num =>
    (num < 1 ? '' :
    num >= 90 ? 'XC' + NumerusRomanus(num - 90) :
    num >= 50 ? 'L ' + NumerusRomanus(num - 50) :
    num >= 40 ? 'XL' + NumerusRomanus(num - 40) :
    num >= 10 ? 'X ' + NumerusRomanus(num - 10) :
    num >= 9 ? ' IX' + NumerusRomanus(num - 9) :
    num >= 5 ? ' V ' + NumerusRomanus(num - 5) :
    num >= 4 ? ' IV' + NumerusRomanus(num - 4) :
    'I ' + NumerusRomanus(num - 1)).trim();

console.log(NumerusRomanus(0)); // "" - just below lower bound (not valid in Roman numerals)
console.log(NumerusRomanus(1)); // "I" - lower bound
console.log(NumerusRomanus(2)); // "II" - just above lower bound
console.log(NumerusRomanus(3)); // "III" - highest number of same symbol in a row
console.log(NumerusRomanus(4)); // "IV" - special case
console.log(NumerusRomanus(5)); // "V" - next base value
console.log(NumerusRomanus(9)); // "IX" - special case
console.log(NumerusRomanus(10)); // "X" - transition to tens
console.log(NumerusRomanus(39)); // "XXXIX" - just below XL
console.log(NumerusRomanus(40)); // "XL" - edge of 40
console.log(NumerusRomanus(49)); // "XLIX" - edge case combining XL and IX
console.log(NumerusRomanus(50)); // "L"
console.log(NumerusRomanus(89)); // "LXXXIX"
console.log(NumerusRomanus(90)); // "XC"
console.log(NumerusRomanus(99)); // "XCIX"
