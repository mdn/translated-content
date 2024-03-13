---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef}}

**`Math.PI`** 속성은 원의 둘레와 지름의 비율, 약 3.14159의 값을 가집니다.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`PI`는 `Math`의 정적 속성이므로, 사용자가 생성한 `Math` 객체의 속성으로 접근할 수 없고 항상 `Math.PI`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.PI` 사용하기

다음 함수는 `Math.PI`를 사용해 주어진 원의 반지름에서 둘레를 계산합니다.

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math")}}
