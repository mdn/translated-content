---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef("Global_Objects", "Boolean")}}

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

| Спецификация                                                                       | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.3', 'Boolean.prototype.valueOf')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.valueOf()")}}
