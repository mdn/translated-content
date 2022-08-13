---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
tags:
  - Constructor
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Int32Array
---
{{JSRef}}

Das **`Int32Array`** getypte Array repräsentiert ein Array von zweierkomplement 32 Bit vorzeichenbehafteten, ganze Zahlen in der Plattform-Byte-Reihenfolge. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, muss {{jsxref("DataView")}} stattdessen benutz werden. Die Inhalte werden mit `0` initialisiert. Wie erwartet, kann man Element in einem Array mit Objektmethoden referenzieren oder man benutzt die normale Arrayindex-Syntax (das ist die Klammernotation).

## Syntax

    new Int32Array(); // new in ES2017
    new Int32Array(length);
    new Int32Array(typedArray);
    new Int32Array(object);
    new Int32Array(buffer [, byteOffset [, length]]);

Für mehr Informationen über die Konstruktorensyntax und die Parameter, siehe auf der Seite _[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Eigenschaften

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe der Elemente zurück. `4` im Falle eines `Int32Array`.
- Int32Array.length
  - : Statische Längeneigenschaft welche den Wert 0 hat. Für die aktuelle Länge (Anzahl der Elemente) siehe {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int32Array.name")}}
  - : Gibt den Stringwert des Konstruktornamens zurück. In Fall eines `Int32Array` Typs: `"Int32Array"`.
- {{jsxref("TypedArray.prototype", "Int32Array.prototype")}}
  - : Prototyp für das _TypedArray_ Objekt.

## Methoden

- {{jsxref("TypedArray.from", "Int32Array.from()")}}
  - : Erstelle ein neues `Int32Array` von einem Array-Ähnlichen oder Iterable Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int32Array.of()")}}
  - : Erstellt ein neues `Int32Array` mit einer variablen Anzahl an Argumenten. Sie auch {{jsxref("Array.of()")}}.

## `Int32Array` Prototyp

Alle `Int32Array` Objekte erben von {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Eigenschaften

- `Int32Array.prototype.constructor`
  - : Gibt die Funktion, die einen Instanzprototyp erstellt zurück. Diese ist auf den `Int32Array` Konstruktor voreingestellt.
- {{jsxref("TypedArray.prototype.buffer", "Int32Array.prototype.buffer")}} {{readonlyInline}}
  - : Gibt die {{jsxref("ArrayBuffer")}} Referenz zurück, welche nach der Erstellung eines `Int32Array` fest ist und nicht mehr geändert werden kann.
- {{jsxref("TypedArray.prototype.byteLength", "Int32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Gibt die Länge (in Bytes) des `Int32Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.byteOffset", "Int32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Gibt das Offset (in Bytes) des `Int32Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}} {{readonlyInline}}
  - : Gibt Anzahl der Elemente des `Int32Array` zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.

### Methoden

- {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Arrayelementen in das Array. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int32Array.prototype.entries()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Schlüssel/Wertepaare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int32Array.prototype.every()")}}
  - : Teste, ob alle Elemente einem, als Funktion übergebenen, Test erfüllen. Siehe auch Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int32Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int32Array.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen des alten Arrays, für die eine übergebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int32Array.prototype.find()")}}
  - : Gibt ein gefundenes Element des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `undefined` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int32Array.prototype.findIndex()")}}
  - : Gibt den Index eines gefundenen Elements des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int32Array.prototype.forEach()")}}
  - : Ruft für jedes Element in einem Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int32Array.prototype.includes()")}} {{experimental_inline}}
  - : Überprüft, ob ein getyptes Array ein bestimmtes Element enthält und gibt gegebenfalls `true` oder`false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int32Array.prototype.indexOf()")}}
  - : Gibt den ersten Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int32Array.prototype.join()")}}
  - : Führt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int32Array.prototype.keys()")}}
  - : Gibt ein neuen `Array Iterator` zurück, der alle Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int32Array.prototype.lastIndexOf()")}}
  - : Gibt den letzen Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int32Array.prototype.map()")}}
  - : Erstellt ein neues Array mit den Resultaten spezifizierten Funktion, die für jedes Element aufgerufen wird. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ehemalige nicht Standardisierte Version von {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int32Array.prototype.reduce()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von links nach rechts), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int32Array.prototype.reduceRight()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von rechts nach links), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reverse", "Int32Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge von jedem Element eines Arrays um — das Erste wird das Letzte und das Letzte wird das Erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int32Array.prototype.set()")}}
  - : Speichert mehrere Werte in einem getypten Array und ließt Eingabewerte aus einem spezifiziertem Array.
- {{jsxref("TypedArray.slice", "Int32Array.prototype.slice()")}}
  - : Extrahiert einen Bereich aus einem Array und gibt diesen in einem neuen Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int32Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn nur ein Element in einem Array den als Funktion übergebenen Test erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Int32Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-Place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int32Array.prototype.subarray()")}}
  - : Gibt ein neues `Int32Array` vom gegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.values", "Int32Array.prototype.values()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Werte von jedem Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int32Array.prototype.toLocaleString()")}}
  - : Gibt einen Ortsabhängige Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int32Array.prototype.toString()")}}
  - : Gibt einen Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int32Array.prototype[@@iterator]()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die zugehörigen Werte für jeden Index im Array enthalten.

## Beispiele

Verschiedene Wege, um ein `Int32Array` zu erstellen:

```js
// From a length
var int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Int32Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int32Array([21, 31]);
var y = new Int32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Int32Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int32 = new Int32Array(iterable);
// Int32Array[1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.                                                                                                               |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA Standard. Spezifiziert, dass ein `new` benötigt wird.                                                   |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 ändert den `Int32Array` Konstruktor, um die `ToIndex` Operation zu benutzen und erlaubt einen Konstruktor ohne Parameter. |

## Browserkompatibilität

{{Compat("javascript.builtins.Int32Array")}}

## Kompatibilitätshinweise

Mit Beginn von ECMAScript 2015, müssen `Int32Array` Konstruktoren mit einem {{jsxref("Operators/new", "new")}} benutzt werden. Der Aufruf eines `Int32Array` Konstruktors als eine Funktion ohne `new`, Führt jetzt zu einem {{jsxref("TypeError")}}.

```js example-bad
var dv = Int32Array([1, 2, 3]);
// TypeError: calling a builtin Int32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int32Array([1, 2, 3]);
```

## Siehe auch

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
