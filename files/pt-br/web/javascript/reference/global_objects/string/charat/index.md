---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
---

{{JSRef}}

O método **`charAt()`** retorna o caractere especificado a partir de uma string.

## Sintaxe

```
str.charAt(index)
```

### Parâmetros

- `index`
  - : Um inteiro entre `0` e `str.length - 1`. Se nenhum índice for definido, `charAt()` usará `0` como índice.

### Valor retornado

Uma string representando o caractere no índice especificado. Uma string vazia se o **`index`** fornecido estiver fora do intervalo de índices da string `str`.

## Descrição

Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é `0` (zero), e o índice do último caractere em uma string declarada como `stringName` é `stringName.length - 1`. Se o índice que você fornecer estiver fora do intervalo de índices da string, JavaScript retornará uma string vazia.

Se nenhum índice for passado para `charAt()`, `0` será usado por padrão.

## Exemplos

### Mostrando caracteres em diferente localizações em uma string

O exemplo a seguir mostra caracteres em diferentes locais em uma string `"Brave new world"`:

```js
var anyString = "Brave new world";

console.log("A letra no índice 0 é '" + anyString.charAt(0) + "'");
console.log("A letra no índice 1 é '" + anyString.charAt(1) + "'");
console.log("A letra no índice 2 é '" + anyString.charAt(2) + "'");
console.log("A letra no índice 3 é '" + anyString.charAt(3) + "'");
console.log("A letra no índice 4 é '" + anyString.charAt(4) + "'");
console.log("A letra no índice 99 é '" + anyString.charAt(999) + "'");
```

As linhas acima retornam o seguinte:

```js
A letra no índice 0 é 'B'
A letra no índice 1 é 'r'
A letra no índice 2 é 'a'
A letra no índice 3 é 'v'
A letra no índice 4 é 'e'
A letra no índice 99 é ''
```

### Obtendo caracteres inteiros

O seguinte código fornece um meio de garantir que passar por um loop de string sempre forneça um caractere inteiro, mesmo se a string contiver caracteres que não estão no [Plano Multilíngue Básico](<https://pt.wikipedia.org/wiki/Plano_(Unicode)>).

```js
var str = "A \uD87E\uDC04 Z"; // We could also use a non-BMP character directly
for (var i = 0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the
  // individual character

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return ""; // Position not found
  }
  if (code < 0xd800 || code > 0xdfff) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 <= code && code <= 0xdbff) {
    if (str.length <= i + 1) {
      throw "High surrogate without following low surrogate";
    }
    var next = str.charCodeAt(i + 1);
    if (0xdc00 > next || next > 0xdfff) {
      throw "High surrogate without following low surrogate";
    }
    return str.charAt(i) + str.charAt(i + 1);
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw "Low surrogate without preceding high surrogate";
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 > prev || prev > 0xdbff) {
    throw "Low surrogate without preceding high surrogate";
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
```

Em um ambiente ECMAScript 2016 que permite atribuição desestruturada, o seguinte código é uma alternativa mais sucinta e um pouco mais flexível, pois faz incremento para uma variável de incremento automaticamente (se o caractere justificar que seja um par substituto).

```js
var str = "A\uD87E\uDC04Z"; // We could also use a non-BMP character directly
for (var i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr);
}

function getWholeCharAndI(str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return ""; // Position not found
  }
  if (code < 0xd800 || code > 0xdfff) {
    return [str.charAt(i), i]; // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 <= code && code <= 0xdbff) {
    if (str.length <= i + 1) {
      throw "High surrogate without following low surrogate";
    }
    var next = str.charCodeAt(i + 1);
    if (0xdc00 > next || next > 0xdfff) {
      throw "High surrogate without following low surrogate";
    }
    return [str.charAt(i) + str.charAt(i + 1), i + 1];
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw "Low surrogate without preceding high surrogate";
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xd800 > prev || prev > 0xdbff) {
    throw "Low surrogate without preceding high surrogate";
  }
  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1];
}
```

### Corrigindo `charAt()` para suportar caracteres não-Plano-Multilíngüe-Básico (PMB)

Embora o exemplo anterior possa ser mais útil para programas que devem suportar caracteres não BMP (uma vez que não exige que o chamador saiba onde qualquer caractere não BMP pode aparecer), no caso de desejar, na escolha de um caractere por índice, para tratar os pares substitutos em uma string como os caracteres únicos que eles representam, pode-se usar o seguinte:

```js
function fixedCharAt(str, idx) {
  var ret = "";
  str += "";
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while (surrogatePairs.exec(str) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return "";
  }

  ret += str.charAt(idx);

  if (
    /[\uD800-\uDBFF]/.test(ret) &&
    /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))
  ) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1);
  }
  return ret;
}
```

## Especificações

| Especificação                                                                  | Status             | Comentário          |
| ------------------------------------------------------------------------------ | ------------------ | ------------------- |
| {{SpecName('ES1')}}                                                            | {{Spec2('ES1')}}   | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.5.4.4', 'String.prototype.charAt')}}              | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-string.prototype.charat', 'String.prototype.charAt')}} | {{Spec2('ES6')}}   |                     |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.charAt")}}

## Veja também

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
