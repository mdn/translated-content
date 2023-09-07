---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
---

{{JSRef}}

**`Math.sinh()`** 함수(쌍곡선 함수)는 사인값을 반환합니다 이 값은 아래와같은 식을통해서 표현할 수 있습니다.{{jsxref("Math.E", "constant e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## 구문

```js
Math.sinh(x);
```

### Parameters

- `x`
  - : 숫자.

### 반환 값

사인값.

## 설명

`sinh()` 는 `Math` 의 정적 함수이기 때문에, 자바스크립트 어디든 `Math.sinh()` 를 사용할 수 있습니다, 따라서 `Math` 오브젝트를 생성해서는 안됩니다. (`Math` 는 constructor(생성자) 가 아닙니다.).

## 예제

### `Math.sinh()` 사용하기

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## 폴리필

This can be emulated with the help of the {{jsxref("Math.exp()")}} function:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  };
```

or using only one call to the {{jsxref("Math.exp()")}} function:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    var y = Math.exp(x);
    return (y - 1 / y) / 2;
  };
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
