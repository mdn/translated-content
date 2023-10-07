---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
---

{{JSRef}}

Метод **`includes()`** определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого `true` или `false`.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Синтаксис

```
arr.includes(searchElement[fromIndex = 0])
```

### Параметры

- `searchElement`
  - : Искомый элемент.
- `fromIndex` {{optional_inline}}
  - : Позиция в массиве, с которой начинать поиск элемента `searchElement`. При отрицательных значениях поиск производится начиная с индекса `array.length + fromIndex` по возрастанию. Значение по умолчанию равно 0.

### Возвращаемое значение

{{jsxref("Boolean")}}.

## Примеры

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### `fromIndex` больше или равен длине массива

Если `fromIndex` больше или равен длине массива, то возвращается `false`. При этом поиск не производится.

```js
var arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Вычисленный индекс меньше нуля 0

Если `fromIndex` отрицательный, то вычисляется индекс, начиная с которого будет производиться поиск элемента `searchElement`. Если вычисленный индекс меньше нуля, то поиск будет производиться во всём массиве.

```js
// длина массива равна 3
// fromIndex равен -100
// вычисленный индекс равен 3 + (-100) = -97

var arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
```

### Использование `includes()` в качестве общих метода

`includes()` специально сделан общим. Он не требует, чтобы `this` являлся массивом, так что он может быть применён к другим типам объектов (например, к массивоподобным объектам). Пример ниже показывает использование метода `includes()` на объекте [arguments](/ru/docs/Web/JavaScript/Reference/Functions/arguments).

```js
(function () {
  console.log([].includes.call(arguments, "a")); // true
  console.log([].includes.call(arguments, "d")); // false
})("a", "b", "c");
```

## Полифил

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}
```

Если требуется поддержка устаревших движков JavaScript, которые не поддерживают [`Object.defineProperty`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), то наилучшим решением будет вообще не делать полифил для методов `Array.prototype`, так как не получится сделать их неперечисляемыми.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
