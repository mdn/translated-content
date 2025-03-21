---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef}}

La méthode **`toLowerCase()`** retourne la chaîne de caractères courante en minuscules.

{{InteractiveExample("JavaScript Demo: String.toLowerCase()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## Syntaxe

```js
str.toLowerCase();
```

### Valeur de retour

Une nouvelle chaîne de caractères qui est obtenue en passant la chaîne appelante en minuscules.

## Description

La méthode `toLowerCase()` renvoie la valeur de la chaîne convertie en minuscules. `toLowerCase()` ne modifie pas la valeur de la chaîne courante.

## Exemples

```js
console.log("ALPHABET".toLowerCase()); // "alphabet"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
