---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atan2
---
{{JSRef}}

`Die Funktion `**`Math.atan2()`** gibt den Arkustangens (im Radiantenmaß) des Quotienten der Parameter zurück.

{{EmbedInteractiveExample("pages/js/math-atan2.html")}}

## Syntax

    Math.atan2(y, x)

### Parameter

- `y`
  - : Eine Zahl.
- `x`
  - : Eine zweite Zahl.

### Rückgabewert

Der Arkustangens des Quotienten der übergebenen Parameter.

## Beschreibung

Die `Math.atan2()` Methode gibt einen numerischen Wert zwischen -π und π zurück, welcher den Winkel Theta eines `(x, y)` Punktes wiedergibt. Dies ist der Radius entgegen dem Uhrzeigersinn, gemessen in Radianten, zwischen der positiven x Achse, und des Punktes `(x, y)`. Beachte, dass bei der Funktion der erste Parameter die y Koordinate und der zweite die x Koordinate ist.

![Ein einfaches Diagramm welches den zurückgegebenen Winkel von atan2(y, x) zeigt](https://mdn.mozillademos.org/files/11557/atan2.png)

Bei `Math.atan2()` wird `x` und `y` separat übergeben, bei `Math.atan()` hingegen wird das Verhältnis der zwei Parameter übergeben.

Weil `atan2()` eine statische Methode von Math ist, muss diese immer mit `Math.atan2()` genutzt werden, ohne dass ein Objekt von Math erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### `Verwendung von Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.5', 'Math.atan2')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.atan2', 'Math.atan2')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.atan2', 'Math.atan2')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.atan2")}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
