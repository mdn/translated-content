---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef}}

La fonction **`Math.pow()`** renvoie un nombre à une certaine puissance, c'est-à-dire `base^exposant`.

{{InteractiveExample("JavaScript Demo: Math.pow()")}}

```js interactive-example
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Expected output: NaN
```

## Syntaxe

```js
Math.pow(base, exposant);
```

### Paramètres

- `base`
  - : Le nombre correspondant à la base.
- `exponent`
  - : L'exposant auquel on élève le paramètre précédent.

### Valeur de retour

Un nombre qui représente un nombre (premier argument) élevé à une puissance donné (second argument).

## Description

`pow()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.pow()`, elle ne doit pas être utilisée comme une méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.pow()`

```js
// Utilisation simple
Math.pow(7, 2); // 49

// Exposants négatifs
Math.pow(7, -2); // 0.02040816326530612 (1/49)

// Exposants fractionnaires
Math.pow(2, 1 / 2); // 1.4142135623730951 (racine carrée de 2)

// Cas aux limites
Math.pow(-7, 0.5); // NaN
// (les nombres négatifs n'ont pas de racine carrée)
Math.pow(-7, 1 / 3); // NaN
// Nombre négatif avec une base décimale
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Opérateur d'exponentiation](</fr/docs/Web/JavaScript/Reference/Operators#Exponentiation_(**)>) {{experimental_inline}}
