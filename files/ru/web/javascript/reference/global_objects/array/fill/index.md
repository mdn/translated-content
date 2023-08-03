---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

Метод **`fill()`** заполняет все элементы массива от начального до конечного индексов одним значением.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Синтаксис

```
arr.fill(value[, start = 0[, end = this.length]])
```

### Параметры

- `value`
  - : Значение, заполняющее массив.
- `start`
  - : Необязательный параметр. Начальный индекс.
- `end`
  - : Необязательный параметр. Конечный индекс.

### Возвращаемое значение

Изменённый массив.

## Описание

Элементы заполняются в полузакрытом интервале \[`start`, `end`).

Метод **`fill`** принимает до трёх аргументов — `value`, `start` и `end`. Аргументы `start` и `end` являются необязательными со значениями по умолчанию, равными `0` и `length` объекта `this` соответственно.

Если аргумент `start` является отрицательным, он трактуется как `length+start`, где `length` — это длина массива. Если аргумент `end` является отрицательным, он трактуется как `length+end`.

Метод **`fill`** намеренно является _обобщённым_, он не требует, чтобы значение `this` внутри него было объектом `Array`.

Метод **`fill`** является _изменяющим методом_, он изменит объект `this` и вернёт его, а не просто вернёт копию.

Если аргумент value является объектом, то метод **`fill`** заполнит массив ссылками на этот объект.

## Примеры

```
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Объекты заполняются по ссылке.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## Полифил

```
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Шаги 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Шаги 3-5.
      var len = O.length >>> 0;

      // Шаги 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Шаг 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Шаги 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Шаг 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Шаг 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Шаг 13.
      return O;
    }
  });
}
```

Если вам нужно поддерживать действительно устаревшие движки JavaScript, которые не поддерживают [Object.defineProperty](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), то лучше вообще не использовать полифилы для методов Array.prototype, так как вы не можете сделать их не перечисляемыми.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
