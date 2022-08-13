---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
tags:
  - ArrayBuffer
  - JavaScript
  - Property
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
---
{{JSRef}}

Die **`ArrayBuffer[@@species]`** Zugriffseigenschaft gibt den Konstruktor des `ArrayBuffer `zurück.

## Syntax

    ArrayBuffer[Symbol.species]

## Beschreibung

Die `species` Zugriffseigenschaft gibt den Standard-Konstruktor für `ArrayBuffer` Objekte zurück. Konstruktoren von Unterklassen überschreiben dieses, um die Konstruktorzuweisung zu ändern.

## Beispiele

Die `species` Eigenschaft gibt die Standard-Konstruktorfunktion zurück, welche der `ArrayBuffer` Konstruktor für `ArrayBuffer` Objekte ist:

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

In einem abgeleiteten Collection Objket (z. B. ein benutzerdefinierter Buffer `MyArrayBuffer`), ist der `MyArrayBuffer` species der `MyArrayBuffer` Konstruktor. Immer, wenn dieser überschrieben werden soll, um zum Beispiel das Eltern `ArrayBuffer` Objekt in der abgeleiteten Klassenmethode zurückzugeben:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.ArrayBuffer.@@species")}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
