---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef}}

La fonction **`Math.sin()`** renvoie le sinus d'un nombre.

{{InteractiveExample("JavaScript Demo: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// Expected output: 8.414709848078965

console.log(getCircleY(2, 10));
// Expected output: 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// Expected output: 1.2246467991473533e-15
```

## Syntaxe

```js
Math.sin(x);
```

### Paramètres

- `x`
  - : Un nombre (qui exprime un angle en radians).

### Valeur de retour

Le sinus de la valeur passée en argument (qui correspond à un angle en radians).

## Description

La méthode `sin()` renvoie une valeur numérique comprise (au sens large) entre 1 et -1 et qui représente le sinus d'un angle donné en radians.

`sin()` est une méthode statique de `Math`, elle doit être utilisée avec la syntaxe `Math.sin()`, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
