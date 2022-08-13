---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---
{{JSRef}}

Die **`byteLength`** Zugriffseigenschaft repräsentiert die Länge eines {{jsxref("ArrayBuffer")}} in Bytes.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Syntax

    arraybuffer.byteLength

## Beschreibung

Die `byteLength` Eigenschaft ist eine Zugriffseigenschaft, wessen set-Funktion `undefined` ist, was bedeutet, dass diese nur gelesen werden kann. Der Wert wird ermittelt, wenn das Array erstellt wird und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn der `ArrayBuffer` detached ist.

## Beispiele

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Spezifikationen

| Spezifikation                                                                                                                                | Status                           | Kommentar                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                                         | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.           |
| {{SpecName('ES2015', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}     | {{Spec2('ES2015')}}         | Initiale Definition im ECMA Standard. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}} | {{Spec2('ESDraft')}}     |                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
