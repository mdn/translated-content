---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---
{{JSRef}}

Die **`byteOffset`** Zugriffseigenschaft repräsentiert das Offset (in Bytes) der View vom Anfang ihres {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

## Syntax

    dataview.byteOffset

## Beschreibung

Die `byteOffset` Eigenschaft ist eine Zugriffseigenschaft, bei der die set Funktion `undefined` ist. Das bedeutet, dass diese Eigenschaften nur gelesen werden kann. Der Wert der Eigenschaft wird beim erstellen einer `DataView` bekannt gemacht und kann nicht mehr verändert werden.

## Beispiele

### Einsatz der `byteOffset` Eigenschaft

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

var dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)
```

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-dataview.prototype.byteoffset', 'DataView.prototype.byteOffset')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-get-dataview.prototype.byteoffset', 'DataView.prototype.byteOffset')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.byteOffset")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
