---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Свойство **`fileName`** содержит путь к файлу, в котором возникла эта ошибка.

## Описание

Это нестандартное свойство содержит путь к файлу, в котором возникла эта ошибка. Если доступ к нему получен в контексте отладчика, например, Инструментов разработчика Firefox, вернётся строка «debugger eval code».

## Примеры

### Пример: использование `fileName`

```js
var e = new Error("Невозможно разобрать входные данные");
throw e;
// e.fileName может выглядеть так "file:///C:/example.html"
```

## Спецификации

Не является частью какой-либо спецификации. Не стандартно.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
