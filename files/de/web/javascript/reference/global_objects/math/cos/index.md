---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cos
---
{{JSRef}}

Die **`Math.cos()`** Funktion gibt den {{interwiki("wikipedia", "Cosinus")}} eines Winkels zurück. Der Winkel muss im {{interwiki("wikipedia", "Bogenmaß")}} angegeben werden. Der Wert ist <math style="display: inline;"><mstyle displaystyle="true"><mfrac><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>adjacent</mtext> </mrow></mrow></msub><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>hypotenuse</mtext> </mrow></mrow></msub></mfrac></mstyle></math>.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Syntax

    Math.cos(x)

### Parameter

- `x`
  - : Eine Zahl im Winkelmaß (rad).

### Rückgabewert

Der Cosinus der übergebenen Zahl.

## Beschreibung

Die `Math.cos()` Funktion gibt einen nummerischen Wert zwischen -1 und 1 zurück. Dieser repräsentiert den Cosinus des Winkels.

Weil `cos()` eine statische Funktion von `Math` ist, wird es immer als `Math.cos()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.cos()`

```js
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
```

## Spezifikationen

| Spezifikationen                                                      | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.7', 'Math.cos')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.cos', 'Math.cos')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.cos', 'Math.cos')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.cos")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
