---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.SQRT1_2`** 정적 데이터 속성은 약 0.707의 값을 나타내는 제곱근 1/2을 나타냅니다

{{InteractiveExample("shorter")}}

```js interactive-example
function getRoot1Over2() {
  return Math.SQRT1_2;
}

console.log(getRoot1Over2());
// Expected output: 0.7071067811865476

```

## 값

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 설명

`Math.SQRT1_2`는 상수이며 [`Math.sqrt(0.5)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)과 동일하지만 성능이 더 좋습니다.

`SQRT1_2`는 `Math`의 정적 속성이기 때문에 생성한 `Math`객체(`Math`는 생성자가 아닙니다)의 속성으로 사용하는 것보다 `Math.SQRT1_2`로 사용해야 합니다.

## 예제

### Math.SQRT1_2 사용하기

아래 함수는 1 / 2의 제곱근을 반환합니다.

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
