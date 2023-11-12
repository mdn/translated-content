---
title: WeakMap.prototype.clear()
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features
original_slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
---

{{JSRef}}

Метод **`clear()`** удаляет все элементы из объекта WeakMap, но он больше не является частью ECMAScript и его реализаций.

## Синтаксис

```
wm.clear();
```

## Примеры

### Использование метода `clear`

```js
var wm = new WeakMap();
var obj = {};

wm.set(obj, "foo");
wm.set(window, "bar");

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj)  // false
wm.has(window)  // false
```

## Спецификации

Не входит ни в одну текущую спецификацию или черновик. Этот метод был частью черновика ECMAScript 6, до 28 ревизии (версия от 14 октября, 2014), но был удалён в последующих версиях черновика. В финальном стандарте его не будет.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("WeakMap")}}
