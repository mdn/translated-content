---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
---

{{JSRef}}

La méthode **`reverse()`** inverse les éléments d'un tableau. Le premier élément du tableau typé devient le dernier, le dernier élément devient le premier et ainsi de suite. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.reverse()")}}_._ Dans le reste de cet article _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html")}}

## Syntaxe

```js
typedarray.reverse();
```

### Valeur de retour

Le tableau typé dont les éléments ont été inversés.

## Exemples

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.reverse()")}}
