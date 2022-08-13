---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
---
{{JSRef}}

Die **`getInt32()`** Methode gibt eine ganze 32-Bit Zahl mit Vorzeichen (Long) vom spezifizierten Offset der {{jsxref("DataView")}} zurück.

{{EmbedInteractiveExample("pages/js/dataview-getint32.html")}}

## Syntax

    dataview.getInt32(byteOffset [, littleEndian])

### Parameter

- byteOffset
  - : Das Offset, in Bytes, vom Start der View, an dem die Daten gelesen werden sollen.
- littleEndian
  - : {{optional_inline}} Gibt an, ob die 32 Bit Zahl als {{Glossary("Endianness", "little- oder big-Endian")}} abgespeichert wird. Wenn false oder undefined angegewen ist, wird ein big-Endian gelesen.

### Rückgabewert

Eine ganze 32-Bit Zahl mit Vorzeichen

### Exceptions

- {{jsxref("RangeError")}}
  - : Tritt auf, wenn `byteOffset` so gesetzt ist, dass hinter dem Ende der View gelesen werden müsste.

## Beschreibung

Es gibt keine Einschränkung Orientierung. Werte mit mehrere Bytes können mit jedem Offset abgerufen werden.

## Beispiele

### Einsatz der `getInt32` Methode

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt32(1); // 0
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                                   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 2015.              |
| {{SpecName('ES2015', '#sec-dataview.prototype.getint32', 'DataView.prototype.getInt32')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.getint32', 'DataView.prototype.getInt32')}} | {{Spec2('ESDraft')}}     |                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.getInt32")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
