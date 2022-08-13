---
title: DataView.prototype.getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
---
{{JSRef}}

Die **`getFloat32()`** Methode gibt eine 32-Bit Gleitkommazahl mit Vorzeichen (Float) vom spezifizierten Offset der {{jsxref("DataView")}} zurück.

{{EmbedInteractiveExample("pages/js/dataview-getfloat32.html")}}

## Syntax

    dataview.getFloat32(byteOffset [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gelesen werden sollen.
- littleEndian
  - : {{optional_inline}} Gibt an, ob die 32 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

Eine 32-Bit Gleitkommazahl mit Vorzeichen.

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View gelesen werden müsste.

## Beschreibung

Es gibt keine Einschränkung Orientierung. Werte mit mehrere Bytes können mit jedem Offset abgerufen werden.

## Beispiele

### Einsatz der `getFloat32` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat32(1); // 0
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                           | Kommentar                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                         | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.getfloat32', 'DataView.prototype.getFloat32')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.getfloat32', 'DataView.prototype.getFloat32')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.getFloat32")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
