---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log10
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/log10
---
{{JSRef}}

La fonction **`Math.log10()`** renvoie le logarithme en base 10 d'un nombre, donné par la formule :

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique  </mtext><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Syntaxe

    Math.log10(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le logarithme en base 10 du nombre passé en argument. Si cette valeur est négative, c'est {{jsxref("NaN")}} qui sera renvoyé.

## Description

Si la valeur de l'argument est strictement inférieure à 0, la valeur renvoyée à {{jsxref("NaN")}}.

`log10()` étant une méthode statique de `Math`, il faut utiliser `Math.log10()`et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur). Cette fonction est équivalente à la fonction donnée par `Math.log(x) / Math.log(10)`.

## Exemple

### Utiliser `Math.log10()`

```js
Math.log10(2);      // 0.3010299956639812
Math.log10(1);      // 0
Math.log10(0);      // -Infinity
Math.log10(-2);     // NaN
Math.log10(100000); // 5
```

## Prothèse d'émulation (_polyfill_)

Il est possible d'avoir un résultat approximatif avec la fonction suivante :

```js
Math.log10 = Math.log10 || function(x) {
  return Math.log(x) * Math.LOG10E;
};
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.log10', 'Math.log10')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-math.log10', 'Math.log10')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.log10")}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
