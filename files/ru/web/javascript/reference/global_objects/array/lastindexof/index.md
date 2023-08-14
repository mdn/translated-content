---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

Метод **`lastIndexOf()`** возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса `fromIndex`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Синтаксис

```
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
```

### Параметры

- `searchElement`
  - : Искомый элемент в массиве.
- `fromIndex`
  - : Необязательный параметр. Индекс, с которого начинать поиск в обратном направлении. Если индекс больше или равен длине массива, просматривается весь массив. Если индекс является отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от конца к началу. Если рассчитанный индекс оказывается меньше 0, массив даже не просматривается. Значение по умолчанию равно длине массива, что означает, что просматривается весь массив.

## Описание

Метод `lastIndexOf()` сравнивает искомый элемент `searchElement` с элементами в массиве, используя [строгое сравнение](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (тот же метод используется оператором `===`, тройное равно).

## Примеры

### Пример: использование `lastIndexOf()`

В следующем примере метод `lastIndexOf()` используется для поиска значений в массиве.

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

### Пример: нахождение всех вхождений элемента

В следующем примере метод `lastIndexOf()` используется для поиска всех индексов элемента в указанном массиве, которые с помощью метода {{jsxref("Array.prototype.push()", "push()")}} добавляются в другой массив.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Обратите внимание, что мы обрабатываем случай `idx == 0` отдельно, поскольку элемент всегда будет найден, независимо от параметра `fromIndex`, если он является первым элементом в массиве. Этим он отличается от метода {{jsxref("Array.prototype.indexOf()", "indexOf()")}}.

## Полифил

Метод `lastIndexOf()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `lastIndexOf()` в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 5-го издания; он предполагает, что {{jsxref("Global_Objects/Object", "Object")}}, {{jsxref("Global_Objects/TypeError", "TypeError")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Math.floor()")}}, {{jsxref("Math.abs()")}} и {{jsxref("Math.min()")}} имеют свои первоначальные значения.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.15
// Ссылка (en): http://es5.github.io/#x15.4.4.15
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n,
      k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

И снова обратите внимание, что данная реализация нацелена на абсолютную совместимость с методом `lastIndexOf()`, реализованным в Firefox и движке JavaScript SpiderMonkey, включая несколько случаев, которые являются спорными крайними случаями. Если вы используете этот код в реальных приложениях, вы можете вычислять параметр `from` менее сложным образом, игнорируя эти случаи.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Замечания по совместимости

- Начиная с Firefox 47, метод больше не будет возвращать `-0`. Например, `[0].lastIndexOf(0, -0)` теперь всегда будет возвращать `+0` ({{bug (1242043)}}).

## Смотрите также

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
