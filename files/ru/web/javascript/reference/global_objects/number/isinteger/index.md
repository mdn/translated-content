---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef("Global_Objects", "Number")}}

Метод **`Number.isInteger()`** определяет, является ли переданное значение целым числом.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Синтаксис

```
Number.isInteger(value)
```

### Параметры

- `value`
  - : Значение, проверяемое на целочисленность.

### Возвращаемое значение

{{jsxref("Boolean")}} сообщающий о том, является ли переданное значение целочисленным числом.

## Описание

Если целевое значение является целым числом, возвращает `true`. Если значение {{jsxref("NaN")}} или {{jsxref("Infinity")}}, то возвращает `false`. Метод также возвращает `true`, если это вещественное число с точкой, которое может быть представлено в целочисленном виде.

## Примеры

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
```

## Полифил

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Объект {{jsxref("Number")}}, которому принадлежит этот метод.
