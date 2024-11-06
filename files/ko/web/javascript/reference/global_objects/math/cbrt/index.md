---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef}}

**`Math.cbrt()`** 함수는 주어진 수의 세제곱근을 반환합니다. 즉,

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>c</mi>
<mi>b</mi>
<mi>r</mi>
<mi>t</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mroot><mi>x</mi>
<mn>3</mn>
</mroot><mo>=</mo>
<mtext>the unique</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>3</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique}
\; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

## 구문

```js
Math.cbrt(x);
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

주어진 수의 세제곱근.

## 설명

`cbrt()`는 `Math`의 정적 메서드이므로, 사용자가 생성한 `Math` 객체의 메서드로 호출할 수 없고 항상 `Math.cbrt()`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.cbrt()` 사용하기

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948734
```

## 폴리필

모든 <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="TeX">x \geq 0</annotation></semantics></math>에서 <math><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation></semantics></math> 이므로, `Math.cbrt()`는 다음 함수로 폴리필할 수 있습니다.

```js
if (!Math.cbrt) {
  Math.cbrt = (function (pow) {
    return function cbrt() {
      // ensure negative numbers remain negative:
      return x < 0 ? -pow(-x, 1 / 3) : pow(x, 1 / 3);
    };
  })(Math.pow); // localize Math.pow to increase efficiency
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
