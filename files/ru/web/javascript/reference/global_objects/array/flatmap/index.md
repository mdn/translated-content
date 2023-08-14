---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}}

Метод **`flatMap()`** сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. Это идентично [map](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map) функции, с последующим применением функции [flat](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) с параметром depth ( глубина ) равным 1, но `flatMap` часто бывает полезным, так как работает немного более эффективно.

## Синтаксис

```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // возвращает элемент для new_array
}[, thisArg])
```

### Параметры

- `callback`

  - : Функция которая производит элементы нового массива, принимает три аргумента:

    - `currentValue`

      - : Текущий обрабатываемый элемент массива.

    - `index`{{optional_inline}}
      - : Индекс обрабатываемого элемента в массиве.
    - `array`{{optional_inline}}
      - : Массив по которому осуществляется обход.

- `thisArg`{{optional_inline}}
  - : Значение используемое в качестве `this` при вызове функции `callback`.

### Возвращаемое значение

Новый массив, каждый элемент которого является результатом выполнения функции callback и "поднят" на уровень 1.

## Описание

Смотрите {{jsxref("Array.prototype.map()")}} для детального описания callback функции. Метод `flatMap` идентичен методу [`map`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map) с последующим вызовом [`flat`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) с параметром depth 1.

## Примеры

### `map` и `flatMap`

```js
let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// выравнивается только один уровень
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Хотя результат полученный в примере выше можно было получить используя просто map, ниже мы рассмотрим пример где `flatMap` является более эффективным.

Давайте сгенерируем список слов из списка предложений.

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Обратите внимание, длина списка вывода может отличаться от длины списка ввода.

//=> \[1, 2, 3, 4, 5, 6, 7, 8, 9]

## Альтернативное решение

### `reduce` and `concat`

```js
var arr1 = [1, 2, 3, 4];
arr1.flatMap((x) => [x * 2]);
// is equivalent to
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]
```

//=> \[1, 2, 3, 4, 5, 6, 7, 8, 9]

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## См так же

- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
