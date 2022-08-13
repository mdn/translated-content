---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---
{{JSRef}}

Die **`Number.MIN_SAFE_INTEGER`** Konstante repräsentiert die kleinste sicheren ganze Zahl in JavaScript (`-(253 - 1)`).

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `MIN_SAFE_INTEGER` Konstante hat einen Wert von `-` `9007199254740991` (-9.007.199.254.740.991 oder ca. -9 Billiarde). Die Bedeutung hinter dieser Zahl ist, dass in JavaScript [double-precision floating-point Zahlen](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) wie sie in [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) spezifiziert sind benutzt werden. Nach dieser Spezifikation ist die sichere Repräsentation von Zahlen nur zwischen `-(253 - 1)` und `253 - 1` möglich. Für mehr details Siehe im Artikel {{jsxref("Number.isSafeInteger()")}} nach.

Weil `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer mit `Number.MIN_SAFE_INTEGER` abgerufen, im Gegensatz zu einer Eigenschaft eines {{jsxref("Number")}} Objektes, was erstellt wurde.

## Beispiele

```js
Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.min_safe_integer', 'Number.MIN_SAFE_INTEGER')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.min_safe_integer', 'Number.MIN_SAFE_INTEGER')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.MIN_SAFE_INTEGER")}}

## Siehe auch

- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
