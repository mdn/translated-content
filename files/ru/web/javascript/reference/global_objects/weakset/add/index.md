---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef("Global_Objects", "WeakSet")}}

Метод **`add()`** добавляет новый объект в конец объекта WeakSet.

## Синтаксис

```
ws.add(value);
```

### Параметры

- value
  - : Обязателен. Объект, добавляемый в WeakSet.

## Примеры

### Использование метода add

```js
var ws = new WeakSet();

ws.add(window); // добавляет объект window в WeakSet

ws.has(window); // true

// Weakset принимает в качестве параметров только объекты
ws.add(1);
// результат в Chrome: "TypeError: Invalid value used in weak set"
// результат в Firefox: "TypeError: 1 is not a non-null object"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
