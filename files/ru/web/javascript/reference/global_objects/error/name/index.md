---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef}}

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

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
