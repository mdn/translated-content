---
title: Array.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Array/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Array/toSource
---

{{JSRef("Global_Objects", "Array")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает строковое представление исходного кода массива.

## Синтаксис

```
arr.toSource()
```

### Параметры

Нет.

## Описание

Метод `toSource` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Array", "Array")}}, метод `toSource` возвращает следующую строку, указывающую, что исходный код недоступен:

  ```js
  function Array() {
      [native code]
  }
  ```

- Для экземпляров класса {{jsxref("Global_Objects/Array", "Array")}}, метод `toSource` возвращает строковое представление исходного кода.

Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде. Вы можете вызвать `toSource` во время отладки для просмотра содержимого массива.

## Примеры

### Пример: рассмотрение исходного кода массива

Для просмотра исходного кода массива:

```js
var alpha = new Array('a', 'b', 'c');

alpha.toSource();   // вернёт ['a', 'b', 'c']
```

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
