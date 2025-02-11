---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef}}

Метод **`reverse()`** на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

{{InteractiveExample("JavaScript Demo: Array.reverse()")}}

```js interactive-example
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

## Синтаксис

```
array.reverse()
```

### Параметры

Нет.

### Возвращаемое значение

Перевёрнутый массив

## Описание

Метод `reverse()` на месте переставляет элементы массива, на котором он был вызван, изменяет массив и возвращает ссылку на него.

## Примеры

### Пример: обращение порядка элементов в массиве

В следующем примере создаётся массив `myArray`, содержащий три элемента, а затем массив переворачивается.

```js
var myArray = ["один", "два", "три"];
myArray.reverse();

console.log(myArray); // ['три', 'два', 'один']
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
