---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

**`Math.E`** 속성은 자연로그의 밑 값 e를 나타내며 약 2.718의 값을 가집니다.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`E`는 `Math`의 정적 속성이므로, 사용자가 생성한 `Math` 객체의 속성으로 접근할 수 없고 항상 `Math.E`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.E` 사용하기

다음 함수는 e 값을 반환합니다.

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
