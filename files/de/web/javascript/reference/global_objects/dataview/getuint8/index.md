---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
---
{{JSRef}}Die **`getUint8()`** Methode gibt eine ganze vorzeichenlose 8-Bit Zahl (Unsigned Byte) vom spezifizierten Offset der {{jsxref("DataView")}} zurück.{{EmbedInteractiveExample("pages/js/dataview-getuint8.html")}}

## Syntax

    dataview.getUint8(byteOffset)

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gelesen werden sollen.

### Rückgabewert

Eine vorzeichenlose ganze 8-Bit Zahl

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View gelesen werden müsste.

## Beschreibung

Es gibt keine Einschränkung Orientierung. Werte mit mehrere Bytes können mit jedem Offset abgerufen werden.

## Beispiele

### Einsatz der `getUint8` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint8(1); // 0
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                                   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.getuint8', 'DataView.prototype.getUint8')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.getuint8', 'DataView.prototype.getUint8')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.getUint8")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
