---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.acosh()`** возвращает гиперболический арккосинус числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ уникальный } \; y \geq 0 \; \text{такой, что} \; \cosh(y) = x</annotation></semantics></math>

## Синтаксис

```
Math.acosh(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `acosh()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.acosh()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0); // NaN
Math.acosh(0.5); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
```

Для значений, меньших 1, метод `Math.acosh()` возвращает {{jsxref("NaN")}}.

## Полифил

Для всех <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x \geq 1</annotation></semantics></math>, мы имеем <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:

```js
Math.acosh =
  Math.acosh ||
  function (x) {
    return Math.log(x + Math.sqrt(x * x - 1));
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.asinh()")}} {{experimental_inline}}
- {{jsxref("Math.atanh()")}} {{experimental_inline}}
- {{jsxref("Math.cosh()")}} {{experimental_inline}}
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
