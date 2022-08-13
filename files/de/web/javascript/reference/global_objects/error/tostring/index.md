---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - Error
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
---
{{JSRef}}Die **`toString()`** Methode gibt einen String zurück, der das {{jsxref("Error")}} Objekt repräsentiert.

## Syntax

    e.toString()

### Rückgabewert

Einen String, der das gegebenen {{jsxref("Error")}} Objekt repräsentiert.

## Beschreibung

Das {{jsxref("Error")}} Objekt überschreibt die {{jsxref("Object.prototype.toString()")}} Methode, die an allen Objekte vererbt werden. Die Semanik ist die folgende (angenommen {{jsxref("Object")}} und {{jsxref("String")}} wurden nicht verändert):

```js
Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
```

## Beispiele

```js
var e = new Error('fatal error');
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = '';
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // 'Error'

e.name = 'hello';
console.log(e.toString()); // 'hello'
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.11.4.4', 'Error.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Error.toString")}}

## Siehe auch

- {{jsxref("Error.prototype.toSource()")}}
