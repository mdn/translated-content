---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
---

{{JSRef}}

La fonction **`Math.acosh()`** renvoie l'arc cosinus hyperbolique d'un nombre.Elle est définie par :

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> l'unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## Syntaxe

```js
Math.acosh(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'arc cosinus hyperbolique du nombre en argument. Si le nombre est inférieur à 1, la valeur renvoyée sera {{jsxref("NaN")}}.

## Description

`acosh` étant une méthode statique de `Math`, il faut l'utiliser avec `Math.acosh()`, plutôt qu'en faisant appel à une méthode d'un autre objet créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0); // NaN
Math.acosh(0.5); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
```

Pour les valeurs strictement inférieures à 1 `Math.acosh` renvoie {{jsxref("NaN")}}.

## Prothèse d'émulation (_polyfill_)

Pour tout <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x \geq 1</annotation></semantics></math>, <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math>, on peut donc émuler cette fonction avec le code suivant :

```js
function acosh(x) {
  return Math.log(x + Math.sqrt(x * x - 1));
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
