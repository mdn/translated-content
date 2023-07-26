---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
---

{{JSRef}}

**`Math.SQRT2`** 는 2의 제곱근을 나타내고 약 1.414 입니다:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## 설명

`SQRT2` 는 `Math`의 정적 메서드 이므로 만든 `Math` 객체의 메서드가 아니라 항상 `Math.SQRT2` 함수를 사용해야합니다. (`Math`는 생성자가 없습니다.)

## 예제

### `Math.SQRT2`

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

## 참조

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
