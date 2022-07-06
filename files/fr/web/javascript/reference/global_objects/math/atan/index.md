---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atan
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/atan
---
{{JSRef}}

La fonction **`Math.atan()`** renvoie l'arc tangente d'un nombre exprimée en radians. Elle est définie par :

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo>le seul<mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

## Syntaxe

```js
Math.atan(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'arc tangente du nombre passé en argument (exprimé en radians).

## Description

La méthode `Math.atan()` renvoie une valeur numérique comprise entre <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> et <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>.

`atan()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.atan()`, elle ne doit pas être utilisée comme une méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.atan()`

```js
Math.atan(1);  // 0.7853981633974483
Math.atan(0);  // 0
Math.atan(-0); // -0

Math.atan(Infinity); // 1.5707963267948966
Math.atan(-Infinity); // -1.5707963267948966

// L'angle formé entre la droite [(0,0);(x,y)] et l'axe des abscisses
// dans un système de coordonnées cartésienne
Math.atan(y / x);
```

## Spécifications

| Spécification                                                            | État                         | Commentaires                                          |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.4', 'Math.atan')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.atan', 'Math.atan')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.atan', 'Math.atan')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.atan")}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
