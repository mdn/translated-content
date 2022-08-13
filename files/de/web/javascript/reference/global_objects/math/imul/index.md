---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/imul
---
{{JSRef}}

Die **`Math.imul()`** Funktion führt eine C ähnliche 32-Bit Multiplikation der zwei Parameter durch.

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## Syntax

    Math.imul(a, b)

### Parameter

- `a`
  - : Erste Nummer.
- `b`
  - : Zweite Nummer.

### Rückgabewert

Das Resultat der C-ähnlichen 32-Bit Multiplikation der übergebenen Parameter.

## Beschreibung

`Math.imul()` erlaubt es schnelle 32-Bit Ganzzahlmultiplikationen mit C ähnlicher Semantik durchzuführen. Diese Funktion ist nützlich für Projekte wie [Emscripten](http://en.wikipedia.org/wiki/Emscripten). Weil `imul()` eine statische Methode von `Math` ist, muss man immer `Math.imul()` benutzen und nicht als Methode eines `Math` Objektes, das man erzeugt (`Math` ist kein Konstruktor). Wenn normale JavaScript Gleitkommazahlen in `imul` eingesetzt werden, wird die Performance beeinträchtigt. Das ist wegen der Umwandlung von Gleitkommazahlen zu ganzen Zahlen für die Multiplikation und die anschließende Rückkonvertierung des Ergebnisses in eine Gleitkommazahl. Der Grund warum `imul` existiert, ist, dass esin (nur) einem Fall schneller ist: AsmJS. AsmJS erlaubt JIST-Optimierungen für einfache Implementierung von ganzen Zahlen in JavaScript. Multiplizieren von zwei Zahlen mit `imul`, die intern als Integer dargestellt sind (was nur mit AsmJS funktioniert) ist der einzige Grund, wo `Math.imul` die Performance im Browsern steigern kann.

## Beispiele

### Einsatz von `Math.imul()`

```js
Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Polyfill

Diese Funktionalität kann durch folgende Funktion emuliert werden:

```js
Math.imul = Math.imul || function(a, b) {
  var aHi = (a >>> 16) & 0xffff;
  var aLo = a & 0xffff;
  var bHi = (b >>> 16) & 0xffff;
  var bLo = b & 0xffff;
  // the shift by 0 fixes the sign on the high part
  // the final |0 converts the unsigned value into a signed value
  return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) << 16) >>> 0) | 0);
};
```

## Spezifikationen

| Specification                                                            | Status                       | Comment             |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-math.imul', 'Math.imul')}}     | {{Spec2('ES6')}}         | Initial definition. |
| {{SpecName('ESDraft', '#sec-math.imul', 'Math.imul')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.imul")}}
