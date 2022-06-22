---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_array_length
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_array_length
---
{{jsSidebar("Erreurs")}}

## Message

```
RangeError: Array length must be a finite positive integer (Edge)
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

Deux cas de figures peuvent causer cette erreur :

- La création d'un tableau {{jsxref("Array")}} ou {{jsxref("ArrayBuffer")}} dont la longueur est négative ou supérieure ou égale à 2^32
- La modification de la propriété {{jsxref("Array.length")}} pour que celle-ci ait une valeur négative ou supérieure ou égale à 2^32.

Les tailles des objets `Array` et `ArrayBuffer` sont limitées car leurs longueurs (`length`) sont représentées par des entiers non-signés sur 32 bits. Ces valeurs sont donc nécessairement comprises dans l'intervalle allant de 0 à 2^32-1.

Si vous utilisez le constructeur pour `Array`, il est probable que vous souhaitiez utiliser la notation littérale plutôt que le constructeur. En effet, le premier argument de ce constructeur correspond à la longueur du tableau.

Sinon, vous pouvez réduire la longueur utilisée afin que celle-ci soit dans l'intervalle valide avant de l'utiliser pour une telle création ou modification.

## Exemples

### Exemples invalides

```js example-bad
new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // set -1 to the length property

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // set 2^32 to the length property
```

### Exemples valides

```js example-good
[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff est la notation hexadécimale
// pour 2^32 - 1
// ce qu'on peut également écrire (-1 >>> 0)
```

## Voir aussi

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
