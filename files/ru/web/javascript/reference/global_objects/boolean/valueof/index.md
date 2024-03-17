---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

## Сводка

Метод **`valueOf()`** возвращает примитивное значение объекта {{jsxref("Global_Objects/Boolean", "Boolean")}}.

## Синтаксис

```
bool.valueOf()
```

### Параметры

Нет.

## Описание

Метод `valueOf` объекта {{jsxref("Global_Objects/Boolean", "Boolean")}} возвращает примитивное значение объекта или литерала логического типа.

Этот метод обычно вызывается внутри движка JavaScript, а не явно в коде.

## Примеры

### Пример: использование `valueOf`

```js
x = new Boolean();
myVar = x.valueOf(); // присваивает false переменной myVar
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.valueOf()")}}
