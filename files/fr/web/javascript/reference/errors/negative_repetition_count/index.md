---
title: 'RangeError: repeat count must be non-negative'
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Negative_repetition_count
original_slug: Web/JavaScript/Reference/Erreurs/Negative_repetition_count
---
{{jsSidebar("Errors")}}

## Message

    RangeError: argument out of range (Edge)
    RangeError: repeat count must be non-negative (Firefox)
    RangeError: Invalid count value (Chrome)

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

La méthode {{jsxref("String.prototype.repeat()")}} a été utilisée avec un argument négatif. Or, cet argument doit être compris dans l'intervalle \[0, +∞).

## Exemples

### Exemples invalides

```js example-bad
'abc'.repeat(-1); // RangeError 
```

### Exemples valides

```js example-good
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (converti en entier)
```

## Voir aussi

- {{jsxref("String.prototype.repeat()")}}
