---
title: Date.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toSource
---

{{JSRef("Global_Objects", "Date")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строковое представление исходного кода объекта.

## Синтаксис

```
dateObj.toSource()
Date.toSource()
```

### Параметры

Нет.

## Описание

Метод `toSource()` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Date", "Date")}} метод `toSource()` возвращает следующую строку, указывающую, что исходный код объекта недоступен:

  ```js
  function Date() {
      [native code]
  }
  ```

- Для экземпляров {{jsxref("Global_Objects/Date", "Date")}}, метод `toSource()` возвращает строку, представляющую их исходный код.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
