---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef}}

**`Math.log2()`** 함수는 숫자를 log2(숫자)로 반환합니다.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) =
\text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## 문법

```js
Math.log2(x);
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

주어진 숫자를 진수로, 2를 밑으로 하는 로그 계산 결과입니다. 만약 숫자가
음수라면 {{jsxref("NaN")}}를 반환합니다.

## 설명

만약 `x` 의 값이 0보다 작다면(음수) 값은 항상 {{jsxref("NaN")}}로
반환합니다.

`log2()`는 `Math`의 정적 메서드이므로
만든 `Math` 객체의 메서드가
아니라 항상 `Math.log2()`함수를
사용해야합니다. (`Math`는 생성자가 없습니다.)

이 함수는 Math.log(x) / Math.log(2)와 같습니다.

따라서 `log2(e)`는 {{jsxref("Math.LOG2E")}}와 같습니다.

그리고 위 함수는 1 / {{jsxref("Math.LN2")}}과 같습니다.

## 폴리 필

폴리 필은 `Math.log2`함수를 모방합니다. 일부 입력(예: 1 <<
29\)에 대해 부정확한 값을 반환할 수 있습니다. 만약 비트마스크로 작업할 경우
{{jsxref("Math.round()")}} 로 감싸주어야 합니다.

```js
if (!Math.log2)
  Math.log2 = function (x) {
    return Math.log(x) * Math.LOG2E;
  };
```

## 예제

### `Math.log2()`

```js
Math.log2(3); // 1.584962500721156
Math.log2(2); // 1
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2(1024); // 10
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Math.log2`의 폴리 필은
  [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)에 존재합니다.
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
