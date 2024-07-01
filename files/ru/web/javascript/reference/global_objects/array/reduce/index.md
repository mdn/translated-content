---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

Метод **`reduce()`** применяет функцию **reducer** к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

## Синтаксис

```
array.reduce(callback[, initialValue])
```

### Параметры

- `callback`

  - : Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

    - `accumulator`
      - : Аккумулятор, аккумулирующий значение, которое возвращает функция **callback** после посещения очередного элемента, либо значение `initialValue`, если оно предоставлено (смотрите пояснения ниже).
    - `currentValue`
      - : Текущий обрабатываемый элемент массива.
    - `index`{{optional_inline}}
      - : Индекс текущего обрабатываемого элемента массива.
    - `array`{{optional_inline}}
      - : Массив, для которого была вызвана функция `reduce`.

- `initialValue`{{optional_inline}}
  - : Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции `callback`.

## Описание

Метод `reduce()` выполняет функцию `callback` один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова `callback`), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

При первом вызове функции, параметры `accumulator` и `currentValue` могут принимать одно из двух значений. Если при вызове `reduce()` передан аргумент `initialValue`, то значение `accumulator` будет равным значению `initialValue`, а значение `currentValue` будет равным первому значению в массиве. Если аргумент `initialValue` не задан, то значение `accumulator` будет равным первому значению в массиве, а значение `currentValue` будет равным второму значению в массиве.

Если массив пустой и аргумент `initialValue` не указан, будет брошено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент `initialValue` не указан, или если аргумент `initialValue` указан, но массив пустой, то будет возвращено одно это значение, без вызова функции `callback`.

Предположим, что `reduce()` используется следующим образом:

```js
[0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
```

Колбэк-функция будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

|                 | `previousValue` | `currentValue` | `index` | `array`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `0`             | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `1`                   |
| второй вызов    | `1`             | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `3`                   |
| третий вызов    | `3`             | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `6`                   |
| четвёртый вызов | `6`             | `4`            | `4`     | `[0, 1, 2, 3, 4]` | `10`                  |

Значение, возвращённое методом `reduce()` будет равным последнему результату выполнения колбэк-функции — `10`.

Если же вы зададите начальное значение `initialValue`, результат будет выглядеть так:

```js
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
```

|                 | `accumulator` | `currentValue` | `index` | `array`           | возвращаемое значение |
| --------------- | ------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `10`          | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `10`                  |
| второй вызов    | `10`          | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `11`                  |
| третий вызов    | `11`          | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `13`                  |
| четвёртый вызов | `13`          | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `16`                  |
| пятый вызов     | `16`          | `4`            | `4`     | `[0, 1, 2, 3, 4]` | `20`                  |

Значение, возвращённое методом `reduce()` на этот раз, конечно же, будет равным `20`.

## Примеры

### Суммирование всех значений в массиве

```js
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
// total == 6
```

### Суммирование значений в массиве объектов

Чтобы суммировать значения, содержащиеся в массиве объектов, вы **должны** указать `initialValue`, чтобы каждый элемент смог пройти через `callback`.

```js
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue,
) {
  return accumulator + currentValue.x;
}, initialValue);
// sum == 6
```

Тоже самое, но со стрелочной функцией:

```js
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue,
);
// sum == 6
```

### Разворачивание массива массивов

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
});
// flattened равен [0, 1, 2, 3, 4, 5]
```

### Пример: склеивание массивов, содержащихся в объектах массива, с использованием оператора расширения и initialValue

```js
// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
var friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
];

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue
var allbooks = friends.reduce(
  function (prev, curr) {
    return [...prev, ...curr.books];
  },
  ["Alphabet"],
);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
```

## Полифил

Метод `Array.prototype.reduce()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `reduce()` в реализациях, которые не поддерживают этот метод.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.21
// Ссылка (en): http://es5.github.io/#x15.4.4.21
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback /*, initialValue*/) {
    "use strict";
    if (this == null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = 0,
      value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.reduceRight()")}}
