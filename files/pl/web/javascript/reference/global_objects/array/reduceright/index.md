---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
original_slug: Web/JavaScript/Referencje/Obiekty/Array/ReduceRight
---
{{JSRef}}

Metoda **`reduceRight()`** przekazuje do funkcji wartość przyrostową dla każdego elementu w tablicy zaczynając od prawej do lewej (od najwyższego indexu do najniższego) w celu sprowadzenia tablicy do pojedynczej wartości.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}

Sprawdź również {{jsxref("Array.prototype.reduce()")}} dla redukowania tablicy od lewej do prawej (od najniższego indexu do najwyższego).

## Składnia

    arr.reduceRight(callback(akumulator, obecnaWartość[, index[, tablica]])[, wartośćPoczątkowa])

### Parametry

- `callback`
  - : Funkcja która będzie wołana dla każdego elementu w tablicy, przyjmuje 4 argumenty:_ `akumulator`
    _ : Wartość zwrócona z poprzedniego wywołania funkcji `callback` lub `wartośćPoczątkowa`, jeśli została zdefiniowana. (Sprawdź poniżej.)
    - `obecnaWartość`
      - : Element z tablicy, który aktualnie jest przetwarzany
    - `index`{{optional_inline}}
      - : Index aktualnie przetwarzanego elementu z tablicy.
    - `tablica`{{optional_inline}}
      - : Tablica, na której `reduceRight()` zostało zawołane.
- `wartośćPoczątkowa`{{optional_inline}}
  - : Wartość, która zostanie użyta do pierwszego wykonania funkcji `callback`. Jeśli wartość ta nie zostanie zdefiniowana, ostatni element tablicy zostanie użyty i pominięty. Wołanie reduce lub reduceRight na pustej tablicy bez zdefiniowanej wartości początkowej spowoduje błąd `TypeError`.

### Wartość zwracana

Wartość wynikowa redukcji.

## Opis

`reduceRight` wykonuje funkcję `callback` dla każdego elementu z tablicy, z wyłączeniem miejsc niezdefiniowanych w tablicy, przekazując cztery argumenty: wartość początkową (lub wartość z poprzedniego wywołania funkcji `callback`), wartość obecnie przetwarzanego elementu, obecny index oraz tablicę na której wykonywane są iteracje.

Użycie funkcji `callback` w metodzie reduceRight może wyglądac następująco:

```js
array.reduceRight(function(akumulator, obecnaWartość, index, tablica) {
  // ...
});
```

Przy pierwszym wywołaniu funkcji, `akumulator` i `obecnaWartość` mogą mieć jedną z 2 wartości. Jeśli `wartośćPoczątkowa` została przekazana do `reduceRight`, to `akumulator` będzie równy `wartośćPoczątkowa` a `obecnaWartość` będzie równa ostatniej wartości z tablicy. Jeśli `wartośćPoczątkowa` nie została zdefiniowana, wtedy `akumulator` będzie równy ostatniej wartości z tablicy a `obecnaWartość` będzie równa przedostatniej wartości z tablicy.

Jeśli tablica jest pusta i `wartośćPoczątkowa` nie została zdefiniowana, spowoduje to błąd: {{jsxref("TypeError")}}. Jeśli tablica ma tylko jeden element (niezależnie od jego pozycji) i `wartośćPoczątkowa` nie została zdefiniowana lub `wartośćPoczątkowa` została zdefiniowana ale tablica jest pusta, to ta pojedyncza wartość zostanie zwrócona bez wołania funkcji `callback`.

Przykład pokazujący, jak przepływają dane do funkcji `callback`:

```js
[0, 1, 2, 3, 4].reduceRight(function(akumulator, obecnaWartość, index, tablica) {
  return akumulator + obecnaWartość;
});
```

Funkcja `callback` wykona się 4 razy a argumenty wywołań oraz wartości zwracane będą zgodne z poniższą tabelą:

| `callback`  | `akumulator` | `obecnaWartość` | `index` | `tablica`         | zwrócona wartość |
| ----------- | ------------ | --------------- | ------- | ----------------- | ---------------- |
| first call  | `4`          | `3`             | `3`     | `[0, 1, 2, 3, 4]` | `7`              |
| second call | `7`          | `2`             | `2`     | `[0, 1, 2, 3, 4]` | `9`              |
| third call  | `9`          | `1`             | `1`     | `[0, 1, 2, 3, 4]` | `10`             |
| fourth call | `10`         | `0`             | `0`     | `[0, 1, 2, 3, 4]` | `10`             |

Wartość zwrócona przez `reduceRight` będzie tym, co zostało zwrócone przez ostatnie wywołanie funkcji `callback` (`10`).

Jeśli `wartośćPoczątkowa` zostałaby zdefiniowana wyniki wyglądałyby następująco:

```js
[0, 1, 2, 3, 4].reduceRight(function(akumulator, obecnaWartość, index, tablica) {
  return akumulator + obecnaWartość;
}, 10);
```

| `callback`  | `akumulator` | `obecnaWartość` | `index` | `tablica`         | zwrócona wartość |
| ----------- | ------------ | --------------- | ------- | ----------------- | ---------------- |
| first call  | `10`         | `4`             | `4`     | `[0, 1, 2, 3, 4]` | `14`             |
| second call | `14`         | `3`             | `3`     | `[0, 1, 2, 3, 4]` | `17`             |
| third call  | `17`         | `2`             | `2`     | `[0, 1, 2, 3, 4]` | `19`             |
| fourth call | `19`         | `1`             | `1`     | `[0, 1, 2, 3, 4]` | `20`             |
| fifth call  | `20`         | `0`             | `0`     | `[0, 1, 2, 3, 4]` | `20`             |

Wartość zwrócona przez `reduceRight` w tym przypadku, będzie, oczywiście, `20`.

## Przykłady

### Zsumuj wszystkie wartości z tablicy

```js
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
```

### Spłaszcz tablicę tablic

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### Uruchom asynchroniczne funkcje z callbackami z listy w taki sposób aby każda przekazywała wynik wykonania do następnej

```js
const waterfall = (...functions) => (callback, ...args) =>
  functions.reduceRight(
    (composition, fn) => (...results) => fn(composition, ...results),
    callback
  )(...args);

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) // -> 14

// same as:

const computation2 = (input, callback) => {
  const f6 = x=> div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = x => split(f5, x);
  const f3 = x => sub2(f4, x);
  const f2 = x => mult3(f3, x);
  add5(f2, input);
}
```

### ​​​​​​Różnica pomiędzy `reduce` i `reduceRight`

```js
var a = ['1', '2', '3', '4', '5'];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"
```

### Przykład na rozwijanie funkcji

W rozwijaniu funkcji chodzi o to, że w wywołaniu jednej funkcji możemy użyć wielu funkcji. Odbywa się to od prawej do lewej, wołając każdą funkcję z wynikiem zwróconym przez poprzednią.

```js
/**
 * Function Composition is way in which result of one function can
 * be passed to another and so on.
 *
 * h(x) = f(g(x))
 *
 * Function execution happens right to left
 *
 * https://en.wikipedia.org/wiki/Function_composition
 */

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// Increment passed number
const inc = (n) => n + 1

// Doubles the passed value
const double = (n) => n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
```

## Polyfill

`reduceRight` zostało dodane dostandardu ECMA-262 w piątej edycji, w związku z czym może jeszcze nie być dodane do wszystkich implementacji standardu. Można to rozwiązać poprzez użycie poniższego kodu na początku aplikacji, pozwoli to na używanie `reduceRight` w środowiskach, które tego nie implementują.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !(k in t)) {
        k--;
      }
      if (k < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## Specyfikacje

| Specyfikacja                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}} |

## Zgodność w przeglądarkach

{{Compat("javascript.builtins.Array.reduceRight")}}

## Sprawdź również

- {{jsxref("Array.prototype.reduce()")}}
