---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`copyWithin()`** копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу `target`. Копия берётся по индексам, задаваемым вторым и третьим аргументами `start` и `end`. Аргумент `end` является необязательным и по умолчанию равен длине массива.

## Синтаксис

```
arr.copyWithin(target, start[, end = this.length])
```

### Параметры

- `target`
  - : Начальный индекс позиции цели, куда копировать элементы.
- `start`
  - : Начальный индекс позиции источника, откуда начинать копировать элементы.
- `end`
  - : Необязательный параметр. Конечный индекс позиции источника, где заканчивать копировать элементы, не включая элемент на позиции `end`.

## Описание

Аргументы `target`, `start` и `end` приводятся к {{jsxref("Global_Objects/Number", "Number")}} и обрезаются до целых значений.

Если аргумент `start` является отрицательным, он трактуется как `length+start` где `length` — это длина массива. Если аргумент `end` является отрицательным, он трактуется как `length+end`.

Функция `copyWithin` намеренно является _обобщённой_, она не требует, чтобы значение `this` внутри неё было объектом {{jsxref("Global_Objects/Array", "Array")}}, и кроме того, функция `copyWithin` является _изменяющим методом_, она изменит объект `this` и вернёт его, а не просто вернёт копию.

## Примеры

```js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// Типизированные массивы ES6 являются подклассами Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// На платформах, которые ещё не совместимы с ES6:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Полифил

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function (target, start /*, end*/) {
    // Шаги 1-2.
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);

    // Шаги 3-5.
    var len = O.length >>> 0;

    // Шаги 6-8.
    var relativeTarget = target >> 0;

    var to =
      relativeTarget < 0
        ? Math.max(len + relativeTarget, 0)
        : Math.min(relativeTarget, len);

    // Шаги 9-11.
    var relativeStart = start >> 0;

    var from =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len);

    // Шаги 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len);

    // Шаг 15.
    var count = Math.min(final - from, len - to);

    // Шаги 16-17.
    var direction = 1;

    if (from < to && to < from + count) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Шаг 18
    while (count > 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Шаг 19.
    return O;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Array", "Array")}}
