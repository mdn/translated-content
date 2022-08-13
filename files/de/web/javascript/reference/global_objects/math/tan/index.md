---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/tan
---
{{JSRef}}

Die **`Math.tan()`** Funktion gibt den Tangens einer Zahl.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntax

    Math.tan(x)

### Parameter

- `x`
  - : Eine Zahl im Winkelmaß (rad).

### Rückgabewert

Den Tangens der übergebenen Zahl.

## Beschreibung

Die `Math.tan()` Funktion gibt einen numerischen Wert zurück, welcher den Tangens eines Winkels repräsentiert.

Weil `tan()` eine statische Funktion von `Math` ist, wird es immer als `Math.tan()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.tan()`

```js
Math.tan(1); // 1.5574077246549023
```

Weil die `Math.tan()` Funktion Werte im Winkelmaß erwartet, es aber oftmals einfacher ist mit Winkeln zu rechnen, nutzt die folgende Funktion Winkel (in Grad) und Convertiert diese in das Winkelmaß:

```js
function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.18', 'Math.tan')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.tan', 'Math.tan')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.tan', 'Math.tan')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.tan")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
