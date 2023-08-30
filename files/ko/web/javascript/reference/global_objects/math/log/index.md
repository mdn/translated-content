---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef}}

**`Math.log()`** 함수는 자연 로가리즘은 ({{jsxref("Math.E", "e")}} 를 기초) 의 수를 계산합니다, 이건 다음의

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{고유값} \; y \; \text{같이} \; e^y = x</annotation></semantics></math>

자바스크립트 **`Math.log()`** 함수는 _ln(x)_ 수학적으로 같습니다.

## 문법

```js
Math.log(x);
```

### 인자

- `x`
  - : 실수값.

### 반환값

자연 로가리즘은 ({{jsxref("Math.E", "e")}} 를 기초) 실수값으로 줍니다. 마이너스 실수값, {{jsxref("NaN")}} 계산됩니다.

## 설명

만일 값 `x` 가 마이너스라면, 항상 다음값이 계산됩니다 {{jsxref("NaN")}}.

왜그렇냐면 `Math` 의 log() 가 정적 메서드이기 때문,에 매번 다음처럼 `Math.log()` 써야합니다 (생성자로 초기화된 `Math` 개체가 아니기 때문입니다).

자연로그 2 나 10, 상수로쓸때 {{jsxref("Math.LN2")}} or {{jsxref("Math.LN10")}} . 로가리즘 기초값 2 나 10, 쓸때는 {{jsxref("Math.log2()")}} 혹은 {{jsxref("Math.log10()")}} . 로가리즘 다른 기초값은 Math.log(x) / Math.log(기초값) 처럼 예제참고; 미리계산하여 1 / Math.log(기초값) 할 수 있습니다.

## 예제

### `Math.log() 사용`

```js
Math.log(-1); // NaN, 정의범위 초과
Math.log(0); // -Infinity, 무한
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### `Math.log()` 다른 기초값 사용

이 함수는 로가리즘 `y 에 대한것으로` 기초값 `x` (ie. <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>): 입니다

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

다음을 실행하면 `getBaseLog(10, 1000)` 다음 `2.9999999999999996 계산되는데` 적당히 반올림하니다, 거의 3 에 가깝습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
