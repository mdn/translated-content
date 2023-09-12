---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
---

{{JSRef("Global_Objects", "WeakSet")}}

Метод **`delete()`** удаляет указанный элемент из объекта `WeakSet`.

## Синтаксис

```
ws.delete(value);
```

### Параметры

- value
  - : Обязателен. Объект, удаляемый из WeakSet.

### Возвращаемое значение

Если объект был успешно удалён, возвращается true, иначе false.

## Примеры

### Использование метода `delete`

```js
var ws = new WeakSet();
var obj = {};

ws.add(window);

ws.delete(obj); // Вернёт false. Удаляемый объект не найден в WeakSet.
ws.delete(window); // Вернёт true.  Объект успешно удалён.

ws.has(window); // Вернёт false. Объект window был удалён из WeakSet.
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.clear()")}}
