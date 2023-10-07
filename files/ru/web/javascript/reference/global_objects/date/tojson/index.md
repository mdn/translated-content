---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef("Global_Objects", "Date")}}

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

| Спецификация                                                               | Статус             | Комментарии                                              |
| -------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.44', 'Date.prototype.toJSON')}}           | {{Spec2('ES5.1')}} | Изначальное определение. Реализована в JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} | {{Spec2('ES6')}}   |                                                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
