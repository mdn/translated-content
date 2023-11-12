---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.hypot()`** возвращает квадратный корень суммы квадратов своих аргументов, то есть

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)} = \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

## Синтаксис

```
Math.hypot([value1[, value2[, ...]]])
```

### Параметры

- `value1, value2, ...`
  - : Числа.

## Описание

Поскольку метод `hypot()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.hypot()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

При вызове без аргументов результатом вызова будет значение +0.

Если хотя бы один из аргументов не может быть преобразован в число, результатом будет {{jsxref("Global_Objects/NaN", "NaN")}}.

При вызове с одним аргументом, метод `Math.hypot()` то же самое значение, что и метод `Math.abs()`.

## Примеры

### Пример: использование метода `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, то же самое, что и Math.abs(-3)
```

## Полифил

Этот метод может эмулироваться следующим образом:

```js
Math.hypot =
  Math.hypot ||
  function () {
    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
      if (arguments[i] === Infinity || arguments[i] === -Infinity) {
        return Infinity;
      }
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
