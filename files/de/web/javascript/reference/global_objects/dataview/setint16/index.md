---
title: DataView.prototype.setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
---
{{JSRef}}

Die **`setInt16()`** Methode speichert eine ganze 16-Bit Zahl mit Vorzeichen (Schort) am spezifizierten Offset der {{jsxref("DataView")}} ab.

{{EmbedInteractiveExample("pages/js/dataview-setint16.html")}}

## Syntax

    dataview.setInt16(byteOffset, value [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gespeichert werden sollen.

<!---->

- value
  - : Der Wert, der gespeichert werden soll.

<!---->

- littleEndian
  - : {{optional_inline}} Gibt an, ob die 16 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

{{jsxref("undefined")}}.

### Auftretende Errors

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View geschrieben werden müsste.

## Beispiele

### Einsatz der `setInt16` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt16(1, 3);
dataview.getInt16(1); // 3
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                                   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.setint16', 'DataView.prototype.setInt16')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setint16', 'DataView.prototype.setInt16')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.setInt16")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
