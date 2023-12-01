---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.cosh()`** возвращает гиперболический косинус числа, который может быть выражен через {{jsxref("Math.E", "число e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

## Синтаксис

```
Math.cosh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `cosh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.cosh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.cosh()`

```js
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Полифил

Этот метод может эмулироваться при помощи двух вызовов метода {{jsxref("Math.exp()")}}:

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
```

либо при помощи только одного вызова метода {{jsxref("Math.exp()")}}:

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    var y = Math.exp(x);
    return (y + 1 / y) / 2;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.acosh()")}} {{experimental_inline}}
- {{jsxref("Math.asinh()")}} {{experimental_inline}}
- {{jsxref("Math.atanh()")}} {{experimental_inline}}
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
