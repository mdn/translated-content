---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`values()`** возвращает новый объект итератора массива **`Array Iterator`**, содержащий значения для каждого индекса в массиве.

## Синтаксис

```
arr.values()
```

## Примеры

### Пример: итерация через цикл `for...of`

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
// ваш браузер должен поддерживать цикл for...of и переменные,
// объявленные через let в циклах for
for (let letter of eArr) {
  console.log(letter);
}
```

### Пример: альтернативный способ итерации

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
