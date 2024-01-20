---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef}}

## Сводка

Метод **`valueOf()`** возвращает примитивное значение объекта {{jsxref("Global_Objects/Number", "Number")}}.

## Синтаксис

```
numObj.valueOf()
```

### Параметры

Нет.

## Описание

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Примеры

### Пример: использование `valueOf()`

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toSource()")}}
