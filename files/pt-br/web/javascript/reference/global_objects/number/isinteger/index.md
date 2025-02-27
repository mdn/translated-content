---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

O método **`Number.isInteger()`** determina se o valor passado é um inteiro.

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## Sintaxe

```
Number.isInteger(value)
```

### Parâmetros

- `value`
  - : O valor a testar se é um inteiro.

### Valor retornado

Um {{jsxref("Boolean")}} indicando se o valor é inteiro ou não.

## Descrição

Se o alvo for um inteiro, retorna `true`, senão retorna `false`. Se o valor é {{jsxref("NaN")}} ou infinito, retorna `false`.

## Exemplos

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
```

## Polyfill

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver tabém

- O objeto {{jsxref("Number")}} a qual este método pertence.
