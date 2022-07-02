---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
original_slug: Web/JavaScript/Reference/Objets_globaux/String/toUpperCase
---
{{JSRef}}

La méthode **`toUpperCase()`** retourne la valeur de la chaîne courante, convertie en majuscules.

{{EmbedInteractiveExample("pages/js/string-touppercase.html")}}

## Syntaxe

```js
str.toUpperCase()
```

### Valeur de retour

Une nouvelle chaîne de caractères obtenue à partir de la chaîne appelante, passée en majuscules.

### Exceptions levées

- {{jsxref("TypeError")}}
  - : Une telle exception sera levée si on appelle cette méthode sur {{jsxref("null")}} ou {{jsxref("undefined")}} (en utilisant `Function.prototype.call()` par exemple).

## Description

La méthode `toUpperCase()` retourne la valeur de la chaîne convertie en majuscules. `toUpperCase` n'affecte pas la valeur de la chaîne elle-même.

## Exemples

### Utiliser `toUpperCase()`

```js
console.log( "alphabet".toUpperCase() ); // "ALPHABET"
```

### Convertir une valeur `this` en chaîne de caractères

Cette peut être utilisée pour convertir une valeur qui n'est pas une chaîne de caractères lorsque celle-ci est fournie comme valeur `this` :

```js
var obj = {
  toString: function toString(){
    return 'abcdef';
  }
};
var a = String.prototype.toUpperCase.call(obj);
var b = String.prototype.toUpperCase.call(true);

console.log(a); // Affiche 'ABCDEF' dans la console
console.log(b); // Affiche 'TRUE' dans la console
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.18', 'String.prototype.toUpperCase')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.toUpperCase")}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
