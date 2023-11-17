---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`findIndex()`** возвращает **индекс** в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

Также смотрите метод {{jsxref("Array.find", "find()")}}, который возвращает **значение** найденного в массиве элемента вместо его индекса.

## Синтаксис

```
arr.findIndex(callback[, thisArg])
```

### Параметры

- `callback`

  - : Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:

    - `element`
      - : Текущий обрабатываемый элемент в массиве.
    - `index`
      - : Индекс текущего обрабатываемого элемента в массиве.
    - `array`
      - : Массив, по которому осуществляется проход.

- `thisArg`
  - : Необязательный параметр. Значение, используемое в качестве `this` при выполнении функции `callback`.

## Описание

Метод `findIndex` вызывает переданную функцию `callback` один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт `true`. Если такой элемент найден, метод `findIndex` немедленно вернёт индекс этого элемента. В противном случае, метод `findIndex` вернёт -1. Функция `callback` вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

Функция `callback` вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод `findIndex` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение {{jsxref("Global_Objects/undefined", "undefined")}}.

Метод `findIndex` не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом `findIndex`, устанавливается до первого вызова функции `callback`. Элементы, добавленные в массив после начала выполнения метода `findIndex`, не будут посещены функцией `callback`. Если существующие, непосещение элементы массива изменяются функцией `callback`, их значения, переданные в функцию, будут значениями на тот момент времени, когда метод `findIndex` посетит их; удалённые элементы посещены не будут.

## Примеры

### Пример: поиск индекса простого числа в массиве

Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, если в массиве нет простых чисел).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

## Полифил

Этот метод был добавлен в спецификации ECMAScript 6 и пока может быть недоступен во всех реализациях JavaScript. Однако, вы можете использовать следующий кусочек кода в качестве полифила:

```js
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (predicate) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined",
      );
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.find()")}} {{experimental_inline}}
- {{jsxref("Array.prototype.indexOf()")}}
