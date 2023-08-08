---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
---

{{JSRef}}

La méthode **`keys()`** renvoie un nouvel objet `Array Iterator` contenant les clés pour chaque indice du tableau typé.

{{EmbedInteractiveExample("pages/js/typedarray-keys.html")}}

## Syntaxe

```js
arr.keys();
```

### Valeur de retour

Un nouvel objet `Array Iterator`.

## Exemples

### Parcourir un tableau avec `for...of`

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.keys();
// prérequis : le navigateur doit supporter les
// boucles for..of et les variables dont la portée
// est définie par let
for (let n of eArray) {
  console.log(n);
}
```

### Une autre méthode d'itération

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.keys();
console.log(eArr.next().value); // 0
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2
console.log(eArr.next().value); // 3
console.log(eArr.next().value); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
