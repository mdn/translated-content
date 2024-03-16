---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.toReversed
---

{{JSRef}}

## Сводка

Метод **`toReversed()`** является копирующей версией метода {{jsxref("Array/reverse", "reverse()")}}. Метод возвращает новый массив с элементами в обратном порядке.

## Синтаксис

```js-nolint
toReversed()
```

### Параметры

Нет.

### Return value

Новый массив, содержащий элементы в обратном порядке.

## Description

Метод `toReversed()` изменяет порядок элементов массива (первый элемент массива становится последним, а последний — первым.) и возвращает новый массив.

Когда мы используем метод `toReversed()` на массиве с [пропущенными элементами](/ru/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), метод `toReversed()` проитерирует пустые элементы так, как если бы они имели значение `undefined`.

## Примеры

### Изменение порядка элементов в массиве на обратный

В данном примере создается массив `items`, содержащий три элемента. Затем создается новый массив, в котором элементы расположены в обратном порядке относительно массива `items`. Массив `items` остается без изменений.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Использование toReversed() на массивах с пропущенными элементами

Результатом вызова `toReversed()` никогда не будет массив с пропущенными элементами. Пустые ячейки в исходном массиве заменяются на `undefined` в возвращаемом массиве.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### вызов метода toReversed() на объектах которые не являются массивом

В данном примере создается объект `arrayLike`, который не является обычным массивом, но обладает свойством `length` и целочисленными ключами. Поскольку `arrayLike` имеет свойство `length` равное 3, метод `toReversed()` создает новый массив длиной 3. Однако в `arrayLike` отсутствуют свойства с ключами '0' и '1'. Поэтому в возвращаемом массиве соответствующие элементы становятся `undefined`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// Индексы '0' и '1' отсутствуют, поэтому они становятся undefined
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Polyfill of `Array.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Indexed collections](/ru/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
