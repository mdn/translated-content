---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

La méthode **`toUpperCase()`** retourne la valeur de la chaîne courante, convertie en majuscules.

{{EmbedInteractiveExample("pages/js/string-touppercase.html")}}

## Syntaxe

```js
str.toUpperCase();
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
console.log("alphabet".toUpperCase()); // "ALPHABET"
```

### Convertir une valeur `this` en chaîne de caractères

Cette peut être utilisée pour convertir une valeur qui n'est pas une chaîne de caractères lorsque celle-ci est fournie comme valeur `this` :

```js
var obj = {
  toString: function toString() {
    return "abcdef";
  },
};
var a = String.prototype.toUpperCase.call(obj);
var b = String.prototype.toUpperCase.call(true);

console.log(a); // Affiche 'ABCDEF' dans la console
console.log(b); // Affiche 'TRUE' dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
