---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

La fonction **`Math.trunc()`** retourne la troncature entière d'un nombre en retirant sa partie décimale.

<math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.trunc</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mrow><mo>⌊</mo><mi>x</mi><mo>⌋</mo></mrow></mtd><mtd><mtext>si</mtext></mtd><mtd><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mrow><mo>⌈</mo><mi>x</mi><mo>⌉</mo></mrow></mtd><mtd><mtext>si</mtext></mtd><mtd><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.trunc}(x)} = \begin{cases} \left\lfloor x \right\rfloor &#x26; \text{if} &#x26; x \geq 0 \\ \left\lceil x \right\rceil &#x26; \text{if} &#x26;x &#x3C; 0 \end{cases}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Syntaxe

```js
Math.trunc(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La partie entière du nombre passé en argument.

## Description

Contrairement aux autres méthodes {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} et {{jsxref("Math.round()")}}, `Math.trunc()` fonctionne de façon très simple : la partie décimale du nombre est retirée et on conserve la partie entière (que le nombre soit positif ou négatif).

Ainsi, si l'argument est un nombre positif, `Math.trunc()` sera équivalent à `Math.floor()`, sinon `Math.trunc()` sera équivalent à `Math.ceil()`.

On notera que l'argument passé à la méthode est converti en nombre de façon implicite.

`trunc()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.trunc()`, elle ne doit pas être utilisée comme la méthode d'un objet qui aurait été instancié (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.trunc()`

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("toto"); // NaN
Math.trunc(); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
