---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

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

| Спецификация                                                                   | Статус             | Комментарии              |
| ------------------------------------------------------------------------------ | ------------------ | ------------------------ |
| ECMAScript 1-е издание.                                                        | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.11.4.3', 'Error.prototype.message')}}             | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-error.prototype.message', 'Error.prototype.message')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
