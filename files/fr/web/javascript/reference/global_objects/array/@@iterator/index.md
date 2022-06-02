---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/@@iterator
---
{{JSRef}}

La valeur initiale de la propriété **`@@iterator`** correspond à la valeur initiale fournie par l'itérateur {{jsxref("Array.prototype.values()", "values")}}.

## Syntaxe

```js
arr[Symbol.iterator]()
```

### Valeur de retour

La première valeur fournie par {{jsxref("Array.prototype.values()","values()")}}. Si on utilise `arr[Symbol.iterator]` (sans les parenthèses) le navigateur renverra par défaut la fonction {{jsxref("Array.prototype.values()", "values()")}}.

## Exemples

### Parcourir un tableau avec une boucle `for...of`

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr  = arr[Symbol.iterator]();
// il est nécessaire que l'environnement supporte
// les boucles for..of et les variables
// utilisées avec let ou const ou var
for (let letter of eArr) {
  console.log(letter);
}
```

### Parcourir un tableau avec `next`

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.@@iterator")}}

## Voir aussi

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
