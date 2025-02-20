---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef}}

La fonction **`Math.abs()`** retourne la valeur absolue d'un nombre, c'est-à-dire

<math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{si} \quad x \geq 0 \\ -x &#x26; \text{si} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## Syntaxe

```js
Math.abs(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur absolue

La valeur absolue du nombre passé en argument.

## Description

`abs` est une méthode statique de l'objet `Math` et doit toujours être utilisée avec la syntaxe `Math.abs()`.

## Exemples

### Utiliser `Math.abs()`

Si la méthode est utilisée avec une chaîne de caractères non numérique, avec un tableau à plus d'un élément, sans paramètre ou avec {{jsxref("undefined")}}, la valeur retournée sera {{jsxref("NaN")}}. Si elle est utilisée avec {{jsxref("null")}}, la fonction renverra 0.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
