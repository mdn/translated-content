---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.asinh()`** возвращает гиперболический арксинус числа, то есть

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ уникальный } \; y \; \text{такой, что} \; \sinh(y) = x</annotation></semantics></math>

## Синтаксис

```
Math.asinh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `asinh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.asinh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.asinh()`

```js
Math.asinh(1); // 0.881373587019543
Math.asinh(0); // 0
```

## Полифил

Мы имеем <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arsinh} (x) = \ln \left(x + \sqrt{x^{2} + 1} \right)</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:

```js
Math.asinh =
  Math.asinh ||
  function (x) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.log(x + Math.sqrt(x * x + 1));
    }
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.acosh()")}} {{experimental_inline}}
- {{jsxref("Math.atanh()")}} {{experimental_inline}}
- {{jsxref("Math.cosh()")}} {{experimental_inline}}
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
