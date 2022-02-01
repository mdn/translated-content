---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/keys
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/keys
---
{{JSRef}}

La méthode **`keys()`** renvoie un nouvel objet **`Array Iterator`** qui contient les clefs pour chaque indice du tableau.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Syntaxe

    arr.keys()

### Valeur de retour

Un nouvel objet itérateur pour {{jsxref("Array")}}.

## Exemples

### Utilisation simple

```js
var arr = ["a","b","c"];
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
console.log(clésDenses);  // [0, 1, 2]
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.keys")}}

## Voir aussi

- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
