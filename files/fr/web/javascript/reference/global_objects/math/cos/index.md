---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef}}

La fonction **`Math.cos()`** retourne le [cosinus](https://fr.wikipedia.org/wiki/Cosinus) d'un angle dont la valeur est exprimée en [radians](https://fr.wikipedia.org/wiki/Radian).

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Syntaxe

```js
Math.cos(x);
```

### Paramètres

- `x`
  - : Une valeur numérique (exprimée en radians).

### Valeur de retour

Le cosinus de l'angle fourni en argument (exprimé en radians).

## Description

La méthode `Math.cos()` renvoie une valeur numérique comprise entre -1 et 1. Cela représente la valeur du cosinus de l'angle correspondant à cette valeur.

`cos` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.cos()`, ne pas utiliser une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.cos()`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
