---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef}}

La fonction **`Math.tan()`** renvoie la tangente d'un nombre exprimant un angle en radians.

{{InteractiveExample("JavaScript Demo: Math.tan()")}}

```js interactive-example
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Expected output: 0

console.log(getTanFromDegrees(45));
// Expected output: 0.9999999999999999

console.log(getTanFromDegrees(90));
// Expected output: 16331239353195370
```

## Syntaxe

```js
Math.tan(x);
```

### Paramètres

- `x`
  - : Un nombre qui représente un angle en radians.

### Valeur de retour

La tangente de l'angle fourni en argument (exprimé en radians).

## Description

La méthode `Math.tan()` renvoie une valeur numérique qui représente la tangente d'un angle.

`tan()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.tan()`, elle ne doit pas être utilisée comme méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.tan()`

```js
Math.tan(1); // 1.5574077246549023
```

`Math.tan()` considère un argument exprimé en radians. Cependant, on peut vouloir travailler avec des valeurs en degrés. Pour cela, on pourra utiliser la fonction suivante qui calcule la tangente après avoir converti l'argument en radians :

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
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
- {{jsxref("Math.sin()")}}
