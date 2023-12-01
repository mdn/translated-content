---
title: String.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String/toString
original_slug: Web/JavaScript/Reference/Global_Objects/String/toSource
---

{{JSRef("Global_Objects", "String")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строковое представление исходного кода объекта.

## Синтаксис

```
String.toSource()
str.toSource()
```

## Описание

Метод `toSource()` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/String", "String")}} метод `toSource()` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function String() {
      [native code]
  }
  ```

- Для экземпляров объекта {{jsxref("Global_Objects/String", "String")}} или строковых литералов, метод `toSource()` возвращает строковое представление исходного кода.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
