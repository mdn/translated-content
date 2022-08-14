---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
tags:
  - ArrayBuffer
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---
{{JSRef}}

Die **`slice()`** Methode gibt einen neuen `ArrayBuffer` zurück, wessen Inhalt eine Kopie der `ArrayBuffer` Bytes von `begin` (inklusiv) bis `end` (exklusiv) ist.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## Syntax

    arraybuffer.slice(begin[, end])

### Parameter

- `begin`
  - : 0-basierter Byteindex an welchem slice `slice` mit dem zuschneiden beginnt.

<!---->

- `end`
  - : Byteindex bevor `slice` das zuschneiden beendet. Wenn end nicht angegeben ist, wird der neue `ArrayBuffer` alle Bytes von `begin` des `ArrayBuffer` enthalten. Der durch die Anfangs- und Endwerte angegebene Bereich wird an den gültigen Indexbereich für das aktuelle Array gebunden. Wenn die berechnete Länge des neuen ArrayBuffers negativ wäre, wird er auf 0 gesetzt.

### Rückgabewert

Ein neues `ArrayBuffer` Objekt.

## Beschreibung

Die `slice` Methode kopiert bis zum Byteindex `end` Parameter, der nicht enthalten ist. Wenn `begin` oder `end` negativ ist, referenziert dieser zum Index vom Ende der Array, im Gegensatz zum Anfang des Arrays

## Beispiele

### Einen `ArrayBuffer` kopieren

```js
var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                             |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Ersetzt in EMCAScript 6.              |
| {{SpecName('ES6', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}     | {{Spec2('ES6')}}             | Initiale Definition im ECMA Standard. |
| {{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}} | {{Spec2('ESDraft')}}     |                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.ArrayBuffer.slice")}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
