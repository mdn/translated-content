---
title: DataView.prototype.setFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setFloat32
---
{{JSRef}}

Die **`setFloat32()`** Methode speichert eine 32-Bit Gleitkommazahl mit Vorzeichen (Float) am spezifizierten Offset der {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setfloat32.html")}}

## Syntax

    dataview.setFloat32(byteOffset, value [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gespeichert werden sollen.

<!---->

- value
  - : Der Wert, der gespeichert werden soll.
- littleEndian
  - : {{optional_inline}} Gibt an, ob die 32 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View geschrieben werden müsste.

## Beispiele

### Einsatz der `setFloat32` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat32(1, 3);
dataview.getFloat32(1); // 3
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                           | Kommentar                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                         | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.setfloat32', 'DataView.prototype.setFloat32')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setfloat32', 'DataView.prototype.setFloat32')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.setFloat32")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
