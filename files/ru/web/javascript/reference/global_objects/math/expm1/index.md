---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.expm1()`** возвращает значение выражения `ex - 1`, где `x` — аргумент метода, а {{jsxref("Math.E", "e", "", 1)}} — основание натурального логарифма.

## Синтаксис

```
Math.expm1(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `expm1()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.expm1()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.expm1()`

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
```

## Полифил

Этот метод может эмулироваться при помощи метода {{jsxref("Math.exp()")}}:

```js
Math.expm1 =
  Math.expm1 ||
  function (x) {
    return Math.exp(x) - 1;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
