---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef}}

**`Math.sqrt()`** 함수는 숫자의 제곱근을 반환합니다.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

## 문법

```js
Math.sqrt(x);
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

주어진 숫자에 루트(**√** )를 씌웁니다. 만약 숫자가 음수이면 {{jsxref("NaN")}}를 반환합니다.

## 설명

만약 `x` 가 음수라면 `Math.sqrt()` 함수는 {{jsxref("NaN")}}를 반환합니다.

`sqrt()`는 `Math`의 정적 메서드 이므로 만든 `Math` 객체의 메서드가 아니라 항상 `Math.sqrt()`함수를 사용해야합니다. (`Math`는 생성자가 없습니다.)

## 예제

### `Math.sqrt()`

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
