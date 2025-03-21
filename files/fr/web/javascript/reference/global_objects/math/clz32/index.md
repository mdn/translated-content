---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
---

{{JSRef}}

La fonction **`Math.clz32()`** renvoie le nombre de zéros de tête dans la représentation binaire sur 32 bits d'un nombre.

{{InteractiveExample("JavaScript Demo: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// Expected output: 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// Expected output: 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// Expected output: 22
```

## Syntaxe

```js
Math.clz32(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur retournée

Le nombre de bits à zéro en tête de la représentation binaire sur 32 bits du nombre donné.

## Description

"`clz32`" est un raccourci pour CountLeadingZeroes32 (en français, « compter les zéros de tête&nbsp;»).

Si `x` n'est pas un nombre, il sera d'abord converti en nombre puis converti en un entier non signé sur 32 bits.

Si l'entier non signé sur 32 bits résultant vaut `0`, la fonction renverra `32`, car tous les bits valent `0`.

Cette fonction est particulièrement utile aux systèmes qui compilent du code JavaScript, comme [Emscripten](/fr/docs/Emscripten).

## Exemples

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

var liste = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  null,
  undefined,
  "machin",
  {},
  [],
];
liste.every((n) => Math.clz32(n) == 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
