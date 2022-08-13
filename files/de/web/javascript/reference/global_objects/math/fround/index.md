---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/fround
---
{{JSRef}}

Die **`Math.fround()`** Funktion gibt die am nächsten gelegenen [32 Bit einfach genaue](https://de.wikipedia.org/wiki/Einfache_Genauigkeit "link to the wikipedia page on single-precision floating-point format") Repräsentation einer {{jsxref("Number")}}.

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## Syntax

    var singleFloat = Math.fround(doubleFloat)

### Parameter

- `doubleFloat`
  - : Eine {{jsxref("Number")}}. Wenn der Parameter von einem anderen Typ ist, wird dieser zu einer Zahl konvertiert oder wenn er nicht konvertiert werden kann {{jsxref("NaN")}}.

### Rückgabewert

Die am nächsten gelegenen [32 Bit einfach genaue](https://de.wikipedia.org/wiki/Einfache_Genauigkeit "link to the wikipedia page on single-precision floating-point format") Repräsentation einer Floatingpoint-Nummer, der übergebenen Zahl.

## Beschreibung

JavaScript benutzt intern 64 Bit double Gleitkommazahlen, welche eine hohe Präzision haben. Manchmal ist es gewollt mit 32 Bit Gleitkommazahlen zu arbeiten, zum Beispiel, wenn von einem von einem {{jsxref("Float32Array")}} gelesen wird. Das kann verwirrend sein: Prüfen einer 64 Bit Gleitkommazahl und einer 32 Bit Gleitkommazahl auf Gleichheit kann fehlschlagen, auch wenn sie scheinbar identisch sind.

Um das zu beheben, kann `Math.fround()` eingesetzt werden um 64 Bit Gleitkommazahlen in 32 Bit Gleitkommazahlen umzuwandeln. Intern wird JavaScript die Zahl als 64 Bit Gleitkommazahl benutzen, es wird jedoch ein "Runden zu geraden Zahlen" (round to even) an der 23. Stelle der Mantisse vorgenommen und alle folgenden Stellen der Mantisse auf `0` gesetzt. Wenn die Zahl außerhalb des 32 Bit Gleitkommazahlenbereiches liegt wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Weil `fround()` eine statische Funktion von `Math` ist, wird es immer als ` Math.``fround``() ` eingesetzt, jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.fround()`

Die Zahl 1-5 kan präzise im Binärsystem dargestellt werden und ist identisch in 32 Bit und 64 Bit:

```js
Math.fround(1.5);        // 1.5
Math.fround(1.5) === 1.5 // true
```

Die Zahl 1.337 kan nicht präzise in Binärsystem dargestellt werden und unterscheidet sich in 32 Bit und 64 Bit:

```js
Math.fround(1.337);           //1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> ist zu groß für eine 32 Bit Gleitkommazahl, weshalb `Infinity` zurückgegeben wird.

```js
2 ** 150;              // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

Wenn der Parameter nicht zu einer Zahl konvertiert werden kann, oder [keine Zahl ist (NaN)](https://de.wikipedia.org/wiki/NaN), gibt `Math.fround()` `NaN` zurück:

```js
Math.fround('abc'); // NaN
Math.fround(NaN);   // NaN
```

## Polyfill

Diese Funktion kann emuliert werden, wenn {{jsxref("Float32Array")}} verfügbar ist:

```js
Math.fround = Math.fround || (function (array) {
  return function(x) {
    return array[0] = x, array[0];
  };
})(Float32Array(1));
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.fround', 'Math.fround')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.fround', 'Math.fround')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.fround")}}

## Siehe auch

- {{jsxref("Math.round()")}}
