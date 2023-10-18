---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

Метод **`has()`** возвращает булевое значение, которое указывает на то существует элемент с таким ключом в объекте WeakMap или нет.

## Синтаксис

```
wm.has(key);
```

### Параметры

- key
  - : Обязателен. Ключ элемента, существование которого необходимо проверить в объекте WeakMap.

### Возвращаемое значение

- Boolean
  - : Возвращает `true` если элемент с указанным ключом существует в объекте WeakMap, если нет — false.

## Примеры

### Использование метода `has`

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // возвращает true
wm.has("baz"); // возвращает false
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Firefox-specific notes

- Prior to SpiderMonkey 38, this method threw a {{jsxref("TypeError")}} when the `key` parameter was not an object. This has been fixed in version 38 and later to return `false` as per latest ES6 standard ({{bug(1127827)}}).

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
