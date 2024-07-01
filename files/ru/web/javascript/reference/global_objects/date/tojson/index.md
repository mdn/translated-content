---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

## Сводка

Метод **`toJSON()`** возвращает представление объекта {{jsxref("Global_Objects/Date", "Date")}} в виде {{Glossary("JSON")}}.

## Синтаксис

```
dateObj.toJSON()
```

## Описание

Экземпляры объекта {{jsxref("Global_Objects/Date", "Date")}} ссылаются на определённый момент времени. Вызов метода `toJSON()` вернёт строку, отформатированную в JSON (при помощи метода {{jsxref("Date.prototype.toISOString()", "toISOString()")}}), представляющую значение объекта {{jsxref("Global_Objects/Date", "Date")}}. Этот метод, как правило, предназначен для сериализации объектов {{jsxref("Global_Objects/Date", "Date")}} в JSON.

## Примеры

### Пример: использование метода `toJSON()`

```js
var jsonDate = new Date().toJSON();
var backToDate = new Date(jsonDate);

console.log("Сериализованный объект даты: " + jsonDate);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
