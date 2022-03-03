---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log2
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/log2
---
{{JSRef}}

La fonction **`Math.log2()`** renvoie le logarithme en base 2 d'un nombre :

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Syntaxe

    Math.log2(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le logarithme en base 2 du nombre passé en argument. Si ce nombre est négatif, c'est {{jsxref("NaN")}} qui sera renvoyé.

## Description

Si `x` est strictement inférieur à 0, la valeur renvoyée sera {{jsxref("NaN")}}.

`log2()` étant une méthode statique de `Math`, il faut utiliser `Math.log2()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur). Si on souhaite utiliser des constantes, on pourra employer {{jsxref("Math.LOG2E")}} ou {{jsxref("Math.LN2")}}.

## Exemples

### Utiliser `Math.log2()`

```js
Math.log2(3);    // 1.584962500721156
Math.log2(2);    // 1
Math.log2(1);    // 0
Math.log2(0);    // -Infinity
Math.log2(-2);   // NaN
Math.log2(1024); // 10
```

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.log2', 'Math.log2')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-math.log2', 'Math.log2')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.log2")}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
