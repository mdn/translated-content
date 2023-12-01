---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`valueOf()`** возвращает примитивное значение объекта {{jsxref("Global_Objects/String", "String")}}.

## Синтаксис

```
str.valueOf()
```

## Описание

Метод `valueOf()` возвращает примитивное значение объекта {{jsxref("Global_Objects/String", "String")}} в виде строкового типа данных. Это значение эквивалентно значению вызова метода {{jsxref("String.prototype.toString()")}}.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Примеры

### Пример: использование метода `valueOf()`

```js
var x = new String("Привет, мир");
console.log(x.valueOf()); // Отобразит 'Привет, мир'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
