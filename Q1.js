function rot13(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = str.charCodeAt(i);

    if (isLetter(char)) {
      let shiftedCharCode;

      if (isUpperCase(char)) {
        shiftedCharCode = ((charCode - 65 + 13) % 26) + 65;
      } else {
        shiftedCharCode = ((charCode - 97 + 13) % 26) + 97;
      }

      result += String.fromCharCode(shiftedCharCode);
    } else {
      result += char;
    }
  }

  return result;
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function isUpperCase(char) {
  return /[A-Z]/.test(char);
}
console.log(rot13("Hello, World!"));
console.log(rot13("OpenAI is awesome!"));
