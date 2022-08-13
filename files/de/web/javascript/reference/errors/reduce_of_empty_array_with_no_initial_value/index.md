---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
original_slug: Web/JavaScript/Reference/Fehler/Reduce_of_empty_array_with_no_initial_value
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: reduce of empty array with no initial value

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

In JavaScript gibt es einige Reduktionsfunktionen:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} und
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

Diese Funktionen haben den optionalen `initialValue` Parameter (welcher als erster Parameter beim ersten Aufruf der `callback` Funktion benutzt wird). Immer, wenn dieser Wert nicht angegeben wird, wird das erste Element des {{jsxref("Array", "Arrays")}} oder {{jsxref("TypedArray", "TypedArrays")}} als Initialwert benutzt. Dieser Fehler tritt auf, wenn das Array leer ist, weil es in diesem Fall keinen Initialwert gibt.

## Beispiele

### Nicht valide Fälle

Dieses Problem tritt öfter bei einer Kombination mit einem Filter ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}), welcher Elemente aus der Liste entfernt. Dieser lässt kein Element als Initialwert in der Liste zurück.

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x => x > 0)         // Entfernt alle Elemente
    .reduce((x, y) => x + y)    // no more elements to use for the initial value.
```

Der gleiche Fehler kann bei einem Tippfehler passieren oder, bei einer unerwarteten Anzahl von Elementen in einer Liste.

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) => acc + ", " + name);
```

### Valide Fälle

Diese Problem kann mit zwei Wegen gelöst werden.

Ein Weg ist es, einen `initialValue` als neutrales Element des Operators anzugeben, so wie 0 bei der Addition, 1 bei der Multiplikation oder ein leerer String bei einer Konkatination.

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x => x < 0)         // removes all elements
    .reduce((x, y) => x + y, 0) // the initial value is the neutral element of the addition
```

Ein anderer Weg ist es den Fall eines leeren Arrays schon vor dem Aufruf von `reduce` zu behandeln oder einen Dummywert als Initialwert in der `callback`-Funktion zu benutzen.

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(names, (acc, name) => acc + ", " + name);
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(names, (acc, name) => {
  if (acc == "") // initial value
    return name;
  return acc + ", " + name;
}, "");
// name_list2 == "" when names is empty.
```

## Siehe auch

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
