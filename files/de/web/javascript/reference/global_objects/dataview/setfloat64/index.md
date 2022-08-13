---
title: DataView.prototype.setFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
---
{{JSRef}}

Die **`setFloat64()`** Methode speichert eine 64-Bit Gleitkommazahl mit Vorzeichen (Float) am spezifizierten Offset der {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setfloat64.html")}}

## Syntax

    dataview.setFloat64(byteOffset, value [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gespeichert werden sollen.

- value
  - : Der Wert, der gespeichert werden soll.
- littleEndian
  - : {{optional_inline}} Gibt an, ob die 64 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View geschrieben werden müsste.

## Beispiele

### Einsatz der `setFloat64` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat64(0, 3);
dataview.getFloat64(0); // 3
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                           | Kommentar                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                         | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.setfloat64', 'DataView.prototype.setFloat64')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setfloat64', 'DataView.prototype.setFloat64')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.setFloat64")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
