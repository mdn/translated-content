---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef}}

Метод **`reverse()`** на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

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
