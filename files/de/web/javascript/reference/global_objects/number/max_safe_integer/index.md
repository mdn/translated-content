---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---
{{JSRef}}

Die **`Number.MAX_SAFE_INTEGER`** Konstante repräsentiert die größte, sichere, ganze Zahl in JavaScript (`253 - 1`).

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `MAX_SAFE_INTEGER` Konstante hat einen Wert von `9007199254740991` (9.007.199.254.740.991 oder ca. 9 Billiarde). Die Bedeutung hinter dieser Zahl ist, dass in JavaScript [double-precision floating-point Zahlen](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) wie sie in [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) spezifiziert sind benutzt werden. Nach dieser Spezifikation ist die sichere Repräsentation von Zahlen nur zwischen `-(253 - 1)` und `253 - 1` möglich.

Sicher heißt in diesem Kontext, dass es möglich ist ganze Zahlen exakt zu repräsentieren und sie korrekt zu vergleichen. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` zu `true` ausgewertet, was mathematisch nicht richtig ist. Weiter Informationen sind im Artikel {{jsxref("Number.isSafeInteger()")}} zu finden.

Weil `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer mit `Number.MAX_SAFE_INTEGER` abgerufen, im Gegensatz zu einer Eigenschaft eines {{jsxref("Number")}} Objektes, was erstellt wurde.

## Beispiele

```js
Number.MAX_SAFE_INTEGER // 9007199254740991
Math.pow(2, 53) - 1     // 9007199254740991
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.MAX_SAFE_INTEGER")}}

## Siehe auch

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
