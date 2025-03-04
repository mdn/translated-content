---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

Метод **`add()`** добавляет новый элемент с заданным значением в конец объекта `Set`.

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Синтаксис

```
mySet.add(value);
```

### Параметры

- value
  - : Обязательное. Значение элемента, добавляемого в объект `Set`.

### Возвращаемое значение

Объект `Set`.

## Примеры

### Использование метода `add`

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // можно делать цепочки

console.log(mySet);
// Set [1, 5, "some text"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
