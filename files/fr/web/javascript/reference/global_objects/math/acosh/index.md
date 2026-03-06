---
title: "Math : méthode statique acosh()"
short-title: acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.acosh()`** retourne le cosinus hyperbolique inverse d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;tel que&nbsp;</mtext><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \geq 1,\;\mathtt{\operatorname{Math.acosh}(x)} &= \operatorname{arcosh}(x) = \text{l'unique } y \geq 0 \text{ tel que } \cosh(y) = x\\&= \ln\left(x + \sqrt{x^2 - 1}\right)\end{aligned}</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.acosh()")}}

```js interactive-example
console.log(Math.acosh(0.999999999999));
// Sortie attendue : NaN

console.log(Math.acosh(1));
// Sortie attendue : 0

console.log(Math.acosh(2));
// Sortie attendue : 1.3169578969248166

console.log(Math.acosh(2.5));
// Sortie attendue : 1.566799236972411
```

## Syntaxe

```js-nolint
Math.acosh(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à 1.

### Valeur de retour

Le cosinus hyperbolique inverse de `x`. Si `x` est inférieur à 1, retourne {{JSxRef("NaN")}}.

## Description

Parce que `acosh()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.acosh()`, plutôt qu'en tant que méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser la méthode `Math.acosh()`

```js
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.acosh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.acosh` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.acosh)
- La méthode statique {{JSxRef("Math.asinh()")}}
- La méthode statique {{JSxRef("Math.atanh()")}}
- La méthode statique {{JSxRef("Math.cosh()")}}
- La méthode statique {{JSxRef("Math.sinh()")}}
- La méthode statique {{JSxRef("Math.tanh()")}}
