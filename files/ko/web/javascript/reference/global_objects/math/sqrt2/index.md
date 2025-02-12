---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.SQRT2`** 정적 데이터 속성은 2의 제곱근을 나타내고 약 1.414 입니다

{{InteractiveExample("JavaScript Demo: Math.SQRT2", "shorter")}}

```js interactive-example
function getRoot2() {
  return Math.SQRT2;
}

console.log(getRoot2());
// Expected output: 1.4142135623730951
```

## 값

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT2} = \sqrt{2} \approx 1.414</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 설명

`Math.SQRT2`는 상수이며 [`Math.sqrt(2)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)과 동일하지만 성능이 더 좋습니다.

`SQRT2`는 `Math`의 정적 속성이기 때문에 생성한 `Math`객체(`Math`는 생성자가 아닙니다)의 속성으로 사용하는 것보다 `Math.SQRT2`로 사용해야 합니다.

## 예제

### Math.SQRT2 사용하기

이 함수는 2의 제곱근을 반환합니다.

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
