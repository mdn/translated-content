---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.log()`** 정적 메서드는 숫자의 자연 로그(밑이 [e](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/E))를 반환합니다. 즉, 아래와 같습니다.

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique } y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample}}

```js interactive-example
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Expected output: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Expected output: 4

```

## 구문

```js-nolint
Math.log(x)
```

### 매개변수

- `x`
  - : 0 이상의 수

### 반환 값

`x`의 자연 로그(밑이 [e](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/E)). 만약 `x`가 ±0일 경우 [`-Infinity`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY)을 반환하며, `x < 0` 이라면 {{jsxref("NaN")}}을 반환합니다.

## 설명

`log()`는 `Math`의 정적 메서드이기 때문에, 항상 `Math.log()`로 사용합니다. 생성한 `Math` 객체의 메서드로 사용하지 않습니다 (`Math`는 생성자가 아닙니다).

2나 10의 자연 로그가 필요하다면, {{jsxref("Math.LN2")}}나 {{jsxref("Math.LN10")}} 상수를 사용하세요. 밑이 2나 10인 로그가 필요하다면, {{jsxref("Math.log2()")}} 혹은 {{jsxref("Math.log10()")}}을 사용하세요. 다른 밑의 로그가 필요하다면, 아래 예시처럼 `Math.log(x) / Math.log(otherBase)`를 사용하세요. 이 경우 `1 / Math.log(otherBase)`를 미리 계산해 두는 것이 좋습니다. `Math.log(x) * constant` 곱셈이 훨씬 더 빠르기 때문입니다.

1에 매우 가까운 양수의 경우 정밀도 손실이 발생할 수 있어 자연 로그의 정확도가 떨어질 수 있습니다. 이런 경우에는 {{jsxref("Math.log1p")}}를 대신 사용하는 것이 좋습니다.

## 예제

### Math.log() 사용하기

다음 함수는 밑 `x`의 `y`의 로그를 반환합니다. (예: <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>)

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

`getBaseLog(10, 1000)`을 실행하면 `2.9999999999999996`을 반환합니다. 이는 부동 소수점 반올림때문인데, 실제 답인 3과 매우 근접합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
