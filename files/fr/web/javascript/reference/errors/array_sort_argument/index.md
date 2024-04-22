---
title: "TypeError: invalid Array.prototype.sort argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: argument is not a function object (Edge)
TypeError: invalid Array.prototype.sort argument (Firefox)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Que s'est-il passé ?

L'argument passé à {{jsxref("Array.prototype.sort()")}} devrait être {{jsxref("undefined")}} ou être une fonction comparant ses opérandes.

## Exemples

### Cas invalides

```js example-bad
[1, 3, 2].sort(5); // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || "asc"); // TypeError
```

### Cas valides

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]
```

## Voir aussi

- {{jsxref("Array.prototype.sort()")}}
