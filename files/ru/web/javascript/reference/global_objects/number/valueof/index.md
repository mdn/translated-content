---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef("Global_Objects", "Number")}}

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

| Спецификация                                                                     | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                          | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.4', 'Number.prototype.valueOf')}}               | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toSource()")}}
