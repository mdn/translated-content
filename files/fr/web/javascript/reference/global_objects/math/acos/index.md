---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/acos
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/acos
---
{{JSRef}}

La fonction **`Math.acos()`** renvoie l'arc cosinus d'une valeur exprimée en radians. Cela est défini par :

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul  </mtext><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## Syntaxe

    Math.acos(x)

### Paramètres

- `x`
  - : Un nombre (représentant un angle exprimé en radians).

### Valeur de retour

L'arc cosinus du nombre passé en argument si celui est compris entre -1 et 1. La méthode renvoie {{jsxref("NaN")}} sinon.

## Description

La méthode `acos` renvoie une valeur numérique comprise entre 0 et Pi pour x compris entre -1 et 1. Si la valeur de `x` est hors de cet intervalle, la méthode renverra {{jsxref("NaN")}}.

`acos` est une méhode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.acos()`, elle ne doit pas être appelée depuis un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.acos()`

```js
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
```

Pour les valeurs (strictement) inférieures à -1 ou supérieures à 1, `Math.acos` renvoie `NaN`.

## Spécifications

| Spécification                                                            | Statut                       | Commentaires                                          |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.2', 'Math.acos')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.acos', 'Math.acos')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.acos', 'Math.acos')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.acos")}}

## Voir aussi

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
