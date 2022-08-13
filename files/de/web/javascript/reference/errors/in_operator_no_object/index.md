---
title: 'TypeError: cannot use ''in'' operator to search for ''x'' in ''y'''
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/in_operator_no_object
original_slug: Web/JavaScript/Reference/Fehler/in_operator_no_object
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: right-hand side of 'in' should be an object, got 'x' (Firefox)
    TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kan nur für das Prüfen von Eigenschaften in Objekten genutzt werden. Man kann nicht in Strings, Nummern oder anderen primitiven Typen suchen.

## Beispiele

### Suchen in Strings

Im Vergleich zu anderen Programmiersprachen (z. B. Python) kann in Strings nicht mit dem [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) gesucht werden.

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

Stattdessen kann zum Beispiel {{jsxref("String.prototype.indexOf()")}} eingesetzt werden.

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### Der Operand kann nicht `null` oder `undefined` sein

Man muss sicherstellen, dass der Operand nicht {{jsxref("null")}} oder {{jsxref("undefined")}} ist.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

Der `in` Operator erwartet immer ein Objekt.

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Suchen in Arrays

Man muss vorsichtig sein, wenn der `in` Operator in {{jsxref("Array")}} Objekten genutzt wird. Der `in` Operator prüft die Indexnummern, aber nicht die Werte des Indizes.

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
3 in trees; // true
"oak" in trees; // false
```

## Siehe auch

- [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in)
