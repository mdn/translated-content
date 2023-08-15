---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.sinh()`** возвращает гиперболический синус числа, который может быть выражен через {{jsxref("Math.E", "число e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

## Синтаксис

```
Math.sinh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `sinh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.sinh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.sinh()`

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## Полифил

Этот метод может эмулироваться при помощи двух вызовов метода {{jsxref("Math.exp()")}}:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  };
```

либо при помощи только одного вызова метода {{jsxref("Math.exp()")}}:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    var y = Math.exp(x);
    return (y - 1 / y) / 2;
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
- {{jsxref("Math.cosh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
