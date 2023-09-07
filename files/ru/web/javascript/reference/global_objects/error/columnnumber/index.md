---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Свойство **`columnNumber`** содержит номер колонки в строке файла, в котором возникла эта ошибка.

## Примеры

### Пример: использование `columnNumber`

```js
var e = new Error("Невозможно разобрать входные данные");
throw e;
console.log(e.columnNumber); // 0
```

## Спецификации

Не является частью какой-либо спецификации. Не стандартно.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
