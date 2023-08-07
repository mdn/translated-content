---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.log()`** возвращает натуральный (по основанию {{jsxref("Math.E", "e")}}) логарифм числа, то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{уникальный} \; y \; \text{такой, что} \; e^y = x</annotation></semantics></math>

## Синтаксис

```
Math.log(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Если значение `x` меньше 0, возвращаемое значение всегда будет равным {{jsxref("Global_Objects/NaN", "NaN")}}.

Поскольку метод `log()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.log()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.log()`

```js
Math.log(-1); // NaN, выход за пределы диапазона
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### Пример: использование метода `Math.log()` с различными основаниями

Следующая функция возвращает логарифм из `y` по основанию `x` (то есть, <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Если вы выполните `getBaseLog(10, 1000)`, функция вернёт `2.9999999999999996` из-за особенностей округления чисел с плавающей запятой, что довольно близко к правильному ответу — 3.

## Спецификации

| Спецификация                                        | Статус             | Комментарии                                            |
| --------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                             | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.10', 'Math.log')}} | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.log', 'Math.log')}}    | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
- {{jsxref("Math.pow()")}}
