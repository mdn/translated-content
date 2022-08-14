---
title: JavaScript Datentypen und Datenstrukturen
slug: Web/JavaScript/Data_structures
tags:
  - Beginner
  - JavaScript
  - Types
translation_of: Web/JavaScript/Data_structures
original_slug: Web/JavaScript/Datenstrukturen
---
{{jsSidebar("More")}}

Alle Programmiersprachen besitzen eingebaute Datenstrukturen. Diese unterschieden sich aber je nach Programmiersprache. Dieser Artikel versucht, die in JavaScript verfügbaren Datenstrukturen und ihre Eigenschaften zu erläutern. Außerdem werden an passenden Stellen Vergleiche zu anderen Programmiersprachen gezogen.

## Dynamische Typisierung

JavaScript ist eine _schwach typisierte_ oder _dynamische_ Programmiersprache. Datentypen werden bei einer Variable nicht explizit deklariert und jede Variable kann mit Werten jedes Typen beschrieben (überschrieben) werden:

```js
var foo = 42;    // foo ist jetzt eine number
var foo = "bar"; // foo ist jetzt ein string
var foo = true;  // foo ist jetzt ein boolean
```

## Datentypen

Der aktuelle ECMAScript Standard definiert sieben Datentypen:

- Sechs Datentypen sind {{Glossary("Primitive", "primitives")}}:

  - {{Glossary("Boolean")}}
  - {{Glossary("Null")}}
  - {{Glossary("Undefined")}}
  - {{Glossary("Number")}}
  - {{Glossary("String")}}
  - {{Glossary("Symbol")}} (new in ECMAScript 2015)

- und {{Glossary("Object")}}

## Primitive Werte

Alle Datentypen, bis auf Object, definieren unveränderbare Werte (Werte, die nicht verändert werden können). Zum Beispiel im Gegensatz zu C sind Strings unveränderbar. Die Werte dieser Datentypen werden als "primitive Werte" bezeichnet.

### Boolean Datentyp

Boolean repräsentiert eine logische Einheit und kann zwei Werte annehmen: `true` und `false`.

### Null Datentyp

Der Null Typ hat genau einen Wert: `null`. Siehe {{jsxref("null")}} und {{Glossary("Null")}} für mehr Details.

### Undefined Datentyp

Eine Variable, der noch kein Wert zugewiesen wurde, hat den Wert `undefined`. Siehe {{jsxref("undefined")}} und {{Glossary("Undefined")}} für mehr Details.

### Number Datentyp

Laut dem ECMAScript Standard gibt es nur einen Datentyp für Zahlen: [double-precision 64-bit binary format IEEE 754 value](https://de.wikipedia.org/wiki/Doppelte_Genauigkeit) (Zahlen zwischen -(263) und +263-1). **Es gibt keinen spezifischen Datentyp für Ganzzahlen**. Neben Gleitkommazahlen kann der Datentyp für Zahlen auch drei symbolische Werte annehmen: `+Infinity`, `-Infinity` und [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) (not-a-number = keine Zahl).

Um auf größere oder kleinere Werte als `+/-Infinity` zu prüfen, können die Konstanten {{jsxref("Number.MAX_VALUE")}} oder {{jsxref("Number.MIN_VALUE")}} verwendet werden. Ab ECMAScript 2015 kann auch geprüft werden, ob sich eine Zahl innerhalb des Bereichs der Gleitkommazahlen mit doppelter Präzision befindet. Die ist mit {{jsxref("Number.isSafeInteger()")}} als auch {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}} möglich. Zahlen außerhalb diesen Bereichs sind in JavaScript nicht mehr sicher.

Der Datentyp für Zahlen hat eine Ganzzahl mit zwei Repräsentationen: 0 kann als -0 und +0 repräsentiert werden. ("0" ist ein Alias für +0). In der Praxis hat dies fast keinen Einfluss. `+0 === -0` ist zum Beispiel `true`. Eine Division ergibt aber zwei unterschiedliche Werte:

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

Obwohl eine Zahl oft ihren Wert repräsentiert, bietet JavaScript [einige binäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "en/JavaScript/Reference/Operators/Bitwise_Operators") an. Mit ihnen können zum Beispiel mehrere Boolean Werte innerhalb einer einzigen Zahl mittels [Bitmaskierung](http://en.wikipedia.org/wiki/Mask_%28computing%29) repräsentiert werden. Das gilt generell als schlechte Praxis, da JavaScript andere Wege anbietet, um eine Menge von Booleans zu repräsentierten (wie zum Beispiel ein Array von Booleans oder ein Objekt mit Boolean Werten als benannte Eigenschaften). Bitmaskierung führt außerdem dazu, dass Code schwerer zu lesen, zu verstehen und zu warten ist. In sehr speziellen Anwendungsgebiete kann eine Bitmaskierung aber notwendig sein. Zum Beispiel wenn nur geringe Speichermengen verfügbar sind oder in extremen Fällen, wenn jedes übertragene Bit im Netzwerk zählt. Diese Technik sollte aber als letzter Ausweg gesehen werden, um die Größe zu optimieren.

### String Datentyp

Der Datentyp String wird in JavaScript für die Repräsentation von textuellen Daten verwendet. Er ist eine Menge von "Elementen" aus 16-Bit vorzeichenlosen Ganzzahlenwerten. Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an der Position mit dem Index 0, das nächste beim Index 1 und so weiter. Die Länge eines String ist die Anzahl der sich darin befindenden Elemente.

In Gegensatz zu anderen Programmiersprachen wie C kann ein String in JavaScript nicht verändert werden. Das bedeutet, dass ein String nicht mehr verändert werden kann, nachdem er erstellt wurde. Es ist aber möglich einen anderen String mit der Hilfe von Operationen aus dem ursprünglichen String zu erstellen:

- Eine Teilzeichenfolge vom ursprünglichen String durch das Auswählen von bestimmten Zeichen oder mit der Methode {{jsxref("String.substr()")}}.
- Eine Verkettung von zwei Strings mit dem Operator (`+`) oder {{jsxref("String.concat()")}}.

#### Vermeiden Sie "stringly-typing" in Ihrem Code!

Es kann verlockend sein mit String komplexe Daten zu repräsentieren. Es bringt kurzfristige Vorteile mit sich:

- Komplexe Strings können einfach durch Verkettung erstellt werden.
- Strings sind einfacher im Debug (die Ausgabe entspricht dem Inhalt vom String).
- Strings sind bei vielen APIs gebräuchlich ([Eingabefeldern](/de/docs/Web/API/HTMLInputElement "HTMLInputElement"), [Local Storage](/de/docs/Storage "Storage") Werte, {{ domxref("XMLHttpRequest") }} Antworten in ihrer Eigenschaft als `responseText`, etc.). Dadurch kann es verlockend sein nur mit Strings zu arbeiten.

Ohne Konventionen kann jede Datenstruktur als String repräsentiert werden. Das ist aber keine gute Idee. Es könnte zum Beispiel eine Liste emuliert werden, indem die Listenelemente im String durch einen Separator getrennt werden. In diesem Fall ist ein JavaScript Array aber geeigneter, denn die Liste kann zerstört werden sobald ein Listenelement den Separator enthält. Ein Escape-Zeichen oder Ähnliches müsste verwendet werden. Dafür sind aber zusätzliche Konventionen nötig und die Wartung des Codes nimmt an Komplexität zu.

Strings sollten nur für textuelle Daten verwendet werden. Wenn komplexe Daten repräsentiert werden sollen, parsen Sie den String und verwenden Sie eine geeignete Abstraktion.

### Symbol Datentyp

Symbole in JavaScript sind mit ECMAScript 2015 eingeführt worden. Ein Symbol ist ein **eindeutiger** und **unveränderbarer** primitiver Wert. Er kann als Schlüssel einer Eigenschaft eines Objekts (siehe unten) verwendet werden. In manchen Programmiersprachen werden Symbole auch Atoms genannt. Details dazu sind unter {{Glossary("Symbol")}} und dem {{jsxref("Symbol")}} Object Wrapper in JavaScript zu finden.

## Objekte

Objekte sind in der Informatik Werte im Speicher, die möglicherweise über einen {{Glossary("Identifier", "identifier")}} referenziert werden.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften (Properties) angesehen werden. Mit der [Object Literal Syntax](/de/docs/Web/JavaScript/Guide/Werte_Variablen_und_Literale#Objekt-Literale) werden die nötigsten Eigenschaften initialisiert. Danach können Eigenschaften hinzugefügt oder wieder entfernt werden. Der Wert einer Eigenschaft kann von jedem Datentyp sein. Darunter können sich auch andere Objekte befinden. Dadurch können komplexe Datenstrukturen realisiert werden. Eigenschaften werden mit einem Key identifiziert. Ein Key ist entweder ein String oder ein Symbol.

Es gibt zwei Arten von Eigenschaften, die bestimmte Attribute haben: Die Dateneigenachften und Zugriffseigenschaften.

#### Dateneigenschaften

Assoziiert einen Key mit einem Wert und besitzt die folgenden Attribute:

| Attribut         | Datentyp                       | Beschreibung                                                                                                                                                                                                                                                      | Standardwert |
| ---------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [[Value]]        | beliebiger JavaScript Datentyp | Der Wert, der bei einem Get-Zugriff auf die Eigenschaft zurückgegeben wird                                                                                                                                                                                        | undefined    |
| [[Writable]]     | Boolean                        | `false`, wenn [[Value]] der Eigenschaft nicht verändert werden kann.                                                                                                                                                                                              | false        |
| [[Enumerable]]   | Boolean                        | `true`, wenn die Eigenschaft in [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen aufgelistet wird. Siehe dazu auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties). | false        |
| [[Configurable]] | Boolean                        | `false`, wenn die Eigenschaft nicht gelöscht und die Attribute [[Value]] und [[Writable]] nicht verändert werden können.                                                                                                                                          | false        |

#### Zugriffseigenschaften

Assoziiert einen Key mit einer oder zwei Accessor-Funktionen (get und set), um einen Wert zu erhalten oder zu speichern. Es besitzt die folgenden Attribute:

| Attribut         | Datentyp                       | Beschreibung                                                                                                                                                                                                                                      | Standardwert |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [[Get]]          | Funktionsobjekt oder undefined | Die Funktion wird ohne ein Argument aufgerufen und gibt den Wert der Eigenschaft zurück, sobald ein Get-Zugriff auf den Wert ausgeführt wird. Siehe auch [`get`](/de/docs/Web/JavaScript/Reference/Operators/get).                                | undefined    |
| [[Set]]          | Funktionsobjekt oder undefined | Die Funktion wird mit einem Argument aufgerufen, das den Wert für die Zuweisung enthält. Sie wird immer aufgerufen, sobald eine bestimmte Eigenschaft verändert werden soll. Siehe auch [`set`](/de/docs/Web/JavaScript/Reference/Operators/set). | undefined    |
| [[Enumerable]]   | Boolean                        | `true`, wenn die Eigenschaft in [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen aufgelistet wird.                                                                                                                     | false        |
| [[Configurable]] | Boolean                        | `false`, wenn die Eigenschaft nicht gelöscht und nicht zu einer Dateneigenschaft verändert werden kann.                                                                                                                                           | false        |

> **Note:** **Hinweis:** Attribut wird normalerweise von der JavaScript-Umgebung genutzt und man kann nicht direkt zugreifen (mehr darüber: [Object.defineProperty()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)). Deswegen sind die Attribute in doppelten eckigen Klammern statt in einfachen.

### "Normale" Objekte und Funktionen

Ein Objekt in JavaScript ist ein Mapping zwischen Keys und Werten. Keys sind Strings oder Symbole und Werte können von jedem Datentyp sein. Dadurch sind Objekte eine Art [Hashtabelle](https://de.wikipedia.org/wiki/Hashtabelle).

Funktionen sind reguläre Objekte mit der Fähigkeit direkt aufgerufen werden zu können.

### Datum

Mit der in JavaScript eingebauten [`Date` Utility](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) kann ein Datum repräsentiert werden.

### Indizierte Collections: Arrays und typisierte Arrays

[Arrays](/de/docs/JavaScript/Reference/Global_Objects/Array "Array") sind reguläre Objekte bei denen eine Beziehung zwischen Eigenschaften, die über Ganzzahlen indiziert werden, und der Eigenschaft 'length' besteht. Zusätzlich erben Arrays von `Array.prototype`, einer Helfermethoden, die die Manipulation von Arrays anbietet, wie zum Beispiel [`indexOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "en/JavaScript/Reference/Global_Objects/Array/indexOf") (zur Suche eines Werts im Array) oder [`push`](/de/docs/JavaScript/Reference/Global_Objects/Array/push "en/JavaScript/Reference/Global_Objects/Array/push") (um Elemente zu einem Array hinzufügen). Dadurch können Listen und Mengen über ein Array repräsentiert werden.

[Typisierte Arrays](/de/docs/Web/JavaScript/Typed_arrays) sind in JavaScript mit ECMAScript Edition 2015 eingeführt worden. Sie bieten eine Array-ähnliche Sicht auf einen darunterliegenden binären Datenpuffer an. Die folgende Tabelle stellt äquivalente C Datentypen dar:

{{page("/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray", "TypedArray_objects", "", 0, 3)}}

### Keyed Collections: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektreferenzen als Keys. Sie wurden mit ECMAScript Edition 6 eingeführt. {{jsxref("Set")}} und {{jsxref("WeakSet")}} repräsentieren eine Menge von Objekten, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} einen Wert mit einem Objekt assoziieren. Der Unterschied zwischen Maps und WeakMaps ist, dass bei Maps über Objekt-Keys iteriert werden kann. Das erlaubt eine spätere Optimierung der Garbage Collection.

Maps und Sets könnten in reinem ECMAScript 5 implementiert werden. Da Objekte aber nicht verglichen werden können (im Sinne von zum Beispiel "kleiner gleich"), wäre die Performance für einen Look-Up linear. Native Implementierungen (inklusive WeakMaps) können eine ungefähr logarithmische Look-Up Performance haben.

Um Daten an einen DOM-Knoten zu binden, werden normalerweise die Eigenschaften direkt auf dem Objekt gesetzt oder es werden `data-*` Attribute verwendet. Das hat aber den Nachteil, dass die Daten für jedes Skript in demselben Kontext verfügbar sind. Mit Maps und WeakMaps können Daten einfach privat an ein Objekt gebunden werden.

### Strukturierte Daten: JSON

JSON (JavaScript Object Notation) ist ein leichtgewichtges Format zum Datenaustausch, das von JavaScript abgeleitet aber auch von vielen anderen Programmiersprachen verwendet wird. Mit JSON können universelle Datenstrukturen aufgebaut werden. Siehe {{Glossary("JSON")}} und {{jsxref("JSON")}} für mehr Details.

### Mehr Objekte in der Standardbibliothek

JavaScript hat eine Standardbibliothek mit zahlreichen eingebauten Objekten. Details darüber sind unter [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) zu finden.

## Datentypen mit dem `typeof` Operator bestimmen

Der `typeof` Operator kann den Datentyp einer Variablen herausfinden. Unter der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/typeof) sind mehr Details und Grenzfälle zu finden.

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar           |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}         | initiale Definition |
| {{SpecName('ES5.1', '#sec-8', 'Types')}}                                                                                 | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES2015', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}} | {{Spec2('ES2015')}}     |                     |
| {{SpecName('ESDraft', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}} | {{Spec2('ESDraft')}} |                     |

## Siehe auch

- [Nicholas Zakas Sammlung von gebräuchlichen Datastrukturen und Algorithmen in JavaScript.](https://github.com/nzakas/computer-science-in-javascript/)
- [Search Tre(i)es mit JavaScript JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
