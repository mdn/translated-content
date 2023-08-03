---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
---

{{JSRef("Global_Objects", "WeakSet")}}

Метод **`has()`** определяет, содержит ли WeakSet определённый элемент, возвращая в зависимости от этого true или false.

## Синтаксис

```
ws.has(value);
```

### Параметры

- value
  - : Обязателен. Искомый объект.

### Возвращаемое значение

- Boolean
  - : Если объект был найден в WeakSet вернёт true, иначе false.

## Примеры

### Использование метода `has`

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window); // вернёт true
mySet.has(obj); // вернёт false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
