---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.log10()`** возвращает десятичный (по основанию 10) логарифм числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{уникальный} \; y \; \text{такой, что} \; 10^y = x</annotation></semantics></math>

## Синтаксис

```
Math.log10(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Если значение `x` меньше 0, возвращаемое значение всегда будет равным {{jsxref("Global_Objects/NaN", "NaN")}}.

Поскольку метод `log10()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.log10()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.log10()`

```js
Math.log10(2); // 0.3010299956639812
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10(100000); // 5
```

## Полифил

Этот метод может эмулироваться следующим способом:

```js
Math.log10 =
  Math.log10 ||
  function (x) {
    return Math.log(x) / Math.LN10;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
