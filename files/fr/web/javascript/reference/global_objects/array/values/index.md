---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/values
---
{{JSRef}}

La méthode **`values()`** renvoie un nouvel objet **`Array Iterator`** qui contient les valeurs pour chaque indice du tableau. Cette méthode est l'implémentation par défaut de `Array.prototype[Symbol.Iterator]`.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

```js
var a = ['t', 'i', 't', 'o', 'u'];
var iterateur = a.values();

console.log(iterateur.next().value); // t
console.log(iterateur.next().value); // i
console.log(iterateur.next().value); // t
console.log(iterateur.next().value); // o
console.log(iterateur.next().value); // u
```

## Syntaxe

    array.values()

### Valeur de retour

Un nouvel objet itérateur sur {{jsxref("Array")}}.

## Exemples

### Itérer avec une boucle `for...of`

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
// votre navigateur doit supporter les boucles for..of
// et les variables définies avec let
for (let lettre of eArr) {
  console.log(lettre);
}
```

### Itérer avec `next()`

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.values', 'Array.prototype.values')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.values")}}

## Voir aussi

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
