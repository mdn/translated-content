---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/abs
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/abs
---
{{JSRef}}

La fonction **`Math.abs()`** retourne la valeur absolue d'un nombre, c'est-à-dire

<math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{si} \quad x \geq 0 \\ -x &#x26; \text{si} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

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
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs("string"); // NaN
Math.abs();         // NaN
```

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.1', 'Math.abs')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.abs', 'Math.abs')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.abs', 'Math.abs')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.abs")}}

## Voir aussi

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
