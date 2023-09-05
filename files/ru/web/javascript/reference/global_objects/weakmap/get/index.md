---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

Метод **`get()`** возвращает элемент из объекта WeakMap,

## Синтаксис

```
wm.get(key);
```

### Параметры

- key
  - : Обязателен. Ключ элемента, который будет возвращён из объекта WeakMap.

### Возвращаемое значение

Возвращает элемент по указанному ключу или undefined, если ключ не может быть найден в объекте WeakMap.

## Примеры

### Использование метода get

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Возвращает "foo".
wm.get("baz"); // Возвращает undefined.
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Firefox-specific notes

- Prior to SpiderMonkey 38, this method threw a {{jsxref("TypeError")}} when the key parameter was not an object. However, the latest ES6 standard specifies to return `undefined` instead. Furthermore, `WeakMap.prototype.get` accepted an optional second argument as a fallback value, which is not part of the standard. Both non-standard behaviors are removed in version 38 and higher ({{bug(1127827)}}).

## Смотрите также

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
