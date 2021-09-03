---
title: 'RangeError: precision is out of range'
slug: Web/JavaScript/Reference/Errors/Precision_range
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Precision_range
original_slug: Web/JavaScript/Reference/Erreurs/Precision_range
---
{{jsSidebar("Errors")}}

## Message

    RangeError: The number of fractional digits is out of range (Edge)
    RangeError: The precision is out of range (Edge)
    RangeError: precision {0} out of range (Firefox)
    RangeError: toExponential() argument must be between 0 and 20 (Chrome)
    RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
    RangeError: toPrecision() argument must be between 1 and 21 (Chrome)

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

Un argument dont la précision est en dehors de l'intervalle valide, prévu par le moteur JavaScript, a été utilisé pour une de ces méthodes :

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

Généralement, ces méthodes acceptent des arguments de précision compris entre 0 et 20 (voire 21). Cependant, la spécification ECMAScript permet de gérer des valeurs en dehors de cet intervalle.

| Méthode                                                      | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ------------------------------------------------------------ | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 to 100               | 0 to 20            |
| {{jsxref("Number.prototype.toFixed()")}}         | -20 to 100             | 0 to 20            |
| {{jsxref("Number.prototype.toPrecision()")}} | 1 to 100               | 1 to 21            |

## Exemples

### Exemples invalides

```js example-bad
77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError
2.34.toFixed(1001);         // RangeError

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
```

### Exemples valides

```js example-good
77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
```

## Voir aussi

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
