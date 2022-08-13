---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/asin
---
{{JSRef}}

Die Funktion **`Math.asin()`** gibt den Arkussinus (im Radiantenmaß) einer Zahl zurück:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> das Ergebnis </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>so </mtext><mtext></mtext><mtext>dass</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asin.html")}}

## Syntax

    Math.asin(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Arkussinus (im Radiantenmaß) der übergebenen Zahl, die zwischen **-1** und **1** liegt. Andernfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Die `Math.asin()`Methode gibt einen numerischen Wert zwischen <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> und <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> im Radiantenmaß für x Werte zwischen -1 und 1 zurück. Wenn der übergebene Wert außerhalb dieses Bereiches liegt, wird {{jsxref("NaN")}} zurückgegeben.

`Weil asin()` eine statische Methode von `Math` ist, muss diese immer mit `Math.asin()` genutzt werden, ohne dass ein Objekt von `Math` erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von `Math.asin()`

```js
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.5707963267948966 (pi/2)
Math.asin(2);   // NaN
```

Für Werte kleiner -1 oder größer als 1 gibt `Math.asin()`{{jsxref("NaN")}} zurück.

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.3', 'Math.asin')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.asin', 'Math.asin')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.asin', 'Math.asin')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.asin")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
