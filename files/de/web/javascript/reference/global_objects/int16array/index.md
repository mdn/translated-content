---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
tags:
  - Constructor
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Int16Array
---
{{JSRef}}

Das **`Int16Array`** getypte Array repräsentiert ein Array von zweierkomplement 16 Bit vorzeichenbehafteten, ganze Zahlen in der Plattform-Byte-Reihenfolge. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, muss {{jsxref("DataView")}} stattdessen benutz werden. Die Inhalte werden mit `0` initialisiert. Wie erwartet, kann man Element in einem Array mit Objektmethoden referenzieren oder man benutzt die normale Arrayindex-Syntax (das ist die Klammernotation).

## Syntax

    new Int16Array(); // new in ES2017
    new Int16Array(length);
    new Int16Array(typedArray);
    new Int16Array(object);
    new Int16Array(buffer [, byteOffset [, length]]);

Für mehr Informationen über die Konstruktorensyntax und die Parameter, siehe auf der Seite _[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Eigenschaften

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe der Elemente zurück. `2` im Falle eines `Int16Array`.
- Int16Array.length
  - : Statische Längeneigenschaft welche den Wert 0 hat. Für die aktuelle Länge (Anzahl der Elemente) siehe {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int16Array.name")}}
  - : Gibt den Stringwert des Konstruktornamens zurück. In Fall eines `Int16Array` Typs: `"Int16Array"`.
- {{jsxref("TypedArray.prototype", "Int16Array.prototype")}}
  - : Prototyp für das _TypedArray_ Objekt.

## Methoden

- {{jsxref("TypedArray.from", "Int16Array.from()")}}
  - : Erstelle ein neues `Int16Array` von einem Array-Ähnlichen oder Iterable Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int16Array.of()")}}
  - : Erstellt ein neues `Int16Array` mit einer variablen Anzahl an Argumenten. Sie auch {{jsxref("Array.of()")}}.

## `Int16Array` Prototyp

Alle `Int16Array` Objekte erben von {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Eigenschaften

- `Int16Array.prototype.constructor`
  - : Gibt die Funktion, die einen Instanzprototyp erstellt zurück. Diese ist auf den `Int16Array` Konstruktor voreingestellt.
- {{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}} {{readonlyInline}}
  - : Gibt die {{jsxref("ArrayBuffer")}} Referenz zurück, welche nach der Erstellung eines `Int16Array` fest ist und nicht mehr geändert werden kann.
- {{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}} {{readonlyInline}}
  - : Gibt die Länge (in Bytes) des `Int16Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Gibt das Offset (in Bytes) des `Int16Array` vom Anfang seines {{jsxref("ArrayBuffer")}} zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.
- {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}} {{readonlyInline}}
  - : Gibt Anzahl der Elemente des `Int16Array` zurück. WIrd beim erstellen festgesetzt und kann nicht geändert werden.

### Methoden

- {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Arrayelementen in das Array. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Schlüssel/Wertepaare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}
  - : Teste, ob alle Elemente einem, als Funktion übergebenen, Test erfüllen. Siehe auch Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen des alten Arrays, für die eine übergebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}
  - : Gibt ein gefundenes Element des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `undefined` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}
  - : Gibt den Index eines gefundenen Elements des Arrays zurück, welches bei der übergebenen Testfunktion `true` zurückgibt oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}
  - : Ruft für jedes Element in einem Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}} {{experimental_inline}}
  - : Überprüft, ob ein getyptes Array ein bestimmtes Element enthält und gibt gegebenfalls `true` oder`false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}
  - : Gibt den ersten Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}
  - : Führt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}
  - : Gibt ein neuen `Array Iterator` zurück, der alle Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}
  - : Gibt den letzen Index eines Elementes zurück, welches gleiche eines spezifizierten Wertes ist oder `-1` wenn es keins gibt. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}
  - : Erstellt ein neues Array mit den Resultaten spezifizierten Funktion, die für jedes Element aufgerufen wird. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int16Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ehemalige nicht Standardisierte Version von {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von links nach rechts), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}
  - : Führt eine Funktion gegeben einen Akkumulator und jeden Wert des Array aus (von rechts nach links), um das Array auf einen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge von jedem Element eines Arrays um — das Erste wird das Letzte und das Letzte wird das Erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}
  - : Speichert mehrere Werte in einem getypten Array und ließt Eingabewerte aus einem spezifiziertem Array.
- {{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}
  - : Extrahiert einen Bereich aus einem Array und gibt diesen in einem neuen Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn nur ein Element in einem Array den als Funktion übergebenen Test erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-Place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}
  - : Gibt ein neues `Int16Array` vom gegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die Werte von jedem Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}
  - : Gibt einen Ortsabhängige Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}
  - : Gibt einen Stringrepräsentation des Arrays und seiner Element zurück. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}
  - : Gibt ein neues `Array Iterator` Objekt zurück, welches die zugehörigen Werte für jeden Index im Array enthalten.

## Beispiele

Verschiedene Wege, um ein `Int16Array` zu erstellen:

```js
// From a length
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Int16Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.                                                                                                               |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Initiale Definition in einem ECMA Standard. Spezifiziert, dass ein `new` benötigt wird.                                                   |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 ändert den `Int16Array` Konstruktor, um die `ToIndex` Operation zu benutzen und erlaubt einen Konstruktor ohne Parameter. |

## Browserkompatibilität

{{Compat("javascript.builtins.Int16Array")}}

## Kompatibilitätshinweise

Mit Beginn von ECMAScript 2015, müssen `Int16Array` Konstruktoren mit einem {{jsxref("Operators/new", "new")}} benutzt werden. Der Aufruf eines `Int16Array` Konstruktors als eine Funktion ohne `new`, Führt jetzt zu einem {{jsxref("TypeError")}}.

```js example-bad
var dv = Int16Array([1, 2, 3]);
// TypeError: calling a builtin Int16Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int16Array([1, 2, 3]);
```

## Siehe auch

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
