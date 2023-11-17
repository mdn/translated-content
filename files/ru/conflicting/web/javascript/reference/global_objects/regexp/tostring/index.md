---
title: RegExp.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/RegExp/toString
original_slug: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
---

{{JSRef("Global_Objects", "RegExp")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строковое представление исходного кода объекта.

## Синтаксис

```
regexObj.toSource()
RegExp.toSource()
```

### Параметры

Нет.

## Описание

Метод `toSource()` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/RegExp", "RegExp")}}, метод `toSource()` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function RegExp() {
      [native code]
  }
  ```

- Для экземпляров объекта {{jsxref("Global_Objects/RegExp", "RegExp")}}, метод `toSource()` возвращает строковое представление исходного кода.

Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
