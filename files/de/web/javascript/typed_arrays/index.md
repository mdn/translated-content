---
title: JavaScript typed arrays
slug: Web/JavaScript/Typed_arrays
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Typed_arrays
---
{{JsSidebar("Advanced")}}Typisierte Arrays (Typed Arrays) in JavaScript sind Array-ähnliche Objekte, die den Zugriff auf binäre Rohdaten ermöglichen. {{jsxref("Array")}}-Objekte wachsen und verkleinern sich dynamisch und können jeden beliebigen JavaScript-Wert aufnehmen. JavaScript-Engines führen Optimierungen durch, damit diese Arrays schnell verarbeitet werden können. Da aber Applikationen immer mächtiger werden und neue Features wie Audio- und Videobearbeitung oder der Zugriff auf Rohdaten mit WebSockets hinzugefügt werden, gibt es Situationen, in denen es hilfreich ist diese binären Rohdaten schnell und einfach über typisierte Arrays im JavaScript-Code zu manipulieren.Typisierte Arrays sollten nicht mit den normalen Arrays verwechselt werden. Ein Aufruf von {{jsxref("Array.isArray()")}} liefert false zurück. Außerdem werden nicht alle Array-Methoden wie beispielsweise push und pop unterstützt.

## Puffer und Sichten: Architektur typisierter Arrays

Um maximale Flexibilität und Effizienz zu schaffen, spalten typisierte Arrays in JavaScript die Durchführung in **Puffer** und **Sichten.** Ein Puffer (vom {{jsxref("ArrayBuffer")}}-Objekt durchgeführt) ist ein Objekt, das eine Menge von Daten verkörpert. Dazu gehört kein echtes Format und es wird kein Mechanismus angeboten, um auf den Inhalt zuzugreifen. Um Zugang zu diesem Speicher zu schaffen, muss man eine Sicht benutzen. Eine Sicht liefert einen Kontext, der diese Daten in ein echtes, typisiertes Array umwandelt. Genauer gesagt gibt dieser Kontext einen Datentypen, einen Versatz und die Anzahl der Elemente an.

![Typed arrays in an ArrayBuffer](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

### ArrayBuffer

Der {{jsxref("ArrayBuffer")}} ist ein Datentyp, der einen generischen, binären Datenpuffer mit festgelegter Länge darstellt. Es ist nicht möglich den Inhalt dieses Puffers (ArrayBuffer) direkt zu bearbeiten; stattdessen erstellt man selbst eine Sicht durch ein typisiertes Array oder eine {{jsxref("DataView")}}. Dadurch wird der Puffer als ein spezifisches Format dargestellt, das benutzt wird, um den Inhalt des Puffers zu modifizieren und lesen.

### Sichten von typisierten Arrays

Sichten, die durch typisierte Arrays erstellt wurden, haben selbst beschreibende Namen, und bieten Sichten für alle gebräuchlichen numerischen Typen wie `Int8`, `Uint32`, ` Float64``  `usw. an. Es gibt auch eine spezielle Sicht von typisierten Arrays, nämlich das `Uint8ClampedArray`. Dieses begrenzt die Werte auf 0 bis 255, was nützlich beispielsweise für die [Datenverarbeitung einer Leinwand](/de/docs/Web/API/ImageData) ist.

{{page("/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray", "TypedArray_objects")}}

### DataView

Die {{jsxref("DataView")}} (zu deutsch "Daten-Sicht") ist ein low-level Interface, das Getter und Setter zum Lesen und Schreiben beliebiger Daten in den Buffer anbietet. Das ist beispielsweise nützlich wenn man mit verschiedenen Datentypen arbeiten muss. Sichten von typisierten Arrays sind in der nativen Byte-Reihenfolge Ihrer Plattform (siehe {{Glossary("Endianness")}}. Mit einem `DataView` können Sie die Byte-Reihenfolge kontrollieren. Standardmässig ist Big-Endian eingestellt, Sie können es in den Gettern und Settern auf Little-Endian umstellen.

## Web APIs mit typisierten Arrays

- [`FileReader.prototype.readAsArrayBuffer()`](</de/docs/Web/API/FileReader#readAsArrayBuffer()> "/en-US/docs/Web/API/FileReader#readAsArrayBuffer()")
  - : Die `FileReader.prototype.readAsArrayBuffer()` Methode liest den Inhalt aus einem gegebenen [`Blob`](/de/docs/Web/API/Blob "/en-US/docs/DOM/Blob") oder einer [`Datei`](/de/docs/Web/API/File "/de/docs/DOM/File").
- [`XMLHttpRequest.prototype.send()`](</de/docs/Web/API/XMLHttpRequest#send()>)
  - : Die `send()` Methode einer `XMLHttpRequest`-Instanz unterstützt nun Typed Arrays und {{jsxref("ArrayBuffer")}} Objekte als Argument.
- [`ImageData.data`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
  - : Ein {{jsxref("Uint8ClampedArray")}} welches die Daten in der RGBA-Reihenfolge enthält, mit Integer-Werten zwischen 0 und 255 inklusiv.

## Beispiele

### Sichten als Puffer benutzen

Als erstes muss ein Puffer erstellt werden, hier mit einer festgelegten Länge von 16 Bytes:

```js
var buffer = new ArrayBuffer(16);
```

Jetzt haben wir einen Speicherblock mit Bytes, die mit 0 vorinitialisiert sind. Darüber hinaus lässt sich nicht viel damit anstellen. Wir können überprüfen, ob er wirklich 16 Bytes lang ist, und das war's auch schon.

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich damit arbeiten können, müssen wir eine Sicht erzeugen. Wir erstellen eine Sicht, der die Daten in dem Puffer als ein Array von vorzeichenbehafteten 32-Bit-Integern sieht.

```js
var int32View = new Int32Array(buffer);
```

Jetzt können wir auf die Elemente in dem Array wie in jedem normalen Array zugreifen.

```js
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Der obige Code füllt die 4 Einträge in dem Array (4 Einträge mit je 4 Bytes ergeben 16 Bytes insgesamt) mit den Werten 0, 2, 4 und 6.

### Multiple views on the same data

Things start to get really interesting when you consider that you can create multiple views onto the same data. For example, given the code above, we can continue like this:

```js
var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}
```

Here we create a 16-bit integer view that shares the same buffer as the existing 32-bit view and we output all the values in the buffer as 16-bit integers. Now we get the output 0, 0, 2, 0, 4, 0, 6, 0.

You can go a step farther, though. Consider this:

```js
int16View[0] = 32;
console.log("Entry 0 in the 32-bit array is now " + int32View[0]);
```

The output from this is "Entry 0 in the 32-bit array is now 32". In other words, the two arrays are indeed simply views on the same data buffer, treating it as different formats. You can do this with any [view types](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects "JavaScript typed arrays/ArrayBufferView#Typed array subclasses").

### Working with complex data structures

By combining a single buffer with multiple views of different types, starting at different offsets into the buffer, you can interact with data objects containing multiple data types. This lets you, for example, interact with complex data structures from [WebGL](/de/docs/Web/WebGL "WebGL"), data files, or C structures you need to use while using [js-ctypes](/de/docs/Mozilla/js-ctypes "js-ctypes").

Consider this C structure:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

You can access a buffer containing data in this format like this:

```js
var buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
```

Then you can access, for example, the amount due with `amountDueView[0]`.

> **Note:** The [data structure alignment](http://en.wikipedia.org/wiki/Data_structure_alignment) in a C structure is platform-dependent. Take precautions and considerations for these padding differences.

### Conversion to normal arrays

After processing a typed array, it is sometimes useful to convert it back to a normal array in order to benefit from the {{jsxref("Array")}} prototype. This can done using {{jsxref("Array.from")}}, or using the following code where `Array.from` is unsupported.

```js
var typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------- |
| {{SpecName('Typed Array')}}                                                             | {{Spec2('Typed Array')}} | Abgelöst von ECMAScript 6.            |
| {{SpecName('ES6', '#sec-typedarray-objects', 'TypedArray Objects')}}     | {{Spec2('ES6')}}             | Initiale Definition im ECMA-Standard. |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} | {{Spec2('ESDraft')}}     |                                       |

## Browser compatibility

Chrome 7 includes support for `ArrayBuffer`, `Float32Array`, `Int16Array`, and `Uint8Array`. Chrome 9 and Firefox 15 add support for `DataView` objects. Internet Explorer 10 supports all types except `Uint8ClampedArray` and `ArrayBuffer.prototype.slice` which are present starting in Internet Explorer 11.

{{Compat}}

## See also

- [Getting `ArrayBuffer`s or typed arrays from _Base64_-encoded strings](/de/docs/Web/JavaScript/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [`StringView` – a C-like representation of strings based on typed arrays](/de/docs/Code_snippets/StringView "/en-US/docs/Web/JavaScript/Typed_arrays/StringView")
- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Typed Arrays: Binary Data in the Browser](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- {{Glossary("Endianness")}}
