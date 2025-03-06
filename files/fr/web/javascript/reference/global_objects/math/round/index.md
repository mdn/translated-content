---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
---

{{JSRef}}

La fonction **`Math.round()`** retourne la valeur d'un nombre arrondi à l'entier le plus proche.

{{InteractiveExample("JavaScript Demo: Math.round()")}}

```js interactive-example
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6
```

## Syntaxe

```js
Math.round(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La valeur de l'entier le plus proche du nombre passé en argument.

## Description

Si la partie décimale du nombre est plus grande que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus grande. Si elle est plus petite que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus petite. Si la partie décimale du nombre vaut exactement 0.5, l'argument est arrondi à l'entier le plus proche en direction de l'infini positif (attention, pour la plupart des langages de programmation, c'est le nombre avec la plus grande valeur absolue qui est renvoyé ; on a donc une différence de comportement pour les nombres négatifs dont la partie décimale vaut exactement 0.5).

`round()` étant une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.round()`, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(42); //  42
Math.round(-20.5); // -20
Math.round(-20.51); // -21
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.toPrecision()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
