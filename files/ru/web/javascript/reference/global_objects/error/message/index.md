---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef}}

## Сводка

Свойство **`message`** представляет человеко-читаемое описание ошибки.

## Описание

Это свойство содержит краткое описание ошибки, если оно доступно или было установлено. [SpiderMonkey](/ru/docs/Mozilla/Projects/SpiderMonkey) широко использует свойство `message` для исключений. Свойство `message` в сочетании со свойством {{jsxref("Error.prototype.name", "name")}} используется методом {{jsxref("Error.prototype.toString()")}} для создания строкового представления ошибки.

По умолчанию, свойство `message` является пустой строкой, но это поведение может быть переопределено для экземпляра путём указания сообщения первым аргументом в конструкторе объекта {{jsxref("Global_Objects/Error", "Error")}}.

## Примеры

### Пример: выбрасывание собственной ошибки

```js
var e = new Error("Невозможно разобрать входные данные");
// e.message равно 'Невозможно разобрать входные данные'
throw e;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
