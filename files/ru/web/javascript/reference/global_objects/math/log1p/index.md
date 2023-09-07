---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.log1p()`** возвращает натуральный (по основанию {{jsxref("Math.E", "e")}}) логарифм 1 + числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

## Синтаксис

```
Math.log1p(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Если значение `x` меньше -1, возвращаемое значение всегда будет равным {{jsxref("Global_Objects/NaN", "NaN")}}.

Поскольку метод `log1p()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.log1p()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.log1p()`

```js
Math.log1p(1); // 0.6931471805599453
Math.log1p(0); // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Полифил

Этот метод может эмулироваться следующим способом:

```js
Math.log1p =
  Math.log1p ||
  function (x) {
    return Math.log(1 + x);
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
