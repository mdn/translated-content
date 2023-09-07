---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`Number.isFinite()`** определяет, является ли переданное значение конечным числом.

## Синтаксис

```
Number.isFinite(testValue)
```

### Параметры

- `testValue`
  - : Значение, проверяемое на конечность.

## Описание

В отличии от глобальной функции {{jsxref("Global_Objects/isFinite", "isFinite()")}}, этот метод принудительно не преобразует параметр в число. Это означает, что он возвращает `true` только для конечных значений числового типа.

## Примеры

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, при использовании глобальной
// функции isFinite('0') было бы true
```

## Полифил

```js
Number.isFinite =
  Number.isFinite ||
  function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Объект {{jsxref("Global_Objects/Number", "Number")}}, которому принадлежит этот метод.
