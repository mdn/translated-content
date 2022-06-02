---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_codepoint
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_codepoint
---
{{jsSidebar("Errors")}}

## Message

```
RangeError: Invalid code point {0} (Edge)
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
```

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

La méthode {{jsxref("String.fromCodePoint()")}} a été utilisée mais elle n'accepte que les points de code valides (_code points_) et la valeur fournie en argument n'est pas un point de code valide (ex. `NaN`, `-1`).

Un [point de code](https://fr.wikipedia.org/wiki/Point_de_code) est une valeur de code Unicode et s'inscrit dans un intervalle allant de `0` à `0x10FFFF`.

Les valeurs {{jsxref("NaN")}}, les entiers négatifs (`-1`), les flottants (`3.14`) ou les valeur supérieures à `0x10FFFF` (`1114111`) ne peuvent pas être utilisées avec cette méthode.

## Examples

### Exemples invalides

```js example-bad
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### Exemples valides

```js example-good
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
```

## Voir aussi

- {{jsxref("String.fromCodePoint()")}}
