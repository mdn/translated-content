---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

La méthode **`unshift()`** ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Syntaxe

```js
arr.unshift([élém1[, ...[, élémN]]])
```

### Paramètres

- `élémN`
  - : Les éléments que l'on souhaite ajouter en début de tableau.

### Valeur de retour

La nouvelle valeur de la propriété {{jsxref("Array.length", "length")}} du tableau sur lequel a été appelée la méthode.

## Description

La méthode `unshift()` insère les valeurs renseignées au début d'un objet ressemblant à un tableau.

`unshift()` est volontairement générique ; cette méthode peut être {{jsxref("Function.call", "appelée","",1)}} ou {{jsxref("Function.apply", "appliquée","",1)}} sur des objets ressemblant à des tableaux. Les objets qui ne contiennent pas une propriété `length` reflètant la fin d'une série de propriétés indexées numériquement pourront ne pas avoir un comportement cohérent avec cette méthode.

Attention, lorsqu'on utilise `unshift()` avec plusieurs arguments, ceux-ci sont insérés au début du tableau dans l'ordre selon lequel ils sont passés en arguments. Aussi, on n'obtiendra pas le même résultat en appelant `unshift()` _n_ fois avec 1 arguments ou en appelant `unshift()` avec _n_ arguments.

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.table(arr);
// [1, 2, 3, 4, 5, 6]

let arr2 = [4, 5, 6];

arr2.unshift(1);
arr2.unshift(2);
arr2.unshift(3);

console.table(arr2);
// [3, 2, 1, 4, 5, 6]
```

## Exemples

```js
var arr = [1, 2];

arr.unshift(0); // renvoie 3, la nouvelle longueur du tableau
// arr est [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr est [-2, -1, 0, 1, 2]

arr.unshift([-3]); // 6
// arr est [[-3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 8
// arr est [[-7, -6], [-5], [-3], -2, -1, 0, 1, 2]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
