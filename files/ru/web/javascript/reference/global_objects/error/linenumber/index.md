---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Свойство **`lineNumber`** содержит номер строки в файле, в котором возникла эта ошибка.

## Примеры

### Пример: использование `lineNumber`

```js
var e = new Error("Невозможно разобрать входные данные");
throw e;
console.log(e.lineNumber); // 2
```

### Пример: альтернативный пример с использованием события `error`

```js
window.addEventListener("error", function (e) {
  console.log(e.lineno); // 5
});
var e = new Error("Невозможно разобрать входные данные");
throw e;
```

Это стандарт и он поддерживается в Chrome, Firefox и, вероятно, много где ещё.

## Спецификации

Не является частью какой-либо спецификации. Не стандартно.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
