---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef}}

La fonction **`Math.sqrt()`** renvoie la racine carrée d'un nombre. Cette fonction est définie par&nbsp;:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>l'unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Syntaxe

```js
Math.sqrt(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La racine carrée du nombre passé en argument. Si le nombre fourni est négatif, c'est {{jsxref("NaN")}} qui sera renvoyé.

## Description

Si la valeur de `x` est négative, `sqrt` renverra {{jsxref("NaN")}}.

`sqrt()` est une méthode statique de `Math`, elle doit être utilisée avec la syntaxe `Math.sqrt()`, elle ne doit pas être appelée comme méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
