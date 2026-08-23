---
title: "Math : méthode statique tanh()"
short-title: tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.tanh()`** retourne la tangente hyperbolique d'un nombre. Autrement dit,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow><mrow><msup><mi mathvariant="normal">e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.tanh}(x)} = \tanh(x) = \frac{\sinh(x)}{\cosh(x)} = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{\mathrm{e}^x + \mathrm{e}^{-x}} = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x}+1}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.tanh()")}}

```js interactive-example
console.log(Math.tanh(-1));
// Sortie attendue : -0.7615941559557649

console.log(Math.tanh(0));
// Sortie attendue : 0

console.log(Math.tanh(Infinity));
// Sortie attendue : 1

console.log(Math.tanh(1));
// Sortie attendue : 0.7615941559557649
```

## Syntaxe

```js-nolint
Math.tanh(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La tangente hyperbolique de `x`.

## Description

Puisque `tanh()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.tanh()`, elle ne doit pas être utilisée comme méthode d'un autre objet `Math` qui a été instancié (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.tanh()`

```js
Math.tanh(-Infinity); // -1
Math.tanh(-0); // -0
Math.tanh(0); // 0
Math.tanh(1); // 0.7615941559557649
Math.tanh(Infinity); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.tanh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La méthode statique {{JSxRef("Math.acosh()")}}
- La méthode statique {{JSxRef("Math.asinh()")}}
- La méthode statique {{JSxRef("Math.atanh()")}}
- La méthode statique {{JSxRef("Math.cosh()")}}
- La méthode statique {{JSxRef("Math.sinh()")}}
