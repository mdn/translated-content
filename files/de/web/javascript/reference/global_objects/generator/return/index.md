---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/return
---
{{JSRef}}

Die **`return()`** Gibt den gegebenen Wert und beendet den Generator

## Syntax

    gen.return(value)

### Parameter

- `value`
  - : Wert, der zurückgegeben werden soll.

### Rückgabewert

Der als Argument angegebene Wert.

## Beispiele

### Einsatz von `return()`

Das folgende Beispiel zeigt einen einfachen Generator und den Einsatz der `return` Methode.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

Wenn `return(value)` auf einem Generator aufgerufen wird, der schon den Status "completed" hat, bleibt diese auch in diesem Status. Wenn kein Argument übergeben wird, wird das selbe Objekt wir bei `.next()` zurückgegeben. Wenn ein Parameter übergeben wird, wird dieses als `value` Eigenschaft beim zurückgegebenen Objekt zurückgegeben.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator.prototype.return', 'Generator.prototype.return')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-generator.prototype.return', 'Generator.prototype.return')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Generator.return")}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
