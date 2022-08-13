---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/buffer
---
{{JSRef}}

Die **`buffer`** Zugriffseigenschaft repräsentiert und referenziert den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der bei der Erstellung der `DataView` übergeben wurde.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Syntax

    dataview.buffer

## Beschreibung

Die `buffer` Eigenschaft ist eine Zugriffseigenschaft, bei der die Funktion für das erneute Beschreibeiben `undefined` ist. Das bedeutet, dass die Eigenschaft nur gelesen werden kann. Der Wert wird bei der Erstellung der `DataView` festgelegt und kann nicht mehr geändert werden.

## Beispiele

### Einsatz der `buffer` Eigenschaft

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-dataview.prototype.buffer', 'DataView.prototype.buffer')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-get-dataview.prototype.buffer', 'DataView.prototype.buffer')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.buffer")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
