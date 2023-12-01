---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.sqrt()`** возвращает квадратный корень числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{уникальный} \; y \geq 0 \; \text{такой, что} \; y^2 = x</annotation></semantics></math>

## Синтаксис

```
Math.sqrt(x)
```

### Параметры

- `x`
  - : Число.

### Возвращаемое значение

Квадратный корень заданного числа. Если число отрицательное, то вернётся {{jsxref("NaN")}}.

## Описание

Если значение `x` отрицательно, метод `Math.sqrt()` вернёт {{jsxref("NaN")}}.

Поскольку метод `sqrt()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.sqrt()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.sqrt()`

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.cbrt()")}} {{experimental_inline}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
