---
title: "Math : méthode statique pow()"
short-title: pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.pow()`** retourne la valeur d'une base élevée à une puissance. C'est-à-dire

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)} = x^y</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.pow()")}}

```js interactive-example
console.log(Math.pow(7, 3));
// Résultat attendu : 343

console.log(Math.pow(4, 0.5));
// Résultat attendu : 2

console.log(Math.pow(7, -2));
// Résultat attendu : 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Résultat attendu : NaN
```

## Syntaxe

```js-nolint
Math.pow(base, exponent)
```

### Paramètres

- `base`
  - : Le nombre correspondant à la base.
- `exponent`
  - : Le nombre correspondant à l'exposant.

### Valeur de retour

Un nombre représentant `base` élevé à la puissance `exponent`. Retourne {{JSxRef("NaN")}} dans l'un des cas suivants&nbsp;:

- `exponent` est `NaN`.
- `base` est `NaN` et `exponent` n'est pas `0`.
- `base` est ±1 et `exponent` est ±`Infinity`.
- `base < 0` et `exponent` n'est pas un entier.

## Description

`Math.pow()` est équivalent à l'opérateur [`**`](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation), sauf que `Math.pow()` n'accepte que des nombres.

`Math.pow(NaN, 0)` (et l'équivalent `NaN ** 0`) est le seul cas où {{JSxRef("NaN")}} ne se propage pas à travers les opérations mathématiques — il retourne `1` malgré le fait que l'opérande soit `NaN`. De plus, le comportement où `base` est 1 et `exponent` est non fini (±Infinity ou `NaN`) est différent de la norme IEEE 754, qui définit que le résultat doit être 1, tandis que JavaScript retourne `NaN` pour préserver la compatibilité avec son comportement original.

Puisque `pow()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.pow()`, elle ne doit pas être utilisée comme une méthode d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.pow()`

```js
// Cas simples
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Exposants fractionnaires
Math.pow(4, 0.5); // 2 (racine carrée de 4)
Math.pow(8, 1 / 3); // 2 (racine cubique de 8)
Math.pow(2, 0.5); // 1.4142135623730951 (racine carrée de 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (racine cubique de 2)

// Exposants négatifs
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Bases négatives
Math.pow(-7, 2); // 49 (le carré est positif)
Math.pow(-7, 3); // -343 (le cube peut être négatif)
Math.pow(-7, 0.5); // NaN (les nombres négatifs n'ont pas de racine carrée réelle)
// En raison de la proximité des racines « paires » et « impaires »,
// et des limites de la précision des nombres flottants,
// les bases négatives avec des exposants fractionnaires retournent
// toujours NaN, même lorsque le résultat mathématique est réel
Math.pow(-7, 1 / 3); // NaN

// Zéro et infini
Math.pow(0, 0); // 1 (n'importe quoi ** ±0 est 1)
Math.pow(Infinity, 0.1); // Infinity (exposant positif)
Math.pow(Infinity, -1); // 0 (exposant négatif)
Math.pow(-Infinity, 1); // -Infinity (exposant impair positif)
Math.pow(-Infinity, 1.5); // Infinity (exposant positif)
Math.pow(-Infinity, -1); // -0 (exposant impair négatif)
Math.pow(-Infinity, -1.5); // 0 (exposant négatif)
Math.pow(0, 1); // 0 (exposant positif)
Math.pow(0, -1); // Infinity (exposant négatif)
Math.pow(-0, 1); // -0 (exposant impair positif)
Math.pow(-0, 1.5); // 0 (exposant positif)
Math.pow(-0, -1); // -Infinity (exposant impair négatif)
Math.pow(-0, -1.5); // Infinity (exposant négatif)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN : seul Math.pow(NaN, 0) ne retourne pas NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.cbrt()")}}
- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.sqrt()")}}
- [L'opérateur d'exponentiation (`**`)](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
