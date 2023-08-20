---
title: Error.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Error/toSource
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Метод **`toSource()`** возвращает код, вычисление которого приведёт к этой же ошибке.

## Синтаксис

```
e.toSource()
```

## Описание

Вызов метода `toSource` на экземпляре класса {{jsxref("Error")}} (включая _[родные ошибки](/ru/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)_) вернёт строку, содержащую исходный код ошибки. Эта строка может быть выполнена для создания (приблизительно) эквивалентного объекта. Естественно, строка, содержащая исходный код, следует структуре конструктора объекта {{jsxref("Error")}}. Например:

```js
(new name(message, fileName, lineNumber))
```

здесь атрибуты относятся к соответствующим свойствам экземпляра ошибки.

> **Примечание:** имейте в виду, что свойства, используемые методом `toSource` при создании строки, изменяемы и могут неточно отражать функцию, с помощью которой создан экземпляр ошибки, или имя файла, или номер строки, где возникла ошибка.

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.fileName")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}}
