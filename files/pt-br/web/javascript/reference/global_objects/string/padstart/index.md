---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}

O método `padStart()` preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.

{{InteractiveExample("JavaScript Demo: String.padStart()")}}

```js interactive-example
const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

## Sintaxe

```
str.padStart(targetLength [, padString])
```

### Parâmetros

- `targetLength`
  - : O comprimento da string resultante uma vez que a string alvo tenha sido preenchida. Caso seu valor seja menor do que o comprimento da string alvo, é retornado a própria string alvo, sem alterações.
- `padString`
  - : Opcional. O caractere, ou caracteres, que deve preencher a string alvo. Caso o comprimento dessa essa string de preenchimento seja superior ao `targetLength`, ela será truncada a partir da direita. O valor padrão é `" "` (`U+0020 'SPACE'`).

### Valor de retorno

Uma {{jsxref("String")}} de comprimento específico com uma string de preenchimento aplicada a partir do seu início.

## Exemplos

### Exemplos básicos

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

## Polyfill

Ao executar o seguinte código antes de qualquer outro código é criado o método `String.prototype.padStart()`, em casos onde ele não está disponível nativamente:

```js
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String.prototype.padEnd()")}}
