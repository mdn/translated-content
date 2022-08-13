---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
translation_of: Web/JavaScript/Reference/Errors/More_arguments_needed
---
{{jsSidebar("Errors")}}

## Komunikat

    TypeError: Object.create requires more than 0 arguments
    TypeError: Object.setPrototypeOf requires more than 1 argument
    TypeError: Object.defineProperties requires more than 0 arguments

## Typ błędu

{{jsxref("TypeError")}}.

## Co poszło nie tak?

Błąd zaistniał w sposobie wywołania funkcji. Należy podać więcej argumentów.

## Przykłady

Metoda {{jsxref("Object.create()")}} wymaga przynajmniej jednego argumentu a metoda {{jsxref("Object.setPrototypeOf()")}} wymaga przynajmniej dwóch:

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
```

Możesz temu zaradzić ustawiając {{jsxref("null")}} jako prototyp, na przykład:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Zobacz również

- [Functions](/pl/docs/Web/JavaScript/Guide/Functions)
