---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Meth
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sin
---
{{JSRef}}

Die **`Math.sin()`** Funktion gibt den Sinus einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Syntax

    Math.sin(x)

### Parameter

- `x`
  - : Eine Zahl im Bogenmaß (rad).

### Rückgabewert

Den Sinus der übergebenen Zahl.

## Beschreibung

Die `Math.sin()` Funktion gibt einen nummerischen Wert zwischen -1 und 1 zurück. Dieser repräsentiert den Sinus des Winkels.

Weil `sin()` eine statische Funktion von `Math` ist, wird es immer als `Math.sin()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.sin()`

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Spezifikationen

| Specification                                                        | Status                       | Comment                                               |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.16', 'Math.sin')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.sin', 'Math.sin')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.sin', 'Math.sin')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.sin")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
