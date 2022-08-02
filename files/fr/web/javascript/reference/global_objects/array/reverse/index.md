---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/reverse
---
{{JSRef}}

La méthode **`reverse()`** transpose les éléments d'un tableau&nbsp;: le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntaxe

```js
arr.reverse()
```

### Valeur de retour

Le tableau inversé.

## Description

La méthode `reverse()` permet d'inverser l'ordre des éléments du tableau. La méthode modifie le tableau courant et renvoie une référence à ce tableau.

Cette méthode est intentionnellement générique et peut être appelée (via {{jsxref("Function.call()")}}) ou appliquée (via {{jsxref("Function.apply()")}}) sur des objets semblables à des tableaux. Les objets qui ne contiennent pas de propriété `length` qui soit cohérente avec leurs propriétés indexées sur des nombres ne seront pas traités par `reverse()`.

## Exemples

### Inverser l'ordre des éléments d'un tableau

L'exemple qui suit crée un tableau `monArray`, qui contient trois éléments, puis inverse celui-ci.

```js
var monArray = ["un", "deux", "trois"];
monArray.reverse();

console.log(monArray) // ["trois", "deux", "un"]
```

### Inverser l'ordre des éléments d'un objet semblable à un tableau

Dans l'exemple suivant, on crée un objet semblable à un tableau `a` qui contient trois éléments et une propriété `length`. On appelle ensuite `reverse()` grâce à `call()` sur cet objet pour inverser ses éléments :

```js
const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); // On aurait pu utiliser apply() également

console.log(a); // {0: 3, 1: 2, 2 : 1, length: 3}
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.8', 'Array.prototype.reverse')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.reverse")}}

## Voir aussi

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
