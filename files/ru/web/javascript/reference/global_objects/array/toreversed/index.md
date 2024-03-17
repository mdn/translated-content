---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
---

{{JSRef}}

Метод **`toReversed()`** возвращает новый массив с расположенными в обратном порядке элементами. Является **копирующей** версией метода {{jsxref("Array/reverse", "reverse()")}}.

## Синтаксис

```js-nolint
toReversed()
```

### Параметры

Нет.

### Возвращаемое значение

Новый массив, содержащий элементы в обратном порядке.

## Описание

Метод `toReversed()` изменяет порядок элементов массива (первый элемент массива становится последним, а последний — первым) и возвращает новый массив.

Когда мы используем метод `toReversed()` на массиве с [пропущенными элементами](/ru/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), метод `toReversed()` проитерирует пустые элементы так, как если бы они имели значение `undefined`.

## Примеры

### Обращение порядка элементов в массиве

В данном примере создаётся массив `items`, содержащий три элемента. Затем создаётся новый массив, в котором элементы расположены в обратном порядке относительно массива `items`. Массив `items` остаётся без изменений.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Использование toReversed() на массивах с пропущенными элементами

В результате вызова `toReversed()` никогда не будет создан массив с пропущенными элементами. Пустые ячейки в исходном массиве заменяются на `undefined` в возвращаемом массиве.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Вызов метода toReversed() на объектах которые не являются массивом

В данном примере создаётся объект `arrayLike`, который не является обычным массивом, но обладает свойством `length` и целочисленными ключами. Поскольку `arrayLike` имеет свойство `length` равное 3, метод `toReversed()` создает новый массив длиной 3. Однако в `arrayLike` отсутствуют свойства с ключами '0' и '1'. Поэтому в возвращаемом массиве соответствующие элементы становятся `undefined`.

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

- [Полифил `Array.prototype.toReversed` в `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- Руководство по [упорядоченным наборам данных](/ru/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
