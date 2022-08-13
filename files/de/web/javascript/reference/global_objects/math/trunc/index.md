---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/trunc
---
{{JSRef}}

Die **`Math.trunc()`** Funktion gibt den ganzzahligen Teil einer Zahl zurück, indem alle Nachkommastellen entfernt werden.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Syntax

    Math.trunc(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Den ganzzahligen Teil der übergebenen Zahl.

## Beschreibung

Im Gegensatz zu den drei `Math` Funktionen {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}} arbeitet `Math.trunc()` sehr einfach. Sie entfernt den Punkt und die Ziffern rechts davon, ohne zu beachten, ob es sich um eine positive oder negative Nummer handelt.

Beim übergeben eines Parameters wird dieser implizit in einen Nummern-Typ konvertiert.

Weil `trunc()` eine statische Funktion von `Math` ist, wird es immer als `Math.trunc()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.trunc()`

```js
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
```

## Polyfill

```js
if(!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if(!isFinite(v)) return v;

    return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);

    // returns:
    //  0        ->  0
    // -0        -> -0
    //  0.2      ->  0
    // -0.2      -> -0
    //  0.7      ->  0
    // -0.7      -> -0
    //  Infinity ->  Infinity
    // -Infinity -> -Infinity
    //  NaN      ->  NaN
    //  null     ->  0
  };
}
```

oder:

```js
if(!Math.trunc) {
  Math.trunc = function(v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  }
}
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.trunc', 'Math.trunc')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.trunc', 'Math.trunc')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.trunc")}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
