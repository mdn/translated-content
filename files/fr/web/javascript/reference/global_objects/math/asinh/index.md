---
title: "Math : méthode statique asinh()"
short-title: asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.asinh()`** retourne le sinus hyperbolique inverse d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;tel que&nbsp;</mtext><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\mathtt{\operatorname{Math.asinh}(x)} &= \operatorname{arsinh}(x) = \text{l'unique } y \text{ tel que } \sinh(y) = x \\&= \ln\left(x + \sqrt{x^2 + 1}\right)\end{aligned}</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.asinh()")}}

```js interactive-example
console.log(Math.asinh(1));
// Sortie attendue : 0.881373587019543

console.log(Math.asinh(0));
// Sortie attendue : 0

console.log(Math.asinh(-1));
// Sortie attendue : -0.881373587019543

console.log(Math.asinh(2));
// Sortie attendue : 1.4436354751788103
```

## Syntaxe

```js-nolint
Math.asinh(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le sinus hyperbolique inverse de `x`.

## Description

Parce que `asinh()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.asinh()`, plutôt qu'en tant que méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.asinh()`

```js
Math.asinh(-Infinity); // -Infinity
Math.asinh(-1); // -0.881373587019543
Math.asinh(-0); // -0
Math.asinh(0); // 0
Math.asinh(1); // 0.881373587019543
Math.asinh(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.asinh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.asinh` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.asinh)
- La méthode statique {{JSxRef("Math.acosh()")}}
- La méthode statique {{JSxRef("Math.atanh()")}}
- La méthode statique {{JSxRef("Math.cosh()")}}
- La méthode statique {{JSxRef("Math.sinh()")}}
- La méthode statique {{JSxRef("Math.tanh()")}}
