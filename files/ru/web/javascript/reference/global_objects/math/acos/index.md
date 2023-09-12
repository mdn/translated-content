---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.acos()`** возвращает арккосинус числа (в радианах), то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ уникальный } \; y \in [0; \pi] \, \text{такой, что} \; \cos(y) = x</annotation></semantics></math>

## Синтаксис

```
Math.acos(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Метод `Math.acos()` возвращает числовое значение между 0 и π радианами для значения `x`, лежащего в диапазоне от -1 до 1. Метод вернёт {{jsxref("NaN")}}, если значение `x` выйдет за этот диапазон.

Поскольку метод `acos()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.acos()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.acos()`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

Для значений, меньших -1 или больших 1, метод `Math.acos()` возвращает {{jsxref("NaN")}}.

## Спецификации

| Спецификация                                        | Статус             | Комментарии                                            |
| --------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                             | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.2', 'Math.acos')}} | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.acos', 'Math.acos')}}  | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
