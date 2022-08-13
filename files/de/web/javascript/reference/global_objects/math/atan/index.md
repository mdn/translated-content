---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atan
---
{{JSRef}}

`Die Funktion`**`Math.atan()`** gibt den Arkustangens (im Radiantenmaß) einer Zahl zurück:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> das Ergebnis </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>so </mtext><mtext>dass</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

## Syntax

    Math.atan(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Arkustangens (im Radiantenmaß) der übergebenen Zahl.

## Beschreibung

`Die Math.atan()` Methode gibt einen numerischen Wert zwischen <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> und <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> im Radiantenmaß zurück.

`Weil atan()` eine statische Methode von Math ist, muss diese immer mit `Math.atan()` genutzt werden, ohne dass ein Objekt von Math erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von `Math.atan()`

```js
Math.atan(1);   // 0.7853981633974483
Math.atan(0);   // 0
Math.atan(-0);  // -0

Math.atan(Infinity);   //  1.5707963267948966
Math.atan(-Infinity);  // -1.5707963267948966

// The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
Math.atan(y / x);
```

Beachten Sie, dass es manchmal aus stilistischen Gründen gewollt ist, dass **±**`Infinity` vermieden werden soll. In diesen Fällen kann die Funktion {{jsxref("Math.atan2()")}} mit `0` als zweiten Parameter bessere Ergebnisse liefern.

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.4', 'Math.atan')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.atan', 'Math.atan')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.atan', 'Math.atan')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.atan")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
