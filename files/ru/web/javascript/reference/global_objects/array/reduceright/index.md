---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`reduceRight()`** применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.

## Синтаксис

```
arr.reduceRight(callback[, initialValue])
```

### Параметры

- `callback`

  - : Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

    - `previousValue`
      - : Значение, возвращённое предыдущим выполнением функции `callback`, либо значение `initialValue`, если оно предоставлено (смотрите пояснения ниже).
    - `currentValue`
      - : Текущий обрабатываемый элемент массива.
    - `index`
      - : Индекс текущего обрабатываемого элемента массива.
    - `array`
      - : Массив, для которого была вызвана функция `reduceRight`.

- `initialValue`
  - : Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции `callback`.

## Описание

Метод `reduceRight()` выполняет функцию `callback` один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова `callback`), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

Вызов колбэк-функции `callback` будет выглядеть так:

```js
array.reduceRight(function (previousValue, currentValue, index, array) {
  // ...
});
```

При первом вызове функции, параметры `previousValue` и `currentValue` могут принимать одно из двух значений. Если при вызове `reduceRight()` передан аргумент `initialValue`, то значение `previousValue` будет равным значению `initialValue`, а значение `currentValue` будет равным последнему значению в массиве. Если аргумент `initialValue` не задан, то значение `previousValue` будет равным последнему значению в массиве, а значение `currentValue` будет равным второму с конца значению в массиве.

Если массив пустой и аргумент `initialValue` не указан, будет брошено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент `initialValue` не указан, или если аргумент `initialValue` указан, но массив пустой, то будет возвращено одно это значение, без вызова функции `callback`.

Вот так будут выглядеть некоторый примеры прогона функции:

```js
[0, 1, 2, 3, 4].reduceRight(
  function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  },
);
```

Колбэк-функция будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

|                 | `previousValue` | `currentValue` | `index` | `array`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `4`             | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `7`                   |
| второй вызов    | `7`             | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `9`                   |
| третий вызов    | `9`             | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `10`                  |
| четвёртый вызов | `10`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `10`                  |

Значение, возвращённое методом `reduceRight()` будет равным последнему результату выполнения колбэк-функции — `10`.

Если же вы зададите начальное значение `initialValue`, результат будет выглядеть так:

```js
[0, 1, 2, 3, 4].reduceRight(function (
  previousValue,
  currentValue,
  index,
  array,
) {
  return previousValue + currentValue;
}, 10);
```

|                 | `previousValue` | `currentValue` | `index` | `array`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `10`            | `4`            | `4`     | `[0, 1, 2, 3, 4]` | `14`                  |
| второй вызов    | `14`            | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `17`                  |
| третий вызов    | `17`            | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `19`                  |
| четвёртый вызов | `19`            | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `20`                  |
| пятый вызов     | `20`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `20`                  |

Значение, возвращённое методом `reduceRight()` на этот раз, конечно же, будет равным `20`.

## Примеры

### Пример: суммирование всех значений в массиве

```js
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
});
// total == 6
```

### Пример: разворачивание массива массивов

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// flattened равен [4, 5, 2, 3, 0, 1]
```

## Полифил

Метод `Array.prototype.reduceRight()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `reduceRight()` в реализациях, которые не поддерживают этот метод.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.22
// Ссылка (en): http://es5.github.io/#x15.4.4.22
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.22
if ("function" !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callback /*, initialValue*/) {
    "use strict";
    if (null === this || "undefined" === typeof this) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if ("function" !== typeof callback) {
      throw new TypeError(callback + " is not a function");
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = len - 1,
      value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !k in t) {
        k--;
      }
      if (k < 0) {
        throw new TypeError("Reduce of empty array with no initial value");
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

## Спецификации

| Спецификация                                                                           | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| {{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}                 | {{Spec2('ES5.1')}} | Изначальное определение. Реализована в JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.reduce()")}}
