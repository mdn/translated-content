---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/keys
---
{{JSRef}}

La méthode **`keys()`** renvoie un nouvel objet `Array Iterator` contenant les clés pour chaque indice du tableau typé.

{{EmbedInteractiveExample("pages/js/typedarray-keys.html")}}

## Syntaxe

    arr.keys()

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

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.keys', '%TypedArray%.prototype.keys()')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.keys', '%TypedArray%.prototype.keys()')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.keys")}}

## Voir aussi

- [Les tableaux typés JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
