---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

Метод **`clear()`** удаляет все элементы из объекта `Set`.

## Синтаксис

```
mySet.clear();
```

### Возвращаемое значение

{{jsxref("undefined")}}.

## Примеры

### Использование метода `clear`

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size; // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size; // 0
mySet.has("bar"); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
