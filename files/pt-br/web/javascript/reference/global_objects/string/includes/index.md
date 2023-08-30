---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

O método **includes()** determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando `true` ou `false`.

## Sintaxe

```
str.includes(searchString[, position])
```

### Parâmetros

- `searchString`
  - : É o conjunto de caracteres que será pesquisado dentro desta string.
- `position`
  - : Opcional. É um número inteiro que indica por onde a busca iniciará, referente ao índice da string a ser pesquisada. O valor padrão é 0.

### Valor retornado

`true` se o conjunto de caracteres for encontrado em algum lugar dentro da string sendo pesquisada. Do contrário, retorna `false`.

## Descrição

Este método permite conferir se uma string contém um determinado conjunto de caracteres.

### Case-sensitivity

O método `includes()` é case sensitive. Por exemplo, a seguinte expressão retorna `false`:

```js
"Bandeira do Brasil".includes("brasil"); // retorna false
```

## Exemplos

### Utilizando `includes()`

```js
var str = "Ser, ou não ser, eis a questão.";

console.log(str.includes("Ser")); // true
console.log(str.includes("questão")); // true
console.log(str.includes("não existe")); // false
console.log(str.includes("ser", 1)); // true
console.log(str.includes("SER")); // false
```

## Implementação

Este método foi adicionado à especificação ECMAScript 6 e pode não estar disponível em todas as implementações JavaScript. No entanto, você pode facilmente implementar este método:

```js
if (!String.prototype.includes) {
  String.prototype.includes = function () {
    "use strict";
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}
```

## Especificações

| Especificação                                                                      | Status           | Comentário         |
| ---------------------------------------------------------------------------------- | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-string.prototype.includes', 'String.prototype.includes')}} | {{Spec2('ES6')}} | Definição inicial. |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.includes")}}

## String.prototype.contains

No Firefox 18 - 39, o nome deste método era `contains()`. Ele foi renomeado para `includes()` no [Erro do Firefox 1102219](https://bugzil.la/1102219) devido ao seguinte motivo:

Foi [reportado](https://bugzilla.mozilla.org/show_bug.cgi?id=789036) que alguns websites que utilizam MooTools 1.2 não funcionavam no Firefox 17. Esta versão do MooTools verifica se `String.prototype.contains()` existe e, se não existir, MooTools adiciona sua própria função. Com a implementação desta função no Firefox 17, o comportamento desta validação mudou de uma forma que códigos baseados na implementação da função `String.prototype.contains()` do MooTools parassem de funcionar. Como resultado, esta mudança foi [desabilitada](https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8) no Firefox 17 e `String.prototype.contains()` foi disponibilizada na versão seguinte, no Firefox 18.

MooTools 1.3 força sua própria versão do `String.prototype.contains()`, portanto websites baseados nela não devem parar de funcionar. No entanto, você deve notar que [a assinatura do MooTools 1.3](http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains) e a assinatura ECMAScript 6 diferem (no segundo argumento). Posteriormente, [MooTools 1.5+ mudou sua assinatura para o padrão ES6.](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)

## Veja também

- {{jsxref("Array.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}} {{experimental_inline}}
- {{jsxref("String.prototype.endsWith()")}} {{experimental_inline}}
