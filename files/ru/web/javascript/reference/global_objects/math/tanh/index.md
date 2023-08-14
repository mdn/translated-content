---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.tanh()`** возвращает гиперболический тангенс числа, то есть

<math display="block"><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mi>x</mi></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>-</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}} {e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

## Синтаксис

```
Math.tanh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `tanh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.tanh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.tanh()`

```js
Math.tanh(0); // 0
Math.tanh(Infinity); // 1
Math.tanh(1); // 0.7615941559557649
```

## Полифил

Этот метод может эмулироваться при помощи двух вызовов метода {{jsxref("Math.exp()")}}:

```js
Math.tanh =
  Math.tanh ||
  function (x) {
    if (x === Infinity) {
      return 1;
    } else if (x === -Infinity) {
      return -1;
    } else {
      return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
    }
  };
```

либо при помощи только одного вызова метода {{jsxref("Math.exp()")}}:

```js
Math.tanh =
  Math.tanh ||
  function (x) {
    if (x === Infinity) {
      return 1;
    } else if (x === -Infinity) {
      return -1;
    } else {
      var y = Math.exp(2 * x);
      return (y - 1) / (y + 1);
    }
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
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
