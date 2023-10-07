---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.atanh()`** возвращает гиперболический арктангенс числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ уникальный } \; y \; \text{такой, что} \; \tanh(y) = x</annotation></semantics></math>

## Синтаксис

```
Math.atanh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `atanh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.atanh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

Для значений, меньших -1 или больших 1, метод `Math.atanh()` возвращает {{jsxref("NaN")}}.

## Полифил

Для <math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&#x3C;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation></semantics></math>, мы имеем <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.acosh()")}} {{experimental_inline}}
- {{jsxref("Math.asinh()")}} {{experimental_inline}}
- {{jsxref("Math.cosh()")}} {{experimental_inline}}
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
