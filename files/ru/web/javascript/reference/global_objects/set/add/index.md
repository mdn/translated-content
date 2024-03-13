---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

Метод **`add()`** добавляет новый элемент с заданным значением в конец объекта `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

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

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
