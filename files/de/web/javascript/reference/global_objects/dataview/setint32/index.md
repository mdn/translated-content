---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
---
{{JSRef}}

Die **`setInt32()`** Methode speichert eine ganze 32-Bit Zahl mit Vorzeichen (Long) am spezifizierten Offset der {{jsxref("DataView")}} ab.

{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}

## Syntax

    dataview.setInt32(byteOffset, value [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gespeichert werden sollen.

<!---->

- value
  - : Der Wert, der gespeichert werden soll.

<!---->

- littleEndian
  - : {{optional_inline}} Gibt an, ob die 32 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View geschrieben werden müsste.

## Beispiele

### Einsatz der `setInt32` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt32(1, 3);
dataview.getInt32(1); // 3
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                                   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.setint32', 'DataView.prototype.setInt32')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setint32', 'DataView.prototype.setInt32')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.setInt32")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
