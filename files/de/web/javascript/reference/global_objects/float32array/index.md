---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
tags:
  - Constructor
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Float32Array
---
{{JSRef}}

Das **`Float32Array`** getypte Array repräsentiert ein Array von 32 Bit Gleitkommazahlen (entspricht dem C Datengyp `float`) in der Plattform-Byte-Reihenfolge. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, muss {{jsxref("DataView")}} stattdessen benutz werden. Die Inhalte werden mit `0` initialisiert. Wie erwartet, kann man Element in einem Array mit Objektmethoden referenzieren oder man benutzt die normale Arrayindex-Syntax (das ist die Klammernotation).

## Syntax

    new Float32Array(); // new in ES2017
    new Float32Array(length);
    new Float32Array(typedArray);
    new Float32Array(object);
    new Float32Array(buffer [, byteOffset [, length]]);

Für mehr Informationen über die Konstruktorensyntax und die Parameter, siehe auf der Seite _[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Eigenschaften

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe der Elemente zurück. `4` im Falle eines `Float32Array`.
- Float32Array.length
  - : Statische Längeneigenschaft welche den Wert 0 hat. Für die aktuelle Länge (Anzahl der Elemente) siehe {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float32Array.name")}}
  - : Gibt den Stringwert des Konstruktornamens zurück. In Fall eines `Float32Array` Typs: `"Float32Array"`.
- {{jsxref("TypedArray.prototype", "Float32Array.prototype")}}
  - : Prototyp für das _TypedArray_ Objekt.

## Methoden

- {{jsxref("TypedArray.from", "Float32Array.from()")}}
  - : Erstelle ein neues `Float32Array` von einem Array-Ähnlichen oder Iterable Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float32Array.of()")}}
  - : Erstellt ein neues `Float32Array` mit einer variablen Anzahl an Argumenten. Sie auch {{jsxref("Array.of()")}}.

## `Float32Array` Prototyp

Alle `Float32Array` Objekte erben von {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Eigenschaften

- `Float32Array.prototype.constructor`
  - : Gibt die Funktion, die einen Instanzprototyp erstellt zurück. Diese ist auf den `Float32Array` Konstruktor voreingestellt.
- {{jsxref("TypedArray.prototype.buffer", "Float32Array.prototype.buffer")}} {{readonlyInline}}
  - : Gibt die {{jsxref("ArrayBuffer")}} Referenz zurück, welche nach der Erstellung eines `Float32Array` fest ist und nicht mehr geändert werden kann.
- {{jsxref("TypedArray.prototype.byteLength", "Float32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Gibt die Länge (in Bytes) des `Float32Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.byteOffset", "Float32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Gibt das Offset (in Bytes) des `Float32Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}} {{readonlyInline}}
  - : Gibt Anzahl der Elemente des `Float32Array` zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.

### Methoden

- {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Arrayelementen in das Array. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float32Array.prototype.entries()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Schlüssel/Wertepaare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float32Array.prototype.every()")}}
  - : Teste, ob alle Elemente einem, als Funktion übergebenen, Test erfüllen. Siehe auch Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float32Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float32Array.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen des alten Arrays, für die eine übergebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float32Array.prototype.find()")}}
  - : Gibt ein gefundenes Element des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `undefined` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float32Array.prototype.findIndex()")}}
  - : Gibt den Index eines gefundenen Elements des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float32Array.prototype.forEach()")}}
  - : Ruft für jedes Element in einem Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float32Array.prototype.includes()")}} {{experimental_inline}}
  - : Überprüft, ob ein getyptes Array ein bestimmtes Element enthält und gibt gegebenfalls `true` oder`false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float32Array.prototype.indexOf()")}}
  - : Gibt den ersten Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float32Array.prototype.join()")}}
  - : Führt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float32Array.prototype.keys()")}}
  - : Gibt ein neuen `Array Iterator` zurück, der alle Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float32Array.prototype.lastIndexOf()")}}
  - : Gibt den letzen Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float32Array.prototype.map()")}}
  - : Erstellt ein neues Array mit den Resultaten spezifizierten Funktion, die für jedes Element aufgerufen wird. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ehemalige nicht Standardisierte Version von {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float32Array.prototype.reduce()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von links nach rechts), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float32Array.prototype.reduceRight()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von rechts nach links), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reverse", "Float32Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge von jedem Element eines Arrays um — das Erste wird das Letzte und das Letzte wird das Erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float32Array.prototype.set()")}}
  - : Speichert mehrere Werte in einem getypten Array und ließt Eingabewerte aus einem spezifiziertem Array.
- {{jsxref("TypedArray.slice", "Float32Array.prototype.slice()")}}
  - : Extrahiert einen Bereich aus einem Array und gibt diesen in einem neuen Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float32Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn nur ein Element in einem Array den als Funktion übergebenen Test erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Float32Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-Place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float32Array.prototype.subarray()")}}
  - : Gibt ein neues `Float32Array` vom gegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.values", "Float32Array.prototype.values()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Werte von jedem Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float32Array.prototype.toLocaleString()")}}
  - : Gibt einen Ortsabhängige Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float32Array.prototype.toString()")}}
  - : Gibt einen Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float32Array.prototype[@@iterator]()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die zugehörigen Werte für jeden Index im Array enthalten.

## Beispiele

Verschiedene Wege, um ein `Float32Array` zu erstellen:

```js
// From a length
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Float32Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var float32 = new Float32Array(iterable);
// Float32Array[1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                                                                                                   |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.                                                                                                                 |
| {{SpecName('ES6', '#table-49', 'TypedArray constructors')}}     | {{Spec2('ES6')}}             | Initiale Definition in einem ECMA Standard. Spezifiziert, dass ein `new` benötigt wird.                                                     |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 ändert den `Float32Array` Konstruktor, um die `ToIndex` Operation zu benutzen und erlaubt einen Konstruktor ohne Parameter. |

## Browserkompatibilität

{{Compat("javascript.builtins.Float32Array")}}

## Kompatibilitätshinweise

Mit Beginn von ECMAScript 2015, müssen `Float32Array` Konstruktoren mit einem {{jsxref("Operators/new", "new")}} benutzt werden. Der Aufruf eines `Float32Array` Konstruktors als eine Funktion ohne `new`, Führt jetzt zu einem {{jsxref("TypeError")}}.

```js example-bad
var dv = Float32Array([1, 2, 3]);
// TypeError: calling a builtin Float32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## Siehe auch

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
