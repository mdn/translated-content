---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Metodă
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Error/toString
---
{{JSRef}}

Metoda **`toString()`** zwraca iąg znaków reprezentujący dany obiekt {{jsxref("Error")}}.

## Składnia

    e.toString()

### Zwracana wartość

Ciąg znaków reprezentujący dany obiekt {{jsxref("Error")}}.

## Opis

Obiekt {{jsxref("Error")}} nadpisuje metodę {{jsxref("Object.prototype.toString()")}} dziedziczoną przez wszystkie obiekty. Jego semantyka jest następująca (przy założeniu, że {{jsxref("Object")}} i {{jsxref("String")}} mają swoje oryginalne wartości):

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

## Przykłady

### Użycie toString()

```js
var e = new Error('fatal error');
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = '';
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // ''

e.name = 'hello';
console.log(e.toString()); // 'hello'
```

## Specyfikacje

| Specyfikacja                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.Error.toString")}}

## Zobacz też

- {{jsxref("Error.prototype.toSource()")}}
