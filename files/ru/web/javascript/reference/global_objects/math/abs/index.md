---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.abs()`** возвращает абсолютное значение числа. то есть

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

## Синтаксис

```
Math.abs(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Поскольку метод `abs()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.abs()`, а не пытаться вызывать метод на созданном объекте `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: поведение метода `Math.abs()`

Метод вернёт {{jsxref("NaN")}}, если в него передать нечисловую строку или значение {{jsxref("undefined")}}/ничего не передавать. Метод вернёт 0, если в него передать значение {{jsxref("null")}}.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Спецификации

{{Specifications}}

## <br>Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
