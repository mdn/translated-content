---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
---

{{JSRef}}

O método `padEnd()` preenche a string original com um determinado caractere, ou conjunto de caraceres, (repetidamente, se necessário) para que a string resultante alcance um determinado comprimento. O preenchimento é aplicado a partir do final (direita) da string original. A string original não é modificada.

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## Sintaxe

```
str.padEnd(targetLength [, padString])
```

### Parâmetros

- `targetLength`
  - : O comprimento da string resultante após a string original ter sido preenchida. Se o valor for menor do que o próprio comprimento da string original, a string original é retornada sem modificações.
- `padString`
  - : Opcional. O caractere (ou caracteres) que deve completar a string atual. Caso o comprimento desta string seja muito longo, estando acima do comprimento alvo, ela será truncada e sua parte esquerda restante é aplicada. O valor padrão para esse parâmetro é " " (`U+0020`).

### Valor retornado

Uma {{jsxref("String")}} cuja composição vem da string original, completada por um ou mais caracteres de preenchimento, respeitando o comprimento alvo.

## Exemplos

### Usando padEnd

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Polyfill

Rodando o seguinte código antes de qualquer código irá criar o método `String.prototype.padEnd()` caso ele não esteja disponível nativamente:

```js
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}
```

## Especificações

| Especificação                                                                      | Status               | Comentário                            |
| ---------------------------------------------------------------------------------- | -------------------- | ------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.padend', 'String.prototype.padEnd')}} | {{Spec2('ESDraft')}} | Definição inicial no ECMAScript 2017. |
| {{SpecName('ES8', '#sec-string.prototype.padend', 'String.prototype.padEnd')}}     | {{Spec2('ES8')}}     |                                       |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.padEnd")}}

## Veja também

- {{jsxref("String.prototype.padStart()")}}
