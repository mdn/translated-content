---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.asin()`** возвращает арксинус числа (в радианах), то есть

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ уникальный } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{такой, что} \; \sin(y) = x</annotation></semantics></math>

## Синтаксис

```
Math.asin(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Метод `Math.asin()` возвращает числовое значение между <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> и <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> радианами для значения `x`, лежащего в диапазоне от -1 до 1. Метод вернёт {{jsxref("NaN")}}, если значение `x` выйдет за этот диапазон.

Поскольку метод `asin()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.asin()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.asin()`

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-pi/2)
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1); // 1.570796326794897 (pi/2)
Math.asin(2); // NaN
```

Для значений, меньших -1 или больших 1, метод `Math.asin()` возвращает {{jsxref("NaN")}}.

## Спецификации

| Спецификация                                        | Статус             | Комментарии                                            |
| --------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                             | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.3', 'Math.asin')}} | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.asin', 'Math.asin')}}  | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
