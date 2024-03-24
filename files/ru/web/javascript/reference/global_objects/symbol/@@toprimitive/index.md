---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
---

{{JSRef}}

Метод **`[@@toPrimitive]()`** преобразует объект Symbol в примитивное значение.

## Синтаксис

```
Symbol()[Symbol.toPrimitive](hint)
```

### Возвращаемое значение

Примитивное значение указанного объекта Symbol {{jsxref("Symbol")}}.

## Описание

Метод `[@@toPrimitive]()` возвращает примитивное значение объекта Symbol как тип данных Symbol. Аргумент `hint` не используется.

JavaScript вызывает метод `[@@toPrimitive]()` для преобразования объекта в примитив. JavaScript автоматически вызывает метод, когда на месте объекта ожидается примитивное значение.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Symbol.toPrimitive")}}
