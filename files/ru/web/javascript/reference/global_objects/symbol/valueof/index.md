---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
---

{{JSRef}}

Метод **`valueOf()`** возвращает примитивное значение символьного объекта.

## Синтаксис

```
Symbol().valueOf();
```

## Описание

Метод `valueOf` объекта {{jsxref("Symbol")}} возвращает примитивное значение символьного объекта как экземпляр типа Symbol.

JavaScript вызывает метод `valueOf` для конвертации объекта в примитивное значение. Вам нечасто потребуется вызывать метод `valueOf` самостоятельно; JavaScript автоматически вызывает его, когда натыкается на объект там, где ожидался примитив.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.valueOf()")}}
