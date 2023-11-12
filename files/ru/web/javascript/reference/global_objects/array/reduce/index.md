---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

Метод **`reduce()`** применяет функцию **reducer** к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

При первом запуске обратного вызова нет "возвращаемого значения предыдущего вычисления".
Если указано, вместо него может быть использовано начальное значение.
В противном случае элемент массива с индексом 0 используется в качестве начального значения, и итерация начинается со следующего элемента (индекс 1 вместо индекса 0).

Возможно, самый простой для понимания случай для `reduce()` - это возврат суммы всех элементов в массиве:

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

Метод **`reduce()`** проходит по каждому элементу массива, на каждом шаге добавляя текущее значение массива к результату предыдущего шага (этот результат является текущей суммой всех предыдущих шагов) - до тех пор, пока не останется больше элементов для добавления.

## Синтаксис

```js-nolint
// Стрелочная функция
reduce((accumulator, currentValue) => { /* … */ })
reduce((accumulator, currentValue, currentIndex) => { /* … */ })
reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

reduce((accumulator, currentValue) => { /* … */ }, initialValue)
reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Функция обратного вызова
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Строчная функция обратного вызова
reduce(function (accumulator, currentValue) { /* … */ })
reduce(function (accumulator, currentValue, currentIndex) { /* … */ })
reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ })

reduce(function (accumulator, currentValue) { /* … */ }, initialValue)
reduce(function (accumulator, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)
```

### Параметры

- `callbackFn`

  - : Функция, выполняемая для каждого элемента в массиве. Его возвращаемое значение становится значением параметра `accumulator` при следующем вызове `callbackFn`. Для последнего вызова возвращаемое значение становится возвращаемым значением `reduce()`.

  Функция вызывается со следующими аргументами:

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
  Если указано `initialValue`, то `callbackFn` начинает выполняться с первым значением в массиве как `initialValue`.
Если `initialValue` не указано, то `accumulator` инициализируется первым значением в массиве, а `callbackFn` начинает выполняться со вторым значением в массиве как `currentValue`. В этом случае, если массив пуст (так что нет первого значения, возвращаемого как `accumulator`), выдается сообщение об ошибке.

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

### Как reduce() работает без начального значения

Приведенный ниже пример показывает, что произойдет, если мы вызовем `reduce()` с массивом и без начального значения.

```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

Обратный вызов будет вызван четыре раза, при этом аргументы и возвращаемые значения в каждом вызове будут следующими:

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `15`          | `16`           | `1`     | `31`         |
| Second call | `31`          | `17`           | `2`     | `48`         |
| Third call  | `48`          | `18`           | `3`     | `66`         |
| Fourth call | `66`          | `19`           | `4`     | `85`         |

Параметр `array` никогда не меняется в процессе — он всегда `[15, 16, 17, 18, 19]`. Значение, возвращаемое `reduce()`, будет соответствовать значению последнего обратного вызова (`85`).

### Как reduce() работает с начальным значением

Здесь мы уменьшим тот же массив, используя тот же алгоритм, но с `initialValue` равным `10`, переданным в качестве второго аргумента в `reduce()`:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Обратный вызов будет вызван пять раз, при этом аргументы и возвращаемые значения в каждом вызове будут следующими:

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `10`          | `15`           | `0`     | `25`         |
| Second call | `25`          | `16`           | `1`     | `41`         |
| Third call  | `41`          | `17`           | `2`     | `58`         |
| Fourth call | `58`          | `18`           | `3`     | `76`         |
| Fifth call  | `76`          | `19`           | `4`     | `95`         |

Значение, возвращаемое `reduce()` в этом случае, будет равно `95`.

### Сумма значений в массиве объектов

Чтобы суммировать значения, содержащиеся в массиве объектов, вы **должны** указать
`initialValue`, чтобы каждый элемент проходил через вашу функцию.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Сплющивание двумерного массива

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// Вывод: [0, 1, 2, 3, 4, 5]
```

### Подсчет экземпляров значений в объекте

```js
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames равняется:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Группировка объектов по свойству

```js
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### Объединение массивов, содержащихся в массиве объектов, с использованием синтаксиса распространения и initialValue

```js
// friends - массив объектов
// где поле "книги" - это список любимых книг
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - список, который будет содержать книги всех друзей +
// дополнительный список, содержащийся в initialValue
const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Alphabet"],
);
console.log(allbooks);
// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Удаление повторяющихся элементов в массиве

> **Примечание:** Тот же эффект может быть достигнут с помощью {{jsxref("Set")}} и {{jsxref("Array.from()")}} как `постоянный массив без дубликатов = Array.from(new Set(myArray))` с лучшей производительностью.

```js
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);
```

### Замена .filter().map() на .reduce()

Используйте {{jsxref("Array/filter", "filter()")}}, затем {{jsxref("Array/map", "map()")}} чтобы дважды пройти массив, но вы можете
добиться того же эффекта при обходе только один раз с помощью
{{jsxref("Array/reduce", "reduce()")}}, тем самым ваш скрипт будет производительнее. (Если вам нравятся циклы `for`, вы
можете фильтровать и сопоставлять при однократном обходе с {{jsxref("Array/forEach", "forEach()")}}.)

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Последовательное выполнение функций

```js
/**
 * Создайте цепочку из нескольких обработчиков обещаний.
 *
 * @param {array} arr - список обработчиков Promises, каждый из которых получает
 * разрешенный результат предыдущего обработчика и возвращает другой объект Promises.
 * @param {*} input - начальное значение, чтобы запустить цепочку обещаний.
 * @return {Object} - Final promise with a chain of handlers attached
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3 - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
```

### Функциональный состав, позволяющий прокладывать трубопроводы

```js
// Строительные блоки для использования в композиции
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Функциональный состав, обеспечивающий функциональность трубы
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Составленные функции для умножения определенных значений
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Использование
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Использование reduce() с разреженными массивами

`reduce()` пропускает отсутствующие элементы в разреженных массивах, но не пропускает `undefiend` значения.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Вызов reduce() для объектов, не являющихся массивами

Метод `reduce()` считывает свойство `length` из `this` и затем обращается к каждому целочисленному индексу.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.reduceRight()")}}
