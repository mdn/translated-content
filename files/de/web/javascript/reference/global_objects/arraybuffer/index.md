---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
tags:
  - ArrayBuffer
  - Constructor
  - JavaScript
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---
{{JSRef}}

Das **`ArrayBuffer`** Objekt repräsentiert einen generischen Buffer mit fester Länge. Der Inhalt eines `ArrayBuffer`s kann nicht direkt bearbeitet werden; stattdessen wird eines der [typisierten Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder ein {{jsxref("DataView")}} Objekt verwendet, welches den Buffer in einem bestimmten Format repräsentiert und von welchem aus sein Inhalt bearbeitet werden kann.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html")}}

## Syntax

    new ArrayBuffer(length)

### Parameter

- length
  - : Die Größe, in Bytes, des zu erstellenden `ArrayBuffer`.

### Rückgabewert

Ein neues `ArrayBuffer`Objekt der angegebenen Länge. Der Inhalt wird auf 0 initialisiert.

### Ausnahmen

Ein {{jsxref("RangeError")}} wird erhoben wenn die Länge größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) oder negativ ist.

## Beschreibung

Der `ArrayBuffer` Konstruktor erstellt einen neuen `ArrayBuffer`der angegebenen Länge in Bytes.

### Einen ArrayBuffer von existierenden Daten erstellen

- [Von einem Base64-String](/de/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [Von einer lokalen Datei](</de/docs/Web/API/FileReader#readAsArrayBuffer()>)

## Eigenschaften

- `ArrayBuffer.length`
  - : Der Wert des `ArrayBuffer` Konstruktors für die Länge.
- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : Die Konstruktor-Funktion um abgeleitete Objekte zu erstellen.
- {{jsxref("ArrayBuffer.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zu allen `ArrayBuffer`Objekten.

## Methoden

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : Gibt `true` zurück wenn `arg` eines der Views des `ArrayBuffers`ist, wie zum Beispiel die [typisierten Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)e oder ein {{jsxref("DataView")}}. Ansonsten wird `false` zurückgegeben.
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(oldBuffer [, newByteLength])")}} {{experimental_inline}}
  - : Gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt von den Daten des `oldBuffer`s genommen wird und dann entweder abgeschnitten oder mit Null auf `newByteLength` erweitert wird.

## Instanzen

Alle `ArrayBuffer` Instanzen erben von {{jsxref("ArrayBuffer.prototype")}}.

### Eigenschaften

{{page('de/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','Eigenschaften')}}

### Methoden

{{page('de/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','Methoden')}}

- {{jsxref("ArrayBuffer.slice()")}} {{non-standard_inline}}
  - : Hat die selbe Funktion wie {{jsxref("ArrayBuffer.prototype.slice()")}}.

## Beispiel

In diesem Beispiel erstellen wir einen 8-byte Puffer mit einem {{jsxref("Global_Objects/Int32Array", "Int32Array")}} View, um auf den Puffer zu verweisen:

```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar                                                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                         | {{Spec2('Typed Array')}} | Ersetzt durch ECMAScript 6.                                                   |
| {{SpecName('ES6', '#sec-arraybuffer-constructor', 'ArrayBuffer')}}     | {{Spec2('ES6')}}             | Initiale Definition im ECMA Standard. Spezifiziert, dass `new` benötigt wird. |
| {{SpecName('ESDraft', '#sec-arraybuffer-constructor', 'ArrayBuffer')}} | {{Spec2('ESDraft')}}     |                                                                               |

## Browserkompatibilität

{{Compat("javascript.builtins.ArrayBuffer")}}

## Kompatibilitätshinweis

Seit ECMAScript 2015 müssen `ArrayBuffer` Konstruktor mit einem {{jsxref("Operators/new", "new")}} Operator konstruiert werden. Einen `ArrayBuffer` Konstruktor als Funktion aufzurufen ohne `new` ab sofort einen {{jsxref("TypeError")}} erheben.

```js example-bad
var dv = ArrayBuffer(10);
// TypeError: Einen eingebauten ArrayBuffer-Konstruktor
// ohne new aufzurufen ist nicht erlaubt.
```

```js example-good
var dv = new ArrayBuffer(10);
```

## Siehe auch

- [JavaScript typed arrays](/de/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
