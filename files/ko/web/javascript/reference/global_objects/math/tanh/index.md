---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
---

{{JSRef}}

**`Math.tanh()`** 함수는 쌍곡탄젠트 값을 반환합니다. 수식으로는 아래와 같습니다.

<math display="block"><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mi>x</mi></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>-</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}} {e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-tanh.html")}}

## Syntax

```js
Math.tanh(x);
```

### 파라미터

- `x`
  - : 숫자.

### 반환 값

주어진 수의 쌍곡탄젠트 값

## 설명

`tanh()` 은 `Math`의 정적 메서드이므로 사용자가 만든 `Math` 객체의 메서드가 아닌 항상 `Math.tanh()` 으로 사용합니다 (`Math` 는 생성자가 아닙니다.).

## 예

### Using `Math.tanh()`

```js
Math.tanh(0); // 0
Math.tanh(Infinity); // 1
Math.tanh(1); // 0.7615941559557649
```

## Polyfill

This can be emulated with the help of the {{jsxref("Math.exp()")}} function:

```js
Math.tanh =
  Math.tanh ||
  function (x) {
    var a = Math.exp(+x),
      b = Math.exp(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
  };
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
