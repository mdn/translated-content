---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Błąd TypeError
  - Błąd undefined
  - Wartość null
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
---
{{jsSidebar("Errors")}}

## Message

    TypeError: "x" is (not) "y"

    Examples:
    TypeError: "x" is undefined
    TypeError: "x" is null
    TypeError: "undefined" is not an object
    TypeError: "x" is not an object or null
    TypeError: "x" is not a symbol

## Typ błędu

{{jsxref("TypeError")}}.

## Co poszło nie tak?

Pojawił się nieoczekiwany typ, dlatego pojawił się błąd. Błąd pojawia się często jako {{jsxref("undefined")}} albo {{jsxref("null")}} dla określonych wartości.

Dodatkowo niektóre metody takie jak {{jsxref("Object.create()")}} albo {{jsxref("Symbol.keyFor()")}}, wymagają określonego typu, który musi być zadeklarowany.

## Przykłady

### Nieprawidłowe przypadki, które mogą się pojawić

```js example-bad
// undefined oraz null to przypadki, dla których pojawi się błąd
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


//  Niektóre metody mogą wymagać określonego typu
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
```

## Jak naprawić?

Aby naprawić problem, w przypadku wyświetlenia `'undefined'` bądź '`null`' dla określonych wartości można użyć operatora [typeof.](/pl/docs/Web/JavaScript/Reference/Operators/typeof)

### Przykład

```js
if (typeof foo !== 'undefined') {
  // Teraz wiemy, że zmienna foo jest zdefiniowana
}
```

## Zobacz też

- {{jsxref("undefined")}}
- {{jsxref("null")}}
