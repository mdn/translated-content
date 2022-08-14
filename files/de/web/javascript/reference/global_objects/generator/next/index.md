---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/next
---
{{JSRef}}

Die **`next`\*\***`()`\*\* Methode gibt ein Objekt mit den zwei Eigenschaften `done` und `value` zurück. Man kann der `next` Methode auch einen Wert für den Generator übergeben.

## Syntax

    gen.next(value)

### Parameter

- `value`
  - : Der Wert der zum Generator übermittelt wird.

### Return value

Ein [`Objekt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) mit zwei Eigenschaften:

- `done` (boolean)

  - Hat den Wert `true`, wenn der Iterator am Ende der Sequenz angekommen ist. In diesem Fall ist `value`, der Rückgabewert des Iterators, optional spezifiziert.
  - Hat den Wert `false`, wenn der Iterator einen weiteren Wert aus der Sequenz produzieren kann. Das ist gleichbedeutend damit, dass die `done` Eigenschaft nicht spezifiziert ist.

- `value` - Ein JavaScript Wert, der von einem Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

## Beispiele

### Einsatz von `next()`

Das folgende Beispiel zeigt einen einfachen Generator und das Objekt, welches die `next` Methode zurück gibt:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
```

### Werte zum Generator senden

Im diesem Beispiel wird `next` mit einem Wert aufgerufen. Zu beachten ist, dass der Generator beim ersten aufruf nicht ausgibt, weil der Generator keinen initialen Wert generiert.

```js
function* gen() {
  while(true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator.prototype.next', 'Generator.prototype.next')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-generator.prototype.next', 'Generator.prototype.next')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Generator.next")}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [Iteratoren and Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators)
