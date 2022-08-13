---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Constructor
  - DataView
  - JavaScript
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
---
{{JSRef}}

Die **`DataView`** Ansicht unterstützt eine Low-Level Schnittstelle für das Lesen und Schreiben von mehrere Zahlentypen in einem {{jsxref("ArrayBuffer")}}. Diese Ansicht ist unabhängig von den Plattform Byte-Reihenfolgen.

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Syntax

    new DataView(buffer [, byteOffset [, byteLength]])

### Parameter

- `buffer`
  - : Ein existierender {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}, welche als Speicher für das neue `DataView` Objekt dient.
- `byteOffset` {{optional_inline}}
  - : Das Offset in Bytes, welches auf das erste Byte in dem spezifizierten Buffer für die neue Ansicht referenziert. Wenn dieser Parameter nicht angegeben ist, wird das erste Byte des Buffers als Startpunkt benutzt.
- `byteLength` {{optional_inline}}
  - : Die Anzahl der Elemente in dem Byte Array. Wenn es nicht angegeben wird, wird die Länge des Buffers benutzt.

### Rückgabewert

Ein neues `DataView` Objekt welches den spezifizierten Datenpuffer (Buffer) repräsentiert.

### Exceptions

- `{{jsxref("RangeError")}}`
  - : Wird erzeugt, wenn `byteOffset` oder `byteLength` Größe als der Puffer (Buffers) sind

## Beschreibung

### Byte-Reihenfolge

Zahlenformate mit mehreren Bytes werden im Speicher verschieden dargestellt, je nachdem welche Maschinenarchitektur genutzt wird (siehe {{Glossary("Endianness")}} für weitere Erklärungen). DataView bietet explizit die Kontrolle über den Zugriff auf die Zahlen unabhängig von der Plattformarchitektur-Byte-Reihenfolge.

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array benutzt die Plattform Byte-Reihenfolge.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true oder false
```

## Eigenschaften

Alle `DataView` Instanzen erben von {{jsxref("DataView.prototype")}} und erlauben das Hinzufügen von Eigenschaften zu allen DataView Objekten

{{page('de/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Eigenschaften')}}

## Methoden

{{page('de/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Methoden')}}

## Beispiele

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                  |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------ |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Abgelöst von ECMAScript 6                  |
| {{SpecName('ES6', '#sec-dataview-constructor', 'DataView')}}     | {{Spec2('ES6')}}             | Initiale Definition in einem ECMA Standard |
| {{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView')}} | {{Spec2('ESDraft')}}     |                                            |

## Browserkompatibilität

{{Compat("javascript.builtins.DataView")}}

## Bemerkungen zur Kompatibilität

Mit dem Start von Firefox 40 wird der {{jsxref("Operators/new", "new")}} Operator benötigt um eine `DataView` zu erstellen. Der Aufruf von `DataView()` als Funktion ohne `new` erzeugt jetzt einen {{jsxref("TypeError")}}.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: Das Aufrufen des DataView-Konstruktors ohne new ist verboten
```

```js example-good
var dv = new DataView(buffer, 0);
```

## Siehe auch

- [jDataView](https://github.com/jDataView/jDataView): JavaScript-Bibliothek welche Polyfills und Erweiterungen für die `DataView` API in allen Browdern und Node.js zur verfügung stellt.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
