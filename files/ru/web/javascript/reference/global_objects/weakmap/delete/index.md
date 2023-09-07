---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

`Метод delete()` удаляет элемент из объекта WeakMap.

## Синтаксис

```
wm.delete(key);
```

### Параметры

- key
  - : Обязателен. Ключ элемента, который будет уделён из объекта WeakMap.

### Возвращаемое значение

Возвращает true если элемент из объекта WeakMap удалён успешно.

## Примеры

### Использование метода delete

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // Возвращает true. Успешно удалён.

wm.has(window); // Возвращает false. Объекта window больше нет в WeakMap.
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Firefox-specific notes

- Prior to SpiderMonkey 38, this method threw a {{jsxref("TypeError")}} when the `key` parameter was not an object. This has been fixed in version 38 and later to return `false` as per latest ES6 standard ({{bug(1127827)}}).

## Смотрите также

- {{jsxref("WeakMap")}}
