const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let letter = "";
    letter = expr.slice(i, i + 10);

    let symbol = "";
    let morse = "";
    for (let j = 0; j < letter.length; j += 2) {
      symbol = letter.slice(j, j + 2);
      if (symbol === "10") {
        morse += ".";
      } else if (symbol === "11") {
        morse += "-";
      }
    }

    if (morse) {
      result += MORSE_TABLE[morse];
    } else {
      result += " ";
    }
  }
  return result;
}

module.exports = {
  decode,
};
