---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.cbrt()`** возвращает кубический корень числа, то есть

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{уникальный} \; y \; \text{такой, что} \; y^3 = x</annotation></semantics></math>

Синтаксис

```
Math.cbrt(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `cbrt()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.cbrt()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.cbrt()`

```js
Math.cbrt(-1); // -1
Math.cbrt(0); // 0
Math.cbrt(1); // 1

Math.cbrt(2); // 1.2599210498948734
```

## Полифил

Для всех <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="TeX">x \geq 0</annotation></semantics></math>, мы имеем <math><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:

```js
Math.cbrt =
  Math.cbrt ||
  function (x) {
    if (x === 0 || x === +1 / 0 || x === -1 / 0 || x !== x) {
      return x;
    }
    var a = Math.abs(x);
    var y = Math.exp(Math.log(a) / 3);
    // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
    return (x / a) * (y + (a / (y * y) - y) / 3);
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
