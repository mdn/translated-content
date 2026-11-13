---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Метод **`includes()`** экземпляров {{jsxref("Array")}} определяет, содержит ли массив определенное значение, возвращая `true` или `false`.

{{InteractiveExample("JavaScript Demo: Array.includes()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

## Синтаксис

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Параметры

- `searchElement`
  - : Проверяемое значение.
- `fromIndex` {{optional_inline}}
  - : Индекс, с которого начинать поиск. Начинается с нуля и [преобразуется в целое число](/ru/docs/Web/JavaScript/Reference/Global_Objects/Number#преобразование_строк_и_null_в_числа).
    - При отрицательных значениях поиск производится с конца массива. Если `-array.length <= fromIndex < 0`, то будет применено значение `fromIndex + array.length`. Однако в этом случае поиск будет производится с начала массива.
    - Если `fromIndex < -array.length` или `fromIndex` не указан, то используется значение `0`, то есть производится поиск по всему массиву.
    - Если `fromIndex >= array.length`, то поиск не производится и возвращается `false`.

### Возвращаемое значение

Логическое значение, `true` если значение `searchElement` найдено в массиве (или части массива, если указан параметр `fromIndex`).

## Описание

Метод `includes()` сравнивает `searchElement` с элементами массива используя [алгоритм сравнения SameValueZero](/ru/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#равенство_одинаковых_величин_и_нулей). Все нулевые значения считаются равными, независимо от знака (то есть `-0` и `0` равны), но `false` _не_ равно `0`. Значение [`NaN`](/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN) доступно для поиска.

При использовании в разреженных массивах, метод `includes()` метод считает, что пустые позиции имеют значение `undefined`.

Метод `includes()` является универсальным, то есть может быть вызван не только у массивов, но и у массивоподобных объектов (у которых значение `this` имеет свойство `length` и свойства с целочисленными ключами).

## Примеры

### Использование `includes()`

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### `fromIndex` больше или равен длине массива

Если `fromIndex` больше или равен длине массива, то возвращается `false`. При этом поиск не производится.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Вычисленный индекс меньше нуля 0

Если `fromIndex` отрицательный, то вычисляется индекс, начиная с которого будет производиться поиск элемента `searchElement`. Если вычисленный индекс меньше нуля, то поиск будет производиться во всём массиве.

```js
// длина массива равна 3
// fromIndex равен -100
// вычисленный индекс равен 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### Использование `includes()` в разреженных массивах

Можно производить поиск `undefined` в разреженном массиве и получать `true`.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Вызов `includes()` у объектов, не являющихся массивами

Метод `include()` считывает свойство `length` у `this`, а затем обращается к каждому свойству, ключ которого представляет собой неотрицательное целое число, меньшее `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // includes() не будет обращаться к этому элементу, потому что свойство length равно 3
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Array.prototype.includes` в `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Руководство по [индексируемым коллекциям](/ru/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
