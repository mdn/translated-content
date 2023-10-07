---
title: Number.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Number/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Number/toSource
---

{{JSRef("Global_Objects", "Number")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строку, представляющую исходный код объекта.

## Синтаксис

```
numObj.toSource()
Number.toSource()
```

### Параметры

Нет.

## Описание

Метод `toSource` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Number", "Number")}} метод `toSource` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function Number() {
      [native code]
  }
  ```

- Для экземпляров {{jsxref("Global_Objects/Number", "Number")}}, метод `toSource` возвращает строку, представляющую их исходный код.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
