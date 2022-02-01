---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/entries
---
{{JSRef}}

La méthode **`entries()`** renvoie un nouvel objet de type  **`Array Iterator`** qui contient le couple clef/valeur pour chaque éléments du tableau.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Syntaxe

    arr.entries()

### Valeur de retour

Un nouvel objet qui est un itérateur pour {{jsxref("Array")}}.

## Exemples

### Parcourir un tableau avec ses index et éléments

```js
const arr = ["a", "b", "c"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// 0 "a"
// 1 "b"
// 2 "c"
```

### Boucle `for...of`

On peut avoir le même résultat en utilisant une boucle [for...of](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) :

```js
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.entries")}}

## Voir aussi

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
