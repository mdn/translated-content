---
title: "Math : méthode statique atanh()"
short-title: atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.atanh()`** retourne l'arc tangente hyperbolique d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;telle que&nbsp;</mtext><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width="0.16666666666666666em"></mspace><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \in ({-1}, 1),\;\mathtt{\operatorname{Math.atanh}(x)} &= \operatorname{artanh}(x) = \text{l'unique } y \text{ telle que } \tanh(y) = x \\&= \frac{1}{2}\,\ln\left(\frac{1+x}{1-x}\right)\end{aligned}</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.atanh()")}}

```js interactive-example
console.log(Math.atanh(-1));
// Sortie attendue : -Infinity

console.log(Math.atanh(0));
// Sortie attendue : 0

console.log(Math.atanh(0.5));
// Sortie attendue : 0.549306144334055 (approximativement)

console.log(Math.atanh(1));
// Sortie attendue : Infinity
```

## Syntaxe

```js-nolint
Math.atanh(x)
```

### Paramètres

- `x`
  - : Un nombre compris entre -1 et 1, inclus.

### Valeur de retour

La tangente hyperbolique inverse de `x`. Si `x` est 1, retourne {{JSxRef("Infinity")}}. Si `x` est -1, retourne `-Infinity`. Si `x` est inférieur à -1 ou supérieur à 1, retourne {{JSxRef("NaN")}}.

## Description

Parce que `atanh()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.atanh()`, et non comme méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser la méthode `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(-0); // -0
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.atanh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.atanh` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.atanh)
- La méthode statique {{JSxRef("Math.acosh()")}}
- La méthode statique {{JSxRef("Math.asinh()")}}
- La méthode statique {{JSxRef("Math.cosh()")}}
- La méthode statique {{JSxRef("Math.sinh()")}}
- La méthode statique {{JSxRef("Math.tanh()")}}
