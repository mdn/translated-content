---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/max
---
{{JSRef}}

Die Funktion **`Math.max()`** gibt die größte von 0 oder mehr Zahlen zurück.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Syntax

    Math.max([wert1[, wert2[, ...]]])

### Parameter

- `wert1, wert2, ...`
  - : Zahlen.

### Rückgabewert

Die größte der übergebenen Zahlen. Wenn mindestens ein Parameter nicht zu einer Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Weil `max()` eine statische Methode von `Math` ist, kann nur `Math.max()` verwendet werden. Eine Verwendung mit Math als instanziertem Objekt ist nicht möglich (`Math` ist kein constructor).

Wenn keine Argumente übergeben wurden ist der Rückgabewert -{{jsxref("Infinity")}}.

Wenn mindestens eines der Argumente nicht in eine Zahl umgewandelt werden kann, ist der Rückgabewert {{jsxref("NaN")}}.

## Beispiele

### Einsatz von `Math.max()`

```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

#### Das größte Element in einem Array ermitteln

{{jsxref("Array.prototype.reduce", "Array.reduce()")}} kann ebenfalls benutzt werden, um das Maximum eines Arrays zu erhalten, indem jeder Wert verglichen wird.

```js
var arr = [1, 2, 3];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);
```

Die folgende Funktion benutzt {{jsxref("Function.prototype.apply()")}}, um den maximalen Wert eines numerischen Arrays zu finden. `getMaxOfArray([1, 2, 3])` entspricht `Math.max(1, 2, 3)`, aber `getMaxOfArray()` kann programmatisch erstellte Arrays jeder Art annehmen.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

Alternativ ist es mit dem neuen {{jsxref("Operators/Spread_operator", "spread Operator")}} viel einfacher, den maximalen Wert eines Arrays herauszufinden.

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

Bei dem Einsatz des {{jsxref("Operators/Spread_operator", "spread Operator")}} oder `apply` kann der Aufruf fehlschlagen oder ein ungültiges Ergebnis herauskommen, wenn das Array zu viele Elemente hat. Das liegt daran, dass versucht wird die Elemente des Arrays als Parameter einer Funktion zu übergeben. Siehe für mehr Details im Abschnitt [Einsatz von `apply` und standard Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Using_apply_and_built-in_functions) nach. Die `reduce` Lösung hat dieses Problem nicht.

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. In JavaScript 1.0 implementiert. |
| {{SpecName('ES5.1', '#sec-15.8.2.11', 'Math.max')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.max', 'Math.max')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.max', 'Math.max')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.max")}}

## Siehe auch

- {{jsxref("Math.min()")}}
