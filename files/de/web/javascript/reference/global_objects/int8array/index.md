---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
tags:
  - Constructor
  - Int8Array
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Int8Array
---
{{JSRef}}

Das **`Int8Array`** getypte Array repräsentiert ein Array von zweierkomplement 8 Bit vorzeichenbehafteten, ganze Zahlen in der Plattform-Byte-Reihenfolge. Die Inhalte werden mit `0` initialisiert. Wie erwartet, kann man Element in einem Array mit Objektmethoden referenzieren oder man benutzt die normale Arrayindex-Syntax (das ist die Klammernotation).

## Syntax

    new Int8Array(); // new in ES2017
    new Int8Array(length);
    new Int8Array(typedArray);
    new Int8Array(object);
    new Int8Array(buffer [, byteOffset [, length]]);

Für mehr Informationen über die Konstruktorensyntax und die Parameter, siehe auf der Seite _[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Eigenschaften

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe der Elemente zurück. `1` im Falle eines `Int8rray`.
- Int8Array.length
  - : Statische Längeneigenschaft welche den Wert 0 hat. Für die aktuelle Länge (Anzahl der Elemente) siehe {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int8Array.name")}}
  - : Gibt den Stringwert des Konstruktornamens zurück. In Fall eines `Int8Array` Typs: `"Int8Array"`.
- {{jsxref("TypedArray.prototype", "Int8Array.prototype")}}
  - : Prototyp für das _TypedArray_ Objekt.

## Methoden

- {{jsxref("TypedArray.from", "Int8Array.from()")}}
  - : Erstelle ein neues `Int8Array` von einem Array-Ähnlichen oder Iterable Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int8Array.of()")}}
  - : Erstellt ein neues `Int8Array` mit einer variablen Anzahl an Argumenten. Sie auch {{jsxref("Array.of()")}}.

## `Int8Array` Prototyp

Alle `Int8Array` Objekte erben von {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Eigenschaften

- `Int8Array.prototype.constructor`
  - : Gibt die Funktion, die einen Instanzprototyp erstellt zurück. Diese ist auf den `Int8Array` Konstruktor voreingestellt.
- {{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}} {{readonlyInline}}
  - : Gibt die {{jsxref("ArrayBuffer")}} Referenz zurück, welche nach der Erstellung eines `Int8Array` fest ist und nicht mehr geändert werden kann.
- {{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}} {{readonlyInline}}
  - : Gibt die Länge (in Bytes) des `Int8Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Gibt das Offset (in Bytes) des `Int8Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}} {{readonlyInline}}
  - : Gibt Anzahl der Elemente des `Int8Array` zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.

### Methoden

- {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Arrayelementen in das Array. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Schlüssel/Wertepaare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}
  - : Teste, ob alle Elemente einem, als Funktion übergebenen, Test erfüllen. Siehe auch Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen des alten Arrays, für die eine übergebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}
  - : Gibt ein gefundenes Element des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `undefined` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}
  - : Gibt den Index eines gefundenen Elements des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}
  - : Ruft für jedes Element in einem Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}} {{experimental_inline}}
  - : Überprüft, ob ein getyptes Array ein bestimmtes Element enthält und gibt gegebenfalls `true` oder`false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}
  - : Gibt den ersten Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}
  - : Führt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}
  - : Gibt ein neuen `Array Iterator` zurück, der alle Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}
  - : Gibt den letzen Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}
  - : Erstellt ein neues Array mit den Resultaten spezifizierten Funktion, die für jedes Element aufgerufen wird. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int8Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ehemalige nicht Standardisierte Version von {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von links nach rechts), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von rechts nach links), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge von jedem Element eines Arrays um — das Erste wird das Letzte und das Letzte wird das Erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}
  - : Speichert mehrere Werte in einem getypten Array und ließt Eingabewerte aus einem spezifiziertem Array.
- {{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}
  - : Extrahiert einen Bereich aus einem Array und gibt diesen in einem neuen Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn nur ein Element in einem Array den als Funktion übergebenen Test erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-Place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}
  - : Gibt ein neues `Int8Array` vom gegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Werte von jedem Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}
  - : Gibt einen Ortsabhängige Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}
  - : Gibt einen Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die zugehörigen Werte für jeden Index im Array enthalten.

## Beispiele

Verschiedene Wege, um ein `Int8Array` zu erstellen:

```js
// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                                                                                                |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.                                                                                                              |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA Standard. Spezifiziert, dass ein `new` benötigt wird.                                                  |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 ändert den `Int8Array` Konstruktor, um die `ToIndex` Operation zu benutzen und erlaubt einen Konstruktor ohne Parameter. |

## Browserkompatibilität

{{Compat("javascript.builtins.Int8Array")}}

## Kompatibilitätshinweise

Mit Beginn von ECMAScript 2015, müssen `Int8Array` Konstruktoren mit einem {{jsxref("Operators/new", "new")}} benutzt werden. Der Aufruf eines `Int8Array` Konstruktors als eine Funktion ohne `new`, Führt jetzt zu einem {{jsxref("TypeError")}}.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## Siehe auch

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
