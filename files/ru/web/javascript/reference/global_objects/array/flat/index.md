---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

{{JSRef}}

Метод **`flat()`** возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

## Синтаксис

```
var newArray = arr.flat(depth);
```

### Параметры

- `depth` {{optional_inline}}
  - : На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.

### Возвращаемое значение

Новый массив с объединёнными в него подмассивами.

## Примеры

### Упрощение вложенных массивов

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Упрощение и "дырки" в массивах

Метод flat удаляет пустые слоты из массива:

```js
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## Альтернативы

### `reduce` и `concat`

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();

// В одномерный массив
arr1.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]

//или
const flatSingle = (arr) => [].concat(...arr);
```

```js
// Для развёртывания многомерных массивов используем рекурсию, reduce и concat
const arr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        [],
      )
    : arr.slice();
}

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
```

```js
//не рекурсивное упрощение с использованием стэка
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // забираем последнее значение
    const next = stack.pop();
    if (Array.isArray(next)) {
      // добавляем к массиву элементы не модифицируя исходное значение
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //разворачиваем массив, чтобы восстановить порядок элементов
  return res.reverse();
}
flatten(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```js
//рекурсивно упрощаем массив
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
