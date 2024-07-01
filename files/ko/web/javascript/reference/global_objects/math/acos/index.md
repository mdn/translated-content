---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef}}

**`Math.acos()`** 함수는 주어진 수의 아크코사인 값을 숫자(라디안)로 반환합니다. 즉,

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mo stretchy="false">[</mo>
<mrow><mo>-</mo>
<mn>1</mn>
</mrow><mo>;</mo>
<mn>1</mn>
<mo stretchy="false">]</mo>
<mo>,</mo>
<mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arccos</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>∊</mo>
<mo stretchy="false">[</mo>
<mn>0</mn>
<mo>;</mo>
<mi>π</mi>
<mo stretchy="false">]</mo>
<mspace width="thinmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in
[{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique }
\; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## 구문

```js
Math.acos(x);
```

### 매개변수

- `x`
  - : 각도를 나타내는 라디안.

### 반환 값

\-1과 1 사이의 값이 주어진 경우, 그 값의 아크코사인. 아닐 경우 {{jsxref("NaN")}}

## 설명

The `Math.acos()` method returns a numeric value between 0 and π radians for `x` between -1 and 1. If the value of `x` is outside this range, it returns {{jsxref("NaN")}}.

Because `acos()` is a static method of `Math`, you always use it as `Math.acos()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## 예제

### Using `Math.acos()`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

For values less than -1 or greater than 1, `Math.acos()` returns {{jsxref("NaN")}}.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
