---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/acos
---
{{JSRef}}

Die Funktion **`Math.acos()`** gibt den Arkuskosinus (im Radiantenmaß) einer Zahl zurück:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> das gleiche </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>derart, dass</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ das gleiche } \; y \in [0; \pi] \, \text{derart, dass} \; \cos(y)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## Syntax

    Math.acos(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Arkuskosinus (im Radiantenmaß) der übergebenen Zahl, wenn diese zwischen **-1** und **1** ist. Anderfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Die `acos` Methode gibt einen numerischen Wert zwischen 0 und {{jsxref("Math/PI", "Pi")}} im Radiantenmaß für x Werte zwischen -1 und 1 zurück. Wenn der übergebene Wert außerhalb dieses Bereiches liegt, wird {{jsxref("NaN")}} zurückgegeben.

Weil `acos` eine statische Methode von `Math` ist, kann dieses immer mit `Math.acos()` genutzt werden, ohne dass ein Objekt von `Math` erstellt werden muss (`Math` ist kein Konstruktor).

## Beispiele

### Beispiel: `Math.acos` benutzen

```js
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
```

Für Werte kleiner -1 oder größer 1 gibt `Math.acos` {{jsxref("Global_Objects/NaN", "NaN")}} zurück.

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.2', 'Math.acos')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.acos', 'Math.acos')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.acos', 'Math.acos')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.acos")}}

## Siehe auch

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
