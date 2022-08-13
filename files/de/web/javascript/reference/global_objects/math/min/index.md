---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/min
---
{{JSRef}}

Die **`Math.min()`** Funktion gibt den Wert der kleinsten übergebenen Zahl zurück oder {{jsxref("NaN")}}, wenn ein Parameter keine Zahl ist und auch nicht in eine Zahl konvertiert werden kann.

{{EmbedInteractiveExample("pages/js/math-min.html")}}

## Syntax

    Math.min([value1[, value2[, ...]]])

### Parameter

- `value1, value2, ...`
  - : Zahlen.

### Rückgabewert

Die kleinste der übergebenen Zahlen. Wenn nur ein Parameter nicht zu einer Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `min()` eine statische Eigenschaft von `Math` ist, muss immer `Math.min()` genutzt werden, ohne dass ein `Math-`Objekt erstellt wird (`Math` ist kein Konstruktor).

Ohne Übergabeparameter wird {{jsxref("Infinity")}} zurückgegeben.

Wenn mindestens ein Übergabeparameter nicht in eine Zahl konvertiert werden kann wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Einsatz von `Math.min()`

Dies findet den kleinsten Wert aus x und y und weist diesen z zu.

```js
var x = 10, y = -20;
var z = Math.min(x, y);
```

### Wert mittels `Math.min()` begrenzen

`Math.min()` wird oftmals verwendet um einen Wert so zu begrenzen, dass dieser nicht größer als ein gesetztes Limit werden kann. So kann dies

```js
var x = f(foo);

if (x > limit) {
  x = limit;
}
```

auch folgendermaßen formuliert werden

```js
var x = Math.min(f(foo), limit);
```

Analog kann {{jsxref("Math.max()")}} verwendet werden um einen Mindestwert zu realisieren.

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.12', 'Math.min')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.min', 'Math.min')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.min', 'Math.min')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.min")}}

## Siehe auch

- {{jsxref("Math.max()")}}
