---
title: in operator
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Operator
  - Relational Operators
translation_of: Web/JavaScript/Reference/Operators/in
---
{{jsSidebar("Operators")}}

Der **in operator** gibt true zurück, falls die gegebene Eigenschaft im gegebenen Objekt existiert.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntax

    prop in object

### Parameter

- `prop`
  - : Ein String oder Symbol welches einen Namen einer Eigenschaft oder einen Arrayindex (nicht Symbole werden in einen String konvertiert).

- `object`
  - : Objekt, bei welchem überprüft wird, ob eine Eigenschaft mit spezifiziertem Namen enthalten ist (oder in der Prototypenkette enthalten ist).

## Beschreibung

Die folgenden Beispiele zeigen einige Verwendungen des Operators

```js
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees        // gibt true zurück
3 in trees        // gibt true zurück
6 in trees        // gibt false zurück
"bay" in trees    // gibt false zurück (man muss den Index
                  // spezifizieren, nicht den Wert an dem Index)
"length" in trees // gibt true (length ist eine Eigenschaft von Array
Symbol.iterator in trees // gibt true zurück (Arrays sind iterable, funktioniert nur in ES2015+))

// Vordefinierte Objekte
"PI" in Math     //  gibt true zurück

// Eigene Objekte
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // gibt true zurück
"model" in mycar // gibt true zurück
```

Man muss auf der rechten Seite des `in` Operators ein Objekt benutzen. Zum Beispiel kann ein String, der durch einen Konstruktor erstellt wurde, benutzt werden, jedoch funktioniert kein Stringliteral.

```js
var color1 = new String("green");
"length" in color1 // gibt true zurück

var color2 = "coral";
// erzeugt einen Fehler (color2 ist kein String Objekt)
"length" in color2
```

### Einsatz von `in` mit gelöschten oder undefined Eigenschaften.

Wenn eine Eigenschaft mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete") Operator gelöscht wird, wird der `in` für diese Eigenschaft `false` zurückgeben.

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // gibt false zurück

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // gibt false zurück
```

Wenn eine Eigenschaft auf {{jsxref("Global_Objects/undefined", "undefined")}} gesetzt wird, aber nicht gelöscht wird, wird der `in` Operator `true` zurückgeben.

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // gibt true zurück
```

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // gibt true zurück
```

### Vererbte Eigenschaften

Der `in` Operator gibt `true` für Eigenschaften in der Prototype-Kette zurück.

```js
"toString" in {}; // gibt true zurück
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES2015', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ES5.1', '#sec-11.8.7', 'The in Operator')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.8.7', 'The in Operator')}}                             | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.4. |

## Browserkompatibilität

{{Compat("javascript.operators.in")}}

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete")
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Aufzählbarkeit und Zugehörigkeit von Eigenschaften](de/docs/Web/JavaScript/Aufzählbarkeit_und_Zugehörigkeit_von_Eigenschaften "/en-US/docs/Enumerability_and_ownership_of_properties")
