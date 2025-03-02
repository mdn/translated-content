---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
---

{{JSRef}}

Метод **`toSorted()`** возвращает новый массив с отсортированными в порядке возрастания элементами. Является [копирующей](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) версией метода {{jsxref("Array/sort", "sort()")}}.

## Синтаксис

```js-nolint
toSorted()
toSorted(compareFn)
```

### Параметры

- `compareFn` {{optional_inline}}
  - : Указывает функцию, определяющую порядок сортировки. Если опущен, массив сортируется в соответствии со значениями кодовых точек каждого символа Unicode, полученных путём преобразования каждого элемента в строку. Смотрите {{jsxref("Array/sort", "sort()")}} для получения дополнительной информации.

### Возвращаемое значение

Новый массив с отсортированными в порядке возрастания элементами.

## Описание

Смотрите {{jsxref("Array/sort", "sort()")}} для получения дополнительной информации о параметре `compareFn`.

Когда мы используем метод `toSorted()` на массиве с [пропущенными элементами](/ru/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), метод `toSorted()` проитерирует пустые элементы так, как если бы они имели значение `undefined`.

Метод `toSorted()` - это [generic](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Он ожидает, что значение `this` будет иметь свойство `length` и свойства с целочисленными ключами.

## Примеры

### Сортировка элементов массива

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

Смотрите {{jsxref("Array/sort", "sort()")}} для изучения дополнительных примеров использования.

### Использование toSorted() на массивах с пропущенными элементами

Пустые элементы сортируются так, как если бы они имели значение `undefined`. В результате сортировки они всегда оказываются в конце массива, при этом `compareFn` для них не вызывается.

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### Вызов метода toSorted() на объектах которые не являются массивом

В данном примере создаётся объект `arrayLike`, который не является обычным массивом, но он обладает свойством `length` и целочисленными ключами. Поскольку `arrayLike` имеет свойство `length` равное 3, метод `toSorted()` создаст новый массив с длиной равной 3. В результирующий массив попадут отсортированные значения с целочисленными ключами в диапазоне от `0` до `length - 1`. Как можно заметить элемент с индексом '1' пропущен, поэтому он имеет значение `undefined`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // игнорируется toSorted(), так как длина равна 3
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
- Руководство по [упорядоченным наборам данных](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
