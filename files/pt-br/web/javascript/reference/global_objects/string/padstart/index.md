---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}

O método `padStart()` preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

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
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
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

| Especificação                                                                          | Status               | Comentário                               |
| -------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.padstart', 'String.prototype.padStart')}} | {{Spec2('ESDraft')}} | Implementação inical no ECMAScript 2017. |
| {{SpecName('ES8', '#sec-string.prototype.padstart', 'String.prototype.padStart')}}     | {{Spec2('ES8')}}     |                                          |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.padStart")}}

## Veja também

- {{jsxref("String.prototype.padEnd()")}}
