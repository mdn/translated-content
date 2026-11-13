---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

{{JSRef}}

Метод **`keys()`** возвращает новый **итератор массива** **`Array Iterator`**, содержащий ключи каждого индекса в массиве.

{{InteractiveExample("JavaScript Demo: Array.keys()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## Синтаксис

```
arr.keys()
```

## Примеры

### Пример: базовое использование

```js
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Пример: итератор, возвращаемый методом `keys()`, не пропускает дырки в массиве

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // [0, 2]
console.log(denseKeys); // [0, 1, 2]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Iteration protocols](/ru/docs/Web/JavaScript/Reference/Iteration_protocols)
