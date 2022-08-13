---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/throw
---
{{JSRef}}

Die **`throw()`** Methode übergibt dem Generator eine Exception, welche im Generator zu einem Fehler führt. Zudem wird ein Objekt mit den zwei Eigenschaften `done` und `value` zurückgegeben.

## Syntax

    gen.throw(exception)

### Parameter

- `exception`
  - : Die Exception, die geworfen werden soll. Für Debuggingzwecke ist es sinnvoll eine Instanz von {{jsxref("Error")}} zu verwenden.

### Rückgabewert

Ein [`Objekt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) mit zwei Eigenschaften:

- `done` (boolean)

  - Hat den Wert `true`, wenn der Iterator am Ende der Sequenz angekommen ist. In diesem Fall ist `value`, der Rückgabewert des Iterators, optional spezifiziert.
  - Hat den Wert `false`, wenn der Iterator einen weiteren Wert aus der Sequenz produzieren kann. Das ist gleichbedeutend damit, dass die `done` Eigenschaft nicht spezifiziert ist.

- `value` - Ein JavaScript Wert, der von einem Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

## Beispiele

### Einsatz von `throw()`

Das folgende Beispiel zeigt einen einfachen Generator und einen Fehler der mit der `throw` Methode erzeugt wird. Ein Fehler kann mit [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen werden.

```js
function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

var g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Generator.throw")}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
