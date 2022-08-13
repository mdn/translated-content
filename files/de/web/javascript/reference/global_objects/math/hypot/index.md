---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/hypot
---
{{JSRef}}

Die **`Math.hypot()`** Funktion gibt die Quadratwurzel von der Summe der quadrierten Argumente zurück. Das bedeutet

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)} = \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Syntax

    Math.hypot([value1[, value2[, ...]]])

### Parameter

- `value1, value2, ...`
  - : Zahlen.

### Rückgabewert

Die Quadratwurzel der Summe der quadrierten übergebenen Parameter. Wenn ein Parameter nicht in eine Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Das Berechnen der Hypotenuse eines rechtwinkligen Dreiecks oder die Größe einer komplexen Zahl verwendet die Formel `Math.sqrt (v1 * v1 + v2 * v2)`, wobei v1 und v2 entweder die Seiten des Dreiecks oder die reellen und komplexen Werte sind. Zum Berechnen der Entfernung in 2 oder mehr Dimensionen fügt man einfach weitere Quadrate innerhalb des Quadratwurzelzeichens ein, wie z. B. `Math.sqrt (v1 * v1 + v2 * v2 + v3 * v3 + v4 * v4)`.

Diese Funktion macht es ein bisschen einfacher und schneller, man kann einfach `Math.hypot(v1, v2)` , or `Math.hypot(v1, v2, v3, v4, ...)` aufrufen.

Sie vermeidet zudem ein Problem, wenn Zahlen sehr groß werden. Die größte Zahl, die in JavaScript dargestellt werden kann ist `Number.MAX_VALUE = 1.797...e+308`. Wenn die Zahlen größer als `1e154` sind, wird das Quadrieren dieser zu dem ergebnis `Infinity` führen und das Ergebnis zerstören. Zum Beispiel: `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Wenn `hypot()` stattdessen benutzt wird bekommt man ein gutes Ergebnis: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Diese gilt auch für sehr kleine Zahlen. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, wohingegen ` Math.hypot(1e-200, 1e-200) =``1.4142...e-200 ` eine gute Lösung ist.

Weil `hypot()` eine statische Funktion von `Math` ist, wird es immer als `Math.hypot()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

Wenn kein Argument übergeben wird, ist das Ergebnis `+0`.

Wenn einer der übergebenen Parameter nicht zu einer Zahl konvertiert werden kann, ist das Ergebnis {{jsxref("NaN")}}.

Wenn nur ein Argument übergeben wird, so sind die Ergebnisse der Funktionen `Math.hypot()` und {{jsxref("Math.abs()")}} gleich.

## Beispiele

### Einsatz von `Math.hypot()`

```js
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN, +'foo' => NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755, +'5' => 5
Math.hypot(-3);          // 3, das gleiche wie Math.abs(-3)
```

## Polyfill

Diese Funktion kann folgendermaßen emuliert werden:

```js
Math.hypot = Math.hypot || function() {
  var y = 0, i = arguments.length;
  while (i--) y += arguments[i] * arguments[i];
  return Math.sqrt(y);
};
```

Ein Polyfill der Underflows und Overflows vermeidet:

```js
Math.hypot = function (x, y) {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
  var max = 0;
  var s = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg > max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
};
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.hypot', 'Math.hypot')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.hypot', 'Math.hypot')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.hypot")}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
