---
title: Boolean.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Boolean/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
---

{{JSRef("Global_Objects", "Boolean")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строку, представляющую исходный код объекта.

## Синтаксис

```
booleanObj.toSource()
Boolean.toSource()
```

### Параметры

Нет.

## Описание

Метод `toSource` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Boolean", "Boolean")}} метод `toSource` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function Boolean() {
      [native code]
  }
  ```

- Для экземпляров класса {{jsxref("Global_Objects/Boolean", "Boolean")}} метод `toSource` возвращает строковое представление исходного кода.

Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}} {{non-standard_inline}}
