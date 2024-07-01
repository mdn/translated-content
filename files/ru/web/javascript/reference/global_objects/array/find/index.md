---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

## Сводка

Метод **`find()`** возвращает **значение** первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается {{jsxref("Global_Objects/undefined", "undefined")}}.

Также смотрите метод {{jsxref("Array.findIndex", "findIndex()")}}, который возвращает **индекс** найденного в массиве элемента вместо его значения.

Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте {{jsxref("Array.prototype.indexOf()")}} или {{jsxref("Array.prototype.includes()")}} соответственно.

## Синтаксис

```
arr.find(callback[, thisArg])
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

### Возвращаемое значение

Значение элемента из массива, если элемент прошёл проверку, иначе {{jsxref("undefined")}}.

## Описание

Метод `find` вызывает переданную функцию `callback` один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт `true`. Если такой элемент найден, метод `find` немедленно вернёт значение этого элемента. В противном случае, метод `find` вернёт {{jsxref("Global_Objects/undefined", "undefined")}}. До Firefox 34 функция `callback` не вызывалась для «дырок» в массивах ([bug 1058394](https://bugzilla.mozilla.org/show_bug.cgi?id=1058394)).

Функция `callback` вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод `find` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение {{jsxref("Global_Objects/undefined", "undefined")}}.

Метод `find` не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом `find`, устанавливается до первого вызова функции `callback`. Элементы, добавленные в массив после начала выполнения метода `find`, не будут посещены функцией `callback`. Если существующие, непосещение элементы массива изменяются функцией `callback`, их значения, переданные в функцию, будут значениями на тот момент времени когда метод `find` посетит их; удалённые элементы все ещё будут посещены.

## Примеры

### Пример: поиск простого числа в массиве

Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает {{jsxref("Global_Objects/undefined", "undefined")}}, если в массиве нет простых чисел).

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

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

## Полифил

Этот метод был добавлен в спецификации ECMAScript 6 и пока может быть недоступен во всех реализациях JavaScript. Однако, вы можете использовать следующий сниппет в качестве полифила:

```
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.findIndex()")}} {{experimental_inline}}
- {{jsxref("Array.prototype.every()")}}
