---
title: 'TypeError: ''x'' is not iterable'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/is_not_iterable
original_slug: Web/JavaScript/Reference/Fehler/is_not_iterable
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: 'x' is not iterable (Firefox, Chrome)
    TypeError: 'x' is not a function or its return value is not iterable (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Der Wert, welcher auf der rechten Seite von [for…of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) oder als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("TypedArray.from")}} ist kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Ein iterierbares Objekt kann vom Standardtypen wie {{jsxref("Array")}}, {{jsxref("String")}} oder {{jsxref("Map")}} sein oder ein Objekt, welches das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) implementiert.

## Beispiele

### Über Objekteigenschaften iterieren

In JavaScript sind {{jsxref("Object", "Objekte")}} nicht iterierbar, außer sie implementieren das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol). Demnach kann man [for…of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) nicht für das Iterieren von Objekteigenschaften benutzen.

```js example-bad
var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}
```

Stattdessen kann man {{jsxref("Object.keys")}} oder {{jsxref("Object.entries")}} benutzen, um über die Eigenschaften oder Einträge zu iterieren.

```js example-good
var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of obj.keys()) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of obj.entries())
    console.log(country, capital);
```

Eine andere Option ist in diesem Fall der Einsatz einer {{jsxref("Map")}}:

```js example-good
var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// Iterate over the property names:
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
```

### Über einen Generator iterieren

[Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators) sind Funktionen welche aufgerufen werden, um ein iterierbares Objekt zu produzieren.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
    console.log(x);
```

Wenn dieser nicht aufgerufen wird, ist das korrespondierende {{jsxref("Function")}} Objekt des Generators aufrufbar, aber nicht iterierbar. Aufrufen des Generators Produziert ein iterierbares Objekt, welche über die Werte iteriert, die während der Ausführung des Generators zurückgegeben werden.

```js example-good
function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
```

## Siehe auch

- [Iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators)
- [for…of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
