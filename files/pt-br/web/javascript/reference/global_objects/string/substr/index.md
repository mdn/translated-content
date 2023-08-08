---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}}

O método `substr()` retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Sintaxe

```
str.substr(start[, length])
```

### Parâmetros

- `start`
  - : Local para começar a extrair os caracteres.
- `length`
  - : Opcional. O número de caracteres a serem extraídos.

### Valor de retorno

Uma nova string contendo a seção extraída da string fornecida.

## Descrição

O `substr()` extrai caracteres de comprimento de uma `str`, contando a partir do índice inicial.

- Se o `start` for um número positivo, o índice começa a contar no início da string. Seu valor é limitado ao tamanho da string (`str.length`).
- Se o `start` for um número negativo, o índice começa a contar a partir do final da string. Seu valor é limitado ao tamanho da string (`-str.length`).

> **Nota:** No Microsoft JScript, valores negativos no argumento `start` não são considerados como referência ao final da string.

- Se `length` for omitido, `substr()` extrairá caracteres até o final da string.
- Se `length` for {{jsxref("undefined")}}, `substr()` extrai os caracteres até o final da string.
- Se `length` for um número negativo, ele será tratado como `0`.
- Para `start` e `length`, {{jsxref("NaN")}} é tratado como 0.

## Exemplos

### Usando `substr()`

```js
var aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## Polyfill

JScript da Microsoft não suporta valores negativos para o índice de `start`. Se você deseja usar esse recurso, você pode usar o seguinte código de compatibilidade para evitar esse erro:

```js
// only run when the substr() function is broken
if ("ab".substr(-1) != "b") {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = (function (substr) {
    return function (start, length) {
      // call the original method
      return substr.call(
        this,
        // did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length,
      );
    };
  })(String.prototype.substr);
}
```

## Especificações

| Specification                                                                      | Status               | Comment                                                                                |
| ---------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                | {{Spec2('ES3')}}     | Defined in the (informative) Compatibility Annex B. Implemented in JavaScript 1.0.     |
| {{SpecName('ES5.1', '#sec-B.2.3', 'String.prototype.substr')}}                     | {{Spec2('ES5.1')}}   | Defined in the (informative) Compatibility Annex B                                     |
| {{SpecName('ES6', '#sec-string.prototype.substr', 'String.prototype.substr')}}     | {{Spec2('ES6')}}     | Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers |
| {{SpecName('ESDraft', '#sec-string.prototype.substr', 'String.prototype.substr')}} | {{Spec2('ESDraft')}} | Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.substr")}}

## Veja também

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
