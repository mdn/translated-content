---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef}}

La fonction **`Math.log()`** renvoie le logarithme naturel (aussi appelé logarithme népérien) d'un nombre, défini par :

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.log()")}}

```js interactive-example
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Expected output: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Expected output: 4
```

## Syntaxe

```js
Math.log(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le logarithme naturelle de la valeur passée en argument. Si cette valeur est négative, c'est {{jsxref("NaN")}} qui est renvoyé.

## Description

Si la valeur de l'argument est négative, la valeur renvoyée sera {{jsxref("NaN")}}. Si la valeur de l'argument est `0`, la valeur de retour sera {{jsxref("Number.NEGATIVE_INFINITY", "-Infinity")}}.

`log()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.log()`, elle ne doit pas être utilisée à partir d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur). Si on veut utiliser les constantes données par les logarithmes naturels de 2 ou 10, on pourra utiliser les constantes {{jsxref("Math.LN2")}} ou {{jsxref("Math.LN10")}}. De même pour les logarithmes en base 2 ou en base 10, on pourra utiliser {{jsxref("Math.log2()")}} or {{jsxref("Math.log10()")}}.

## Exemples

### Utiliser `Math.log()`

```js
Math.log(-1); // NaN, valeur en dehors de l'intervalle de définition
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### Utiliser `Math.log` pour construire un logarithme sur une autre base

La fonction suivante renvoie le logarithme de `y` en base `x` (c'est-à-dire log<sub>x</sub> y):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Si on exécute `getBaseLog(10, 1000)`, on obtiendra `2.9999999999999996` en raison de l'arrondi du à la représentation en nombre flottant (le résultat exact étant 3).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
