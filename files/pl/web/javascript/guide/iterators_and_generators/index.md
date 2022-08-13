---
title: Iterators and generators
slug: Web/JavaScript/Guide/Iterators_and_Generators
tags:
  - JavaScript
  - Przewodnik
translation_of: Web/JavaScript/Guide/Iterators_and_Generators
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}

Przetwarzanie każdego elementu w kolekcji jest bardzo popularną operacją. JavaScript daje wiele możliwości iteracji przez elementy kolekcji: od prostej pętli {{jsxref("Polecenia/for","for")}} do {{jsxref("Obiekty/Array/map","map()")}} i {{jsxref("Obiekty/Array/filter","filter()")}}. Iteratory i Generatory wnoszą pojęcie interacji bezpośredno w natywne funkcjonalności języka i dają możliwość do dostosowania zachowania pętli {{jsxref("Polecenia/for...of","for...of")}}.

Zobacz także:

- [Iteration protocols](/pl/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Polecenia/for...of","for...of")}}
- {{jsxref("Polecenia/function*","function*")}} i {{jsxref("Obiekty/Generator","Generator")}}
- {{jsxref("Operatory/yield","yield")}} i {{jsxref("Operatory/yield*","yield*")}}

## Iteratory

Obiekt jest **iteratorem** kiedy wie jak uzyskać dostęp do elementów z kolekcji pojedynczo, podczas gdy śledzi swoją obecną pozycję w tej sekwencji. W języku JavaScript iterator jest obiektem który dostarcza metodę next(), która zwraca następny obiekt w tej sekwencji. Ta metoda zwraca obiekt z dwoma właściwościami: `done` i `value`.

Po utworzeniu, obiekt iteratora może być użyty jawnie przez powtarzanie wywołania metody next().

```js
function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
```

Po inicjalizacji metoda next() może być wywołana w celu dostępu do par klucz-wartość z obiektu:

```js
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

## Generatory

Pomimo tego, że iteratory są przydatnym narzędziem, ich utworzenie wymaga ostrożnego podejścia, ze względu na potrzebę jawnego utrzymywania ich wewnętrznego stanu. **{{jsxref("Obiekty/Generator","Generators","","true")}}** zapewnia mocną alternatywę: pozwalają one zdefiniować programiście iteratywny algorytm poprzez utworzenie pojedynczej funkcji, która jest wstanie utrzymywać swój wewnętrzny stan.

Generator jest specjalnym typem funkcji, która działa jako fabryka dla iteratorów. Funkcja staje się generatorem, gdy zawiera przynajmniej jedno{{jsxref("Operatory/yield","yield")}} wyrażenie oraz gdy używa {{jsxref("Polecenia/function*","function*")}}.

```js
function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Iterables

An object is **iterable** if it defines its iteration behavior, such as what values are looped over in a {{jsxref("Polecenia/for...of", "for..of")}} construct. Some built-in types, such as {{jsxref("Array")}} or {{jsxref("Map")}}, have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not.

In order to be **iterable**, an object must implement the **@@iterator** method, meaning that the object (or one of the objects up its [prototype chain](/pl/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) must have a property with a {{jsxref("Symbol.iterator")}} key:

### User-defined iterables

We can make our own iterables like this:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let value of myIterable) {
    console.log(value);
}
// 1
// 2
// 3

or

[...myIterable]; // [1, 2, 3]
```

### Built-in iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} and {{jsxref("Set")}} are all built-in iterables, because the prototype objects of them all have a {{jsxref("Symbol.iterator")}} method.

### Syntaxes expecting iterables

Some statements and expressions are expecting iterables, for example the {{jsxref("Polecenia/for...of","for-of")}} loops, {{jsxref("Operatory/Spread_operator","spread operator","","true")}}, {{jsxref("Operatory/yield*","yield*")}}, and {{jsxref("Operatory/Destructuring_assignment","destructuring assignment","","true")}}.

```js
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
a; // "a"
```

## Advanced generators

Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute, or even infinite sequences as demonstrated above.

The {{jsxref("Obiekty/Generator/next","next()")}} method also accepts a value which can be used to modify the internal state of the generator. A value passed to `next()` will be treated as the result of the last `yield` expression that paused the generator.

Here is the fibonacci generator using `next(x)` to restart the sequence:

```js
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
```

You can force a generator to throw an exception by calling its {{jsxref("Obiekty/Generator/throw","throw()")}} method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the `yield` that is currently suspended were instead a `throw value` statement.

If a `yield` is not encountered during the processing of the thrown exception, then the exception will propagate up through the call to `throw()`, and subsequent calls to `next()` will result in the `done` property being `true`.

Generators have a {{jsxref("Obiekty/Generator/return","return(value)")}} method that returns the given value and finishes the generator itself.

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}
