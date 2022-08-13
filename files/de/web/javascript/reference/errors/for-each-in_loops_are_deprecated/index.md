---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
original_slug: Web/JavaScript/Reference/Fehler/For-each-in_loops_are_deprecated
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead

## Fehlertyp

Warnung

## Was ist falsch gelaufen?

Das {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} Statement aus JavaScript 1.6 ist veraltet und wird in naher Zukunft entfernt.

## Beispiele

### Objektiteration

{{jsxref("Statements/for_each...in", "for each...in")}} wurde eingesetzt, um über spezifizierte Objektwerte zu iterieren.

#### Veraltete Syntax

```js example-bad
var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
```

#### Alternative Standardsyntax

Man kann die Standardschleife {{jsxref("Statements/for...in", "for...in")}} benutzen, um über spezifizierte Objektschlüssel zu iterieren und jeden Wert in der Schleife auszulesen:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

Oder man benutzt {{jsxref("Statements/for...of", "for...of")}} (ES2015) und {{jsxref("Object.values")}} (ES2017), um ein Array von spezifizerten Werten zu bekommen und über diese zu iterieren:

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### Arrayiteration

{{jsxref("Statements/for_each...in", "for each...in")}} wurde eingesetzt, um über spezifizierte Arrayelemente zu iterieren.

#### Veraltete Syntax

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### Alternative Standardsyntax

Dieses ist mit der {{jsxref("Statements/for...of", "for...of Schleife")}} (ES2015) möglich.

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### Iterieren über ein Arrays oder null

{{jsxref("Statements/for_each...in", "for each...in")}} tut nichts, wenn der übergebene Wert `null` oder `undefined` ist. {{jsxref("Statements/for...of", "for...of")}} erzeugt in diesem Fall einen Fehler.

#### Veraltete Syntax

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

#### Alternative Standardsyntax

Um das {{jsxref("Statements/for_each...in", "for each...in")}} Statement neu zu schreibe, so dass `null` oder `undefined` mit {{jsxref("Statements/for...of", "for...of")}} funktionieren, muss eine Bedingung um {{jsxref("Statements/for...of", "for...of")}} verfasst werden.

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### Über Objekt-Schlüssel-Werte-Paare iterieren

#### Veraltete Syntax

Es gibt eine veraltete Dialekt, der das Iterieren über Objekt-Schlüssel-Werte-Paare mit {{jsxref("Statements/for_each...in", "for each...in")}} und mit dem veralteten {{jsxref("Iterator")}} Objekt erlaubt.

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### Alternative Standardsyntax

Man kann die Standardschleife {{jsxref("Statements/for...in", "for...in")}} benutzen, um über spezifizierte Objektschlüssel zu iterieren und jeden Wert in der Schleife auszulesen:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

Oder man benutzt {{jsxref("Statements/for...of", "for...of")}} (ES2015) und {{jsxref("Object.values")}} (ES2017), um ein Array von spezifizerten Werten zu bekommen und über diese zu iterieren:

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## Siehe auch

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
