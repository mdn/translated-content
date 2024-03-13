---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
---

{{JSRef}}

La valeur initiale de la propriété @@iterator est le même objet fonction que la valeur initiale de {{jsxref("TypedArray.prototype.values()", "values")}}.

## Syntaxe

```js
typedarray[Symbol.iterator]();
```

### Valeur de retour

Une fonction d'itération sur le tableau typé, par défaut, c'est la fonction {{jsxref("TypedArray.prototype.values()","values()")}}.

## Exemples

### Parcourir un tableau typé avec `for...of`

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// prérequis : le navigateur doit supporter les boucles
// for..of et les variables dont la portée est définie
// par let
for (let n of arr) {
  console.log(n);
}
```

### Autre méthode d'itération

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
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
- {{jsxref("TypedArray.prototype.values()")}}
