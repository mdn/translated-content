---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---

{{JSRef}}

O método **`Number.parseInt()`** converte um argumento de _string_ e retorna um inteiro da raiz ou base específica.

{{InteractiveExample("JavaScript Demo: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## Sintaxe

```
Number.parseInt(string,[ radix])
```

### Parâmetros

- `string`
  - : O valor a ser convertido. Se este argumento não for uma _string_, então ele é convertido a um usando a operação abstrata [`ToString`](https://tc39.es/ecma262/#sec-tostring). O espaço em branco inicial neste argumento é ignorado.
- `radix`_ {{optional_inline}}_
  - : Um inteiro entre `2` e `36` que representa a _raiz_ (a base no sistema numérico matemático) de uma `string`. Tome cuidado—o padrão _**não**_ é `10`!

### Valor de retorno

Um inteiro convertido de uma dada `string`.

Se a `radix` é menor que `2` ou maior que `36`, e o primeiro caracter que não é um espaço em branco não puder ser convertido para um número, {{jsxref("NaN")}} é retornado.

## Polyfill

```js
if (Number.parseInt === undefined) {
  Number.parseInt = window.parseInt;
}
```

## Exemplos

### Number.parseInt vs parseInt

Este método tem a mesma funcionalidade que o método global {{jsxref("parseInt", "parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

e é parte do ECMAScript 2015 (sua proposta é a modularização dos globais). Por favor veja {{jsxref("parseInt", "parseInt()")}} para mais detalhes e exemplos.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O objeto {{jsxref("Number")}} a qual ela pertence.
- O método global {{jsxref("parseInt", "parseInt()")}}.
