---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
---

{{JSRef}}

## Сводка

Метод **`Math.exp()`** возвращает значение выражения `ex`, где `x` — аргумент метода, а `e` — {{jsxref("Math.E", "число Эйлера", "", 1)}}, основание натурального логарифма.

## Синтаксис

```
Math.exp(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `exp()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.exp()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.exp()`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}} {{experimental_inline}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
