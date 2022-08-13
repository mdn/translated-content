---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/keys
---
{{JSRef}}

Die **`Object.keys()`** Funktion gibt ein Array zurück, das die eigenen aufzählbaren Eigenschaften des Objektes in der selben Reihenfolge enthält wie in der {{jsxref("Statements/for...in", "for...in")}} Schleife (der Unterschied zwischen diesen beiden Varianten besteht darin, dass eine for-in Schleife auch die aufzählbaren Eigenschaften der Prototypen beinhaltet).

## Syntax

    Object.keys(obj)

### Parameter

- `obj`
  - : ein Objekt, dessen aufzählbare eigene Eigenschaften zurückgegeben werden sollen

### Rückgabewert

Ein Array mit Strings, die alle aufzählbare Eigenschaften des gegebenen Objektes repräsentieren.

## Beschreibung

`Object.keys()` liefert ein Array, dessen Elemente Strings sind, welche die aufzählbaren Eigenschaften des Objekts respräsentieren. Die Reihenfolge der Eigenschaften ist die selbe wie bei einer for-in Schleife über das Objekt.

## Beispiele

```js
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
```

Die Liste aller eigenen aufzählbaren und nicht-aufzählbaren Eigenschaften eines Objekt erhält man mit der Funktion {{jsxref("Object.getOwnPropertyNames()")}}.

## Notizen

In ES5 wird, wenn das Argument für die Funktion kein Objekt ist, ein {{jsxref("TypeError")}} Fehler geworfen. In ES2015 wird das Argument, welches kein Objekt ist, in ein Objekt umgewandelt, das aber nicht mehr dem eigentlichen Wert entspricht (siehe Beispiel).

```js
> Object.keys("foo")
TypeError: "foo" is not an object // ES5 code

> Object.keys("foo")
["0", "1", "2"]                   // ES2015 code
```

## Polyfill

Kopieren Sie das folgende Code-Schnipsel, um `Object.keys()` auch in älteren Umgebungen ohne native Unterstützung nutzen zu können:

```js
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
```

Bitte beachten Sie, dass der obenstehende Code auch die Namen der nicht-aufzählbaren Eigenschaften im IE7 (und evtl. auch im IE8) berücksichtigt, wenn ein Objekt aus einem anderen Fenster übergeben wird.

Ein einfaches Polyfill finden Sie außerdem hier: [Javascript - Object.keys Browser Compatibility](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommantar                                               |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.14', 'Object.keys')}}     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-object.keys', 'Object.keys')}} | {{Spec2('ES2015')}}     |                                                         |
| {{SpecName('ESDraft', '#sec-object.keys', 'Object.keys')}} | {{Spec2('ESDraft')}} |                                                         |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Enumerability and ownership of properties](/de/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
