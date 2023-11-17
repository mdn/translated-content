---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
---

{{JSRef}}

La méthode **`values()`** renvoie un nouvel objet `Array Iterator` qui contient les valeurs pour chaque indice du tableau.

{{EmbedInteractiveExample("pages/js/typedarray-values.html")}}

## Syntaxe

```js
typedArr.values();
```

### Valeur de retour

Un nouvel objet `Array Iterator`.

## Exemples

### Parcourir le tableau typé avec `for...of`

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();
// prérequis : le navigateur doit supporter les boucles
// for..of et les variables dont la portée est définie
// par let
for (let n of eArray) {
  console.log(n);
}
```

### Une autre méthode d'itération

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.values();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
