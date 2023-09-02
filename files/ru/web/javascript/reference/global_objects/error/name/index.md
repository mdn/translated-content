---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Свойство **`name`** представляет имя типа ошибки. Начальное значение равно строке `"Error"`.

## Описание

По умолчанию, экземпляры {{jsxref("Error")}} имеют имя `"Error"`. Свойство `name`, вместе со свойством {{jsxref("Error.prototype.message", "message")}}, используется методом {{jsxref("Error.prototype.toString()")}} для создания строкового представления ошибки.

## Примеры

### Пример: выбрасывание собственной ошибки

```js
var e = new Error("Неверные входные данные"); // e.name равно 'Error'

e.name = "ParseError";
throw e;
// e.toString() вернёт 'ParseError: Неверные входные данные'
```

## Спецификации

| Спецификация                                                             | Статус             | Комментарии              |
| ------------------------------------------------------------------------ | ------------------ | ------------------------ |
| ECMAScript 1-е издание.                                                  | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.11.4.2', 'Error.prototype.name')}}          | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-error.prototype.name', 'Error.prototype.name')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
