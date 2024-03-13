---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

{{JSRef}}

La méthode **`keys()`** renvoie un nouvel objet **`Array Iterator`** qui contient les clefs pour chaque indice du tableau.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Syntaxe

```js
arr.keys();
```

### Valeur de retour

Un nouvel objet itérateur pour {{jsxref("Array")}}.

## Exemples

### Utilisation simple

```js
var arr = ["a", "b", "c"];
var itérateur = arr.keys();

console.log(itérateur.next()); // { value: 0, done: false }
console.log(itérateur.next()); // { value: 1, done: false }
console.log(itérateur.next()); // { value: 2, done: false }
console.log(itérateur.next()); // { value: undefined, done: true }
```

### Un itérateur de clés prend en compte les trous

```js
var arr = ["a", , "c"];
var clésCreuses = Object.keys(arr);
var clésDenses = [...arr.keys()];
console.log(clésCreuses); // ["0", "2"]
console.log(clésDenses); // [0, 1, 2]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
