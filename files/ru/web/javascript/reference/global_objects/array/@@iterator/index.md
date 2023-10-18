---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Начальное значение свойства **`@@iterator`** является тем же самым функциональным объектом, что и начальное значение, возвращаемое методом {{jsxref("Array.prototype.values()", "values()")}}.

## Синтаксис

```
arr[Symbol.iterator]()
```

## Примеры

### Пример: итерация посредством цикла `for...of`

```js
var arr = ["w", "y", "k", "o", "p"];
// ваш браузер должен поддерживать цикл for..of
// и переменные с областью видимости let в циклах for
for (let letter of arr) {
  console.log(letter);
}
```

### Пример: альтернативный способ итерации

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
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
- {{jsxref("Array.prototype.values()")}}
