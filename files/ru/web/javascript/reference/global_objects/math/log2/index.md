---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.log2()`** возвращает двоичный (по основанию 2) логарифм числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{уникальный} \; y \; \text{такой, что} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Синтаксис

```
Math.log2(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Если значение `x` меньше 0, возвращаемое значение всегда будет равным {{jsxref("Global_Objects/NaN", "NaN")}}.

Поскольку метод `log2()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.log2()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.log2()`

```js
Math.log2(3); // 1.584962500721156
Math.log2(2); // 1
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2(1024); // 10
```

## Полифил

Этот метод может эмулироваться следующим способом:

```js
Math.log2 =
  Math.log2 ||
  function (x) {
    return Math.log(x) / Math.LN2;
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
