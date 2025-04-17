190 characters allowed

this is 387

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

TODO just skip markdown format

180 chars:

// usque ad VIII
const InRomanum = num =>
    num <  1  ? '' :
    num >= 5  ? 'V'  + InRomanum(num - 5) :
    num >= 4  ? 'IV' + InRomanum(num - 4) :
    'I' + InRomanum(num - 1);
