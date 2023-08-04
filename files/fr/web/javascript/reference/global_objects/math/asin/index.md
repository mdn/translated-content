---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
---

{{JSRef}}

La fonction **`Math.asin()`** renvoie l'arc sinus d'un nombre (en radians). Elle est définie par :

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asin.html")}}

## Syntaxe

```js
Math.asin(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'arc sinus du nombre passé en argument (exprimé en radians). Si ce nombre n'est pas compris entre -1 et 1, la valeur renvoyée sera {{jsxref("NaN")}}.

## Description

La méthode `Math.asin()` renvoie une valeur numérique comprise entre <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> et <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> pour `x` compris entre -1 et 1. Si `x` est hors de cet intervalle, la méthode renverra {{jsxref("NaN")}}.

`Math.asin()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.asin()`, elle ne doit pas être appelée à partir d'un autre objet créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.asin()`

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.570796326794897 (-pi/2)
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1); // 1.570796326794897 (pi/2)
Math.asin(2); // NaN
```

Pour les valeurs (strictement) inférieures à -1 ou supérieures à 1, `Math.asin()` renvoie {{jsxref("NaN")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
