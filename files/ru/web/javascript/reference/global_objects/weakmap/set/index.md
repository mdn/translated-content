---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

Метод **`set()`** добавляет новый элемент с указанными ключом и значением в объект WeakMap.

## Синтаксис

```
wm.set(key, value);
```

### Параметры

- key
  - : Обязателен. Ключ добавляемого в WeakMap объект элемента.
- value
  - : Обязателен. Значение добавляемого в WeakMap объект элемента.

### Возвращаемое значение

Объект `WeakMap.`

## Примеры

### Использование метода `set`

```js
var wm = new WeakMap();
var obj = {};

// Добавляет новый элемент в объект WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Обновляет элемент в объекте WeakMap
wm.set(obj, "baz");
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Firefox-specific notes

- Prior to Firefox 33, `WeakMap.prototype.set` returned `undefined` and was not chainable. This has been fixed ({{bug(1031632)}}). The behavior can be found in Chrome/v8 as well ([issue](https://code.google.com/p/v8/issues/detail?id=3410)).

## Смотрите также

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
