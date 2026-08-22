---
title: "Math : méthode statique sinh()"
short-title: sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.sinh()`** retourne le sinus hyperbolique d'un nombre. C'est-à-dire,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh}(x)} = \sinh(x) = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.sinh()")}}

```js interactive-example
console.log(Math.sinh(0));
// Sortie attendue : 0

console.log(Math.sinh(1));
// Sortie attendue : 1.1752011936438014

console.log(Math.sinh(-1));
// Sortie attendue : -1.1752011936438014

console.log(Math.sinh(2));
// Sortie attendue : 3.626860407847019
```

## Syntaxe

```js-nolint
Math.sinh(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le sinus hyperbolique de `x`.

## Description

Puisque `sinh()` est une méthode statique de `Math`, il faut toujours l'utiliser comme `Math.sinh()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.sinh()`

```js
Math.sinh(-Infinity); // -Infinity
Math.sinh(-0); // -0
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.sinh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La méthode statique {{jsxref("Math.acosh()")}}
- La méthode statique {{jsxref("Math.asinh()")}}
- La méthode statique {{jsxref("Math.atanh()")}}
- La méthode statique {{jsxref("Math.cosh()")}}
- La méthode statique {{jsxref("Math.tanh()")}}
