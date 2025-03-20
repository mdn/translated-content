---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Метод **`toSorted()`** экземпляров {{jsxref("Array")}} возвращает новый массив с элементами, отсортированными в порядке возрастания. Является **копирующей** версией метода {{jsxref("Array/sort", "sort()")}}.

## Синтаксис

```js-nolint
toSorted()
toSorted(compareFn)
```

### Параметры

- `compareFn` {{optional_inline}}
  - : Функция, определяющая порядок сортировки. Если этот параметр опущен, элементы массива преобразуются в строки, а затем сортируются в соответствии со значением каждого символа в стандарте Юникод. Смотрите {{jsxref("Array/sort", "sort()")}} для получения дополнительной информации.

### Возвращаемое значение

Новый массив с отсортированными в порядке возрастания элементами.

## Описание

Смотрите {{jsxref("Array/sort", "sort()")}} для получения дополнительной информации о параметре `compareFn`.

При использовании метода `toSorted()` с разрежёнными массивами метод `toSorted()` обрабатывает пустые элементы так, как если бы они имели значение `undefined`.

Метод `toSorted()` является универсальным. Для его работы необходимо только, чтобы значение `this` имело свойство `length` и свойства с целочисленными индексами.

## Примеры

### Сортировка элементов массива

```js
const months = ["Мар", "Янв", "Фев", "Дек"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ["Дек", "Мар", "Фев", "Янв"]
console.log(months); // ["Мар", "Янв", "Фев", "Дек"]

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

Смотрите {{jsxref("Array/sort", "sort()")}} для изучения дополнительных примеров использования.

### Использование toSorted() на массивах с пропущенными элементами

Пустые элементы сортируются так, как если бы они имели значение `undefined`. В результате сортировки они всегда оказываются в конце массива, при этом `compareFn` для них не вызывается.

```js
console.log(["а", "в", , "б"].toSorted()); // ["а", "б", "в", undefined]
console.log([, undefined, "а", "б"].toSorted()); // ["а", "б", undefined, undefined]
```

### Вызов метода toSorted() для объектов, не являющихся массивами

В данном примере создаётся объект `arrayLike`, который не является массивом, но он обладает свойством `length` и целочисленными ключами. Поскольку `arrayLike` имеет свойство `length`, равное 3, метод `toSorted()` создаст новый массив с длиной равной 3. В результирующий массив попадут отсортированные значения с целочисленными ключами в диапазоне от `0` до `length - 1`. Элемент с индексом `1` пропущен, поэтому он превратится в значение `undefined`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // игнорируется методом toSorted(), так как длина равна 3
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Array.prototype.toSorted` в `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Полифил `Array.prototype.toSorted` от es-shims](https://www.npmjs.com/package/array.prototype.tosorted)
- Руководство по [упорядоченным наборам данных](/ru/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
