---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---
{{JSRef}}

Die **`byteLength`** Zugriffseigenschaft repräsentiert die Länge (in Bytes) der View vom Anfang ihres {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Syntax

    dataview.byteLength

## Beschreibung

Die `byteLength` Eigenschaft ist eine Zugriffseigenschaft, bei der die set Funktion `undefined` ist. Das bedeutet, dass diese Eigenschaften nur gelesen werden kann. Der Wert der Eigenschaft wird beim erstellen einer `DataView` bekannt gemacht und kann nicht mehr verändert werden. Wenn beim erstellen kein Offset oder keine `byteLength` angegeben sind, wird der `byteLength` Wert des übergebenen `ArrayBuffer` oder `SharedArrayBuffer` zurückgegeben.

## Beispiele

### Einsatz der `byteLength` Eigenschaft

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteLength; // 8 (gleich mit byteLength von buffer)

var dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (wie beim erstellen der DataView spezifiziert)

var dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (passend mit dem Offset beim erstellen der DataView)
```

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-dataview.prototype.bytelength', 'DataView.prototype.byteLength')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-get-dataview.prototype.bytelength', 'DataView.prototype.byteLength')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView.byteLength")}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
