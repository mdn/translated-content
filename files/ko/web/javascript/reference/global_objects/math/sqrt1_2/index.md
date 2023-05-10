---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---

{{JSRef}}

**`Math.SQRT1_2`** 프로퍼티는 약 0.707의 값을 나타내는 루트 1/2을 나타냅니다:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`SQRT1_2` 는 `Math`의 정적 프로퍼티이기 때문에, 당신이 생성한 `Math` 오브젝트의 프로퍼티보다는 항상 `Math.SQRT1_2`의 형태로 사용합니다 (`Math`는 컨스트럭터가 아닙니다).

## 예시

### `Math.SQRT1_2` 의 사용

다음은 루트 1/2를 출력합니다:

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
