---
title: "TypeError: invalid Array.prototype.sort argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
---

{{jsSidebar("Errors")}}

A exceção JavaScript "invalid Array.prototype.sort argument" ocorre quando o argumento de {{jsxref("Array.prototype.sort()")}}}} não é {{{jsxref("undefined")}} ou uma função que compara os seus operandos.

## Mensagem

```
TypeError: The comparison function must be either a function or undefined (V8-based)
TypeError: invalid Array.prototype.sort argument (Firefox)
TypeError: Array.prototype.sort requires the comparator argument to be a function or undefined (Safari)
```

## Tipo de erro

{{jsxref("TypeError")}}

## O que ocorreu de errado?

Espera-se que o argumento de {{jsxref("Array.prototype.sort()")}}}} seja {{{jsxref("undefined")}} ou uma função que compare os seus operandos.

## Exemplos

### Casos inválidos

```js example-bad
[1, 3, 2].sort(5); // TypeError

const cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || "asc"); // TypeError
```

### Casos válidos

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]

const cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]
```

## Veja também

- {{jsxref("Array.prototype.sort()")}}
