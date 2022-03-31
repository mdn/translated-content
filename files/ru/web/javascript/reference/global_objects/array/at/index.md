---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
  - at
  - Experimental
  - Polyfill
browser-compat: javascript.builtins.Array.at
---
{{JSRef}}

Метод **`at()`** принимает значение в виде целого числа и возвращает элемент массива с данным индексом. В качестве аргумента метод принимает положительные и отрицательные числа. При отрицательном значении отсчёт происходит с конца массива.

Получение элементов массива с помощью квадратных скобок по-прежнему остаётся корректным способом. Например, `array[0]` вернёт первый элемент. Однако, при работе с элементами в конце массива больше нет необходимости прибегать к {{jsxref('Array.prototype.length','array.length')}}. Например, для получения последнего элемента, вместо `array[array.length-1]` можно вызвать `array.at(-1)`. [(Смотрите примеры ниже)](#примеры)

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Синтаксис

```js
at(index)
```

### Параметры

- `index`
  - : Индекс (позиция) элемента возвращаемого элемента массива. При передаче отрицательного индекса применяется относительная индексация с конца массива; например, при использовании отрицательного числа, возвращаемый элемент находится путём обратного отсчёта с конца массива.

### Возвращаемое значение

Элемент массива, соответствующий переданному индексу. Если переданный индекс не может быть найден, возвращает {{jsxref('undefined')}}.

## Примеры

### Возврат последнего элемента массива

В следующем примере представлена функция, которая возвращает последний элемент переданного массива

```js
// Массив со значениями
const cart = ['apple', 'banana', 'pear'];

// Функция, которая возвращает последний элемент переданного массива
function returnLast(arr) {
  return arr.at(-1);
}

// Получить последний элемент нашего массива 'cart'
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'

// Добавить элемент в наш массив 'cart'
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Выведет: 'orange'
```

### Сравнение методов

В этом примере сравниваются разные способы выбора предпоследнего элемента {{jsxref('Array', 'массива')}}. Хотя все приведённые ниже способы являются допустимыми, наиболее кратким и наглядным является использование метода `at()`.

```js
// Наш массив с элементами
const colors = ['red', 'green', 'blue'];

// Использование свойства 'length'
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // Выведет: 'green'

// Использование метода slice(). Обратите внимание, что возвращается массив
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // Выведет: 'green'

// Использование метода at()
const atWay = colors.at(-2);
console.log(atWay); // Выведет: 'green'
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Полифил `Array.prototype.at` в библиотеке [`core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [Полифил для метода at()](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – возвращает значение на основании проверки.
- {{jsxref("Array.prototype.includes()")}} – проверяет наличие значения в массиве.
- {{jsxref("Array.prototype.indexOf()")}} – возвращает индекс переданного элемента.
