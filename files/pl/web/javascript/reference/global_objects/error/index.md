---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Błąd
  - CustomError
  - Error
  - JavaScript
  - Obsługa błędów
translation_of: Web/JavaScript/Reference/Global_Objects/Error
original_slug: Web/JavaScript/Referencje/Obiekty/Error
---
{{JSRef}}Kontruktor klasy **`Error`** tworzy obiekt błędu. Instancja klasy `Error` jest rzucana w momencie napotkania błędu w trakcie wykonywania programu. Klasa `Error` może być także używana do tworzenia własnych wyjątków. Poniżej przestawione zostaną wbudowane standardowe typy błędów.

## Składnia

    new Error([message[, fileName[, lineNumber]]])

### Parametry

- `message`
  - : Opcjonalny. Opis błędu zrozumiały dla użytkownika.
- `fileName` {{non-standard_inline}}
  - : Opcjonalny. Wartość dla parametru `fileName` przy tworzeniu obiektu `Error`. Domyślnie to nazwa pliku zawierającego kod, który wywołał konstruktor.
- `lineNumber` {{non-standard_inline}}
  - : Opcjonalny. Wartość dla paramteru `lineNumber` przy tworzeniu obiektu `Error`. Domyślnie zawiera numer linijki zawirającej wywołanie konstruktora klasy `Error`.

## Opis

Błędy w trakcie wykonywania programu skutkują utworzeniem i rzuceniem nowego obiektu `Error`.

This page documents the use of the `Error` object itself and its use as a constructor function. For a list of properties and methods inherited by `Error` instances, see {{jsxref("Error.prototype")}}.

### Używanie jako funkcja

Gdy `Error` jest używany jako funkcja -- bez słowa kluczowego `new`, zwraca on obiekt `Error`. Możemy więc zauważyć, że zwykłe wywołanie `Error` zwróci nam to samo co stworznie nowego obiektu `Error` przy pomocy słowa kluczowego `new`.

    // to:
    const x = Error('Jestem stworzony przy pomocy wyowałania funkcji!');
    ​​​​// działa tak samo jak to:
    const y = new Error('Jestem stworzony przy pomocy słowa kluczowego "new"!');

### Typy błędów

Oprócz konstruktora generycznego `Error`, mamy jeszcze siedem innych podstawowych konstruktorów błędów w JavaScript. Dla wyjątów po stronie klienta zobacz [Exception Handling Statements](/pl/docs/Web/JavaScript/Guide/Statements#Exception_Handling_Statements).

- {{jsxref("EvalError")}}
  - : Tworzy instancje reprezentującą błąd dotyczący globalnej funkcji {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Tworzy instancje reprezentującą błąd, który występuje w momencie wyrzucenia wewnętrznego błędu silnika JavaScript np. "too much recursion".
- {{jsxref("RangeError")}}
  - : Tworzy instancje reprezentującą błąd, który występuje w momencie gdy zmienna numeryczna lub parametr wyjdzie poza zakres.
- {{jsxref("ReferenceError")}}
  - : Tworzy instancje reprezentującą błąd, który występuje przy próbie odwołania do nieistniejącego zasobu.
- {{jsxref("SyntaxError")}}
  - : Tworzy instancje reprezentującą błąd składni, który występuje przy parsowaniu kodu przy pomocy {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("TypeError")}}
  - : Tworzy instancję reprezentującą błąd, który występuje gdy zmienna lub parametr mają niepoprawny typ.
- {{jsxref("URIError")}}
  - : Tworzy instancję reprezentującą błąd, który występuje gdy {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} i {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} mają przekazane nieprawidłowe parametry.

## Właściwości

- {{jsxref("Error.prototype")}}
  - : Pozwala na dodawanie właściwości do instancji klasy `Error`.

## Metody

Globalny obiekt `Error` sam w sobie nie zawiera metod, niemniej, dziedziczy on niektóre metody z łańcucha prototypów.

## `Error` instancje

{{page('pl/docs/Web/JavaScript/Referencje/Obiekty/Error/prototype', 'Description')}}

### Właściwości

{{page('pl/docs/Web/JavaScript/Referencje/Obiekty/Error/prototype', 'Properties')}}

### Metody

{{page('pl/docs/Web/JavaScript/Referencje/Obiekty/Error/prototype', 'Methods')}}

## Przykłady

### Rzucanie ogólnego błędu

Zazwyczaj tworzysz obiekt `Error` w celu wywołania go przy użyciu słowa kluczowego {{jsxref("Statements/throw", "throw")}}. Możesz obsłużyć tak rzucony błąd przy pomocy konstrukcji {{jsxref("Statements/try...catch", "try...catch")}}:

```js
try {
  throw new Error('Whoops!');
} catch (e) {
  alert(e.name + ': ' + e.message);
}
```

### Obsługa specyficznych błędów

Jeżeli chcesz możesz obsługiwać tylko specyficzny rodzaj błędu poprzez użycie właściwości jego {{jsxref("Object.prototype.constructor", "constructor")}} lub, jeżeli używasz nowoczesnego silnika JavaScript, poprzez słowo kluczowe {{jsxref("Operators/instanceof", "instanceof")}}:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ': ' + e.message);
  }
  // ... etc
}
```

### Niestandardowe typy błędów

Możesz chcieć zdefiniować własny typ błędu pochodzący z klasy `Error` z możliwością rzucenia błędu `throw new MyError()` i użycia `instanceof MyError` w celu sprawdzenia jego rodzaju. Skutkuje to czystszym i spójniejszym kodem obsługi błędów. Zobacz ["What's a good way to extend Error in JavaScript?"](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) na StackOverflow dla dogłębniejszej analizy.

#### ES6 Custom Error Class

> **Warning:** Babel i inne transpilatory nie potrafią poprawnie obsłużyć podanego kodu bez [dodatkowej konfiguracji](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).

> **Note:** Nie które przeglądarki dodają constructor `CustomError` w stosie błędu kiedy używamy klas ES2015

```js
class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message); //bazMessage
  console.log(e.stack); //stacktrace
}
```

#### ES5 Custom Error Object

> **Warning:** **Wszystkie** przeględarki dodają konstruktor `CustomError `kiedy używasz konstruktora z wykorzystaniem prototype

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}


try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message) ;//bazMessage
}
```

## Specyfikacja

| Specification                                                            | Status                       | Comment                                                  |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Początkowa definicja. Zaimplementowana w JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.11', 'Error')}}             | {{Spec2('ES5.1')}}     |                                                          |
| {{SpecName('ES2015', '#sec-error-objects', 'Error')}} | {{Spec2('ES2015')}}     |                                                          |
| {{SpecName('ESDraft', '#sec-error-objects', 'Error')}} | {{Spec2('ESDraft')}} |                                                          |

## Kompatybilność

{{Compat("javascript.builtins.Error")}}

## Zobacz także

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
