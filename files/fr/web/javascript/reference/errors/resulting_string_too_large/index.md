---
title: 'RangeError: repeat count must be less than infinity'
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Resulting_string_too_large
original_slug: Web/JavaScript/Reference/Erreurs/Resulting_string_too_large
---
{{jsSidebar("Errors")}}

## Message

```
RangeError: argument out of range (Edge)
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)
RangeError: Invalid count value (Chrome)
```

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

La méthode {{jsxref("String.prototype.repeat()")}}, qui permet de répéter une chaîne de caractères, a été utilisée avec un argument qui n'est pas compris entre 0 et {{jsxref("Infinity")}} (exclue) (ce qui correspond à l'intervalle \[0, +∞))

La chaîne de caractères crée par cette méthode ne doit pas dépasser la taille maximale d'une chaîne. Cette taille varie selon le moteur JavaScript. Pour Firefox (SpiderMonkey), la taille maximale d'une chaîne de caractères vaut 2^28-1 (`0xFFFFFFF`).

## Exemples

### Exemples invalides

```js example-bad
'abc'.repeat(Infinity); // RangeError
'a'.repeat(2**28);      // RangeError
```

### Exemples valides

```js example-good
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
```

## Voir aussi

- {{jsxref("String.prototype.repeat()")}}
