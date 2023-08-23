---
title: Function.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Function/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Function/toSource
---

{{JSRef("Global_Objects", "Function")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строку, представляющую исходный код объекта.

## Синтаксис

```
function.toSource();
Function.toSource();
```

### Параметры

Нет.

## Описание

Метод `toSource` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Function", "Function")}} метод `toSource` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function Function() {
      [native code]
  }
  ```

- Для пользовательских функций, метод `toSource` возвращает исходный код JavaScript, определяющий объект как строку.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде. Вы можете вызвать `toSource` во время отладки для изучения содержимого объекта.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
