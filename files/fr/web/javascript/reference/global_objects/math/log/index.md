---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/log
---
{{JSRef}}

La fonction **`Math.log()`** renvoie le logarithme naturel (aussi appelé logarithme népérien) d'un nombre, défini par :

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Syntaxe

    Math.log(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le logarithme naturelle de la valeur passée en argument. Si cette valeur est négative, c'est {{jsxref("NaN")}} qui est renvoyé.

## Description

Si la valeur de l'argument est négative, la valeur renvoyée sera {{jsxref("NaN")}}. Si la valeur de l'argument est `0`, la valeur de retour sera {{jsxref("Number.NEGATIVE_INFINITY", "-Infinity")}}.

`log()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.log()`, elle ne doit pas être utilisée à partir d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur). Si on veut utiliser les constantes données par les logarithmes naturels de 2 ou 10, on pourra utiliser les constantes {{jsxref("Math.LN2")}} ou {{jsxref("Math.LN10")}}. De même pour les logarithmes en base 2 ou en base 10, on pourra utiliser {{jsxref("Math.log2()")}} or {{jsxref("Math.log10()")}}.

## Exemples

### Utiliser `Math.log()`

```js
Math.log(-1); // NaN, valeur en dehors de l'intervalle de définition
Math.log(0);  // -Infinity
Math.log(1);  // 0
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

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.10', 'Math.log')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.log', 'Math.log')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.log', 'Math.log')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.log")}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
