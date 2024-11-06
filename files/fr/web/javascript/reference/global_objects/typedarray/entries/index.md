---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
---

{{JSRef}}

La méthode **`entries()`** renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau.

{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}

## Syntaxe

```js
arr.entries();
```

### Valeur de retour

Un nouvel objet `Array Iterator`.

## Exemples

### Parcourir un tableau avec une boucle `for...of`

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.entries();
// prérequis nécessaire : le navigateur doit
// supporter les boucles for..of
// et les variables dont la portée est définie par let
for (let n of eArray) {
  console.log(n);
}
```

### Une autre méthode d'itération

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.entries();
console.log(eArr.next().value); // [0, 10]
console.log(eArr.next().value); // [1, 20]
console.log(eArr.next().value); // [2, 30]
console.log(eArr.next().value); // [3, 40]
console.log(eArr.next().value); // [4, 50]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
