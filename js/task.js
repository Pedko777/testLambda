//!напиши скрипт,
//?который на вход принимает строку, на выход отдает массив строк со всеми возможными размещениями точек между букв

//*пример:
//*> abc
//*[‘abc’, ‘a.bc’, ‘ab.c’, ‘a.b.c’]

//*> abcd
//*[‘abcd’, ‘a.bcd’, ‘ab.cd’, ‘a.b.cd’ … ]

//================================================= Вариант 1

const fnPermutePunc1 = (str, i, n) => {
  String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };
  if (i == n) {
    return;
  }
  let buff = str;
  let j = str.length - n + i;
  buff = str.splice(j, 0, ".");
  console.log(buff);
  fnPermutePunc1(str, i + 1, n);
  fnPermutePunc1(buff, i + 1, n);
};

const str = "ABCD";
fnPermutePunc1(str, 1, str.length);

//================================================== Вариант 2
const fnPermutePunc2 = (str) => {
  let result = "";
  const strArray = str.split("");
  const length = strArray.length;
  const resultSize = 2 ** ((str.length || 1) - 1);
  for (let i = 0; i < resultSize; i++) {
    for (let j = 0; j < length; j++) {
      result += strArray[j];
      if ((i & (1 << j)) > 0) {
        result += ".";
      }
    }
    result += "\n";
  }
  return result;
};

console.log(fnPermutePunc2("abcd"));
