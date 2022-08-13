---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
tags:
  - Constructor
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Float64Array
---
{{JSRef}}

Das **`Float64Array`** getypte Array repräsentiert ein Array von 64 Bit Gleitkommazahlen (entspricht dem C Datentyp `double`) in der Plattform-Byte-Reihenfolge. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, muss stattdessen {{jsxref("DataView")}} benutz werden. Die Inhalte werden mit `0` initialisiert. Wie erwartet, kann man Elemente in einem Array mit Objektmethoden referenzieren oder man benutzt die normale Array-Index-Syntax (das ist die Klammernotation).

## Syntax

    new Float64Array(); // new in ES2017
    new Float64Array(length);
    new Float64Array(typedArray);
    new Float64Array(object);
    new Float64Array(buffer [, byteOffset [, length]]);

Für mehr Informationen über die Konstruktorensyntax und die Parameter, siehe auf der Seite _[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Eigenschaften

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe der Elemente zurück. `8` im Falle eines `Float64Array`.
- Float64Array.length
  - : Statische Längeneigenschaft, welche den Wert 0 hat. Für die aktuelle Länge (Anzahl der Elemente) siehe {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float64Array.name")}}
  - : Gibt den Stringwert des Konstruktornamens zurück. In Fall eines `Float64Array` Typs: `"Float64Array"`.
- {{jsxref("TypedArray.prototype", "Float64Array.prototype")}}
  - : Prototyp für das _TypedArray_ Objekt

## Methoden

- {{jsxref("TypedArray.from", "Float64Array.from()")}}
  - : Erstellt ein neues `Float64Array` von einem Array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float64Array.of()")}}
  - : Erstellt ein neues `Float64Array` mit einer variablen Anzahl an Argumenten. Sie auch {{jsxref("Array.of()")}}.

## `Float64Array` Prototyp

Alle `Float64Array` Objekte erben von {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Eigenschaften

- `Float64Array.prototype.constructor`
  - : Gibt die Funktion, die einen Instanzprototyp erstellt, zurück. Diese ist auf den `Float64Array` Konstruktor voreingestellt.
- {{jsxref("TypedArray.prototype.buffer", "Float64Array.prototype.buffer")}} {{readonlyInline}}
  - : Gibt die {{jsxref("ArrayBuffer")}} Referenz zurück, welche nach der Erstellung eines `Float64Array` fest ist und nicht mehr geändert werden kann.
- {{jsxref("TypedArray.prototype.byteLength", "Float64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Gibt die Länge (in Bytes) des `Float64Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. Wird beim Erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.byteOffset", "Float64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Gibt das Offset (in Bytes) des `Float64Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. Wird beim Erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}} {{readonlyInline}}
  - : Gibt die Anzahl der Elemente des `Float64Array` zurück. Wird beim Erstellen festgesetzt und kann nicht geändert werden.

### Methoden

- {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Arrayelementen in das Array. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float64Array.prototype.entries()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Schlüssel/Wertepaare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float64Array.prototype.every()")}}
  - : Teste, ob alle Elemente einem, als Funktion übergebenen, Test erfüllen. Siehe auch Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float64Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float64Array.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen des alten Arrays, für die eine übergebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float64Array.prototype.find()")}}
  - : Gibt ein gefundenes Element des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `undefined` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float64Array.prototype.findIndex()")}}
  - : Gibt den Index eines gefundenen Elements des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float64Array.prototype.forEach()")}}
  - : Ruft für jedes Element in einem Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float64Array.prototype.includes()")}} {{experimental_inline}}
  - : Überprüft, ob ein getyptes Array ein bestimmtes Element enthält und gibt gegebenfalls `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float64Array.prototype.indexOf()")}}
  - : Gibt den ersten Index eines Elementes zurück, welches kongruent eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float64Array.prototype.join()")}}
  - : Führt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float64Array.prototype.keys()")}}
  - : Gibt ein neuen `Array Iterator` zurück, der alle Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float64Array.prototype.lastIndexOf()")}}
  - : Gibt den letzen Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float64Array.prototype.map()")}}
  - : Erstellt ein neues Array mit den Resultaten einer für jedes Element aufgerufenen Funtion. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float64Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ehemalige, nicht standardisierte Version von {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float64Array.prototype.reduce()")}}
  - : Führt eine Funktion gegen einen Akkumulator und jeden Wert des Array aus (von links nach rechts), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float64Array.prototype.reduceRight()")}}
  - : Führt eine Funktion gegen einen Akkumulator und jeden Wert des Array aus (von rechts nach links), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reverse", "Float64Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge von jedem Element eines Arrays um — das Erste wird das Letzte und das Letzte wird das Erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float64Array.prototype.set()")}}
  - : Speichert mehrere Werte in einem getypten Array und liest Eingabewerte aus einem spezifiziertem Array.
- {{jsxref("TypedArray.slice", "Float64Array.prototype.slice()")}}
  - : Extrahiert einen Bereich aus einem Array und gibt diesen in einem neuen Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float64Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn nur ein Element in einem Array, den als Funktion übergebenen, Test erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Float64Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-Place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float64Array.prototype.subarray()")}}
  - : Gibt ein neues `Float64Array` vom gegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.values", "Float64Array.prototype.values()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Werte von jedem Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float64Array.prototype.toLocaleString()")}}
  - : Gibt eine ortsabhängige Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float64Array.prototype.toString()")}}
  - : Gibt eine Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float64Array.prototype[@@iterator]()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die zugehörigen Werte für jeden Index im Array enthalten.

## Beispiele

Verschiedene Wege, um ein `Float64Array` zu erstellen:

```js
// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                                                                                                   |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.                                                                                                                 |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA Standard. Spezifiziert, dass ein `new` benötigt wird.                                                     |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 ändert den `Float64Array` Konstruktor, um die `ToIndex` Operation zu benutzen und erlaubt einen Konstruktor ohne Parameter. |

## Browserkompatibilität

{{Compat("javascript.builtins.Float64Array")}}

## Kompatibilitätshinweise

Mit Beginn von ECMAScript 2015, müssen `Float64Array` Konstruktoren mit einem {{jsxref("Operators/new", "new")}} benutzt werden. Der Aufruf eines `Float64Array` Konstruktors als eine Funktion ohne `new` führt jetzt zu einem {{jsxref("TypeError")}}.

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## See also

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
