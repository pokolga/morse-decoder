const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const MORSE_TABLE_NUMB = {};
    for (let symb in MORSE_TABLE) {
        let codeOfSymb = symb.replace(/[.]/g, "10").replace(/-/g, "11");
        codeOfSymb = "0".repeat(10 - codeOfSymb.length) + codeOfSymb;
        MORSE_TABLE_NUMB[codeOfSymb] = MORSE_TABLE[symb];
    }
    MORSE_TABLE_NUMB["**********"] = " ";
    const arrCodes = expr.match(/.{10}/g);
    const result = arrCodes.map((item) => MORSE_TABLE_NUMB[item]);
    return result.join("");
}

module.exports = {
    decode
}