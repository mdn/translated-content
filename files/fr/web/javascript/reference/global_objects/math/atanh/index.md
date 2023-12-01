---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef}}

La fonction **`Math.atanh()`** renvoie l'arc tangente hyperbolique d'un nombre :

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mtext> tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## Syntaxe

```js
Math.atanh(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'arc tangente hyperbolique du nombre passé en argument.

## Description

`atanh()` est une méthode statique de `Math`, il faut utiliser la syntaxe `Math.atanh()`, et non pas une méthode d'un objet `Math` créé sur mesure (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

Pour les valeurs strictement inférieures à -1 ou strictement supérieures à 1, {{jsxref("NaN")}} sera renvoyé.

## Prothèse d'émulation (_polyfill_)

Pour <math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&#x3C;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation></semantics></math>, on a la formule suivante : <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math>et on peut donc émuler la fonction avec :

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
