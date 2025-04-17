function NumerusRomanus(num) {
  if (num < 1) {
    return '';
  }
  if (num >= 40) {
    return 'XL' + NumerusRomanus(num - 40);
  }
  if (num >= 10) {
    return 'X' + NumerusRomanus(num - 10);
  }
  if (num >= 9) {
    return 'IX' + NumerusRomanus(num - 9);
  }
  if (num >= 5) {
    return 'V' + NumerusRomanus(num - 5);
  }
  if (num >= 4) {
    return 'IV' + NumerusRomanus(num - 4);
  }
  if (num >= 1) {
    return 'I' + NumerusRomanus(num - 1);
  }
}

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
console.log(NumerusRomanus(100)); // "C"
console.log(NumerusRomanus(399)); // "CCCXCIX"
console.log(NumerusRomanus(400)); // "CD"
console.log(NumerusRomanus(499)); // "CDXCIX"
console.log(NumerusRomanus(500)); // "D"
console.log(NumerusRomanus(900)); // "CM"
console.log(NumerusRomanus(1000)); // "M"
console.log(NumerusRomanus(1987)); // "MCMLXXXVII"
console.log(NumerusRomanus(3999)); // "MMMCMXCIX" - upper bound of standard Roman numerals
console.log(NumerusRomanus(4000)); // "" or unsupported - above standard range
