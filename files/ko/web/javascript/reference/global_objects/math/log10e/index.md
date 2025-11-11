---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef}}

**`Math.LOG10E`** 속성은 e의 로그 10 값, 약 0.434의 값을 가집니다.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.log10e()")}}

```js interactive-example
function getLog10e() {
  return Math.LOG10E;
}

console.log(getLog10e());
// Expected output: 0.4342944819032518
```

{{js_property_attributes(0, 0, 0)}}

## 설명

`LOG10E`는 `Math`의 정적 속성이므로, 사용자가 생성한 `Math` 객체의 속성으로 접근할 수 없고 항상 `Math.LOG10E`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.LOG10E` 사용하기

다음 함수는 e의 로그 10 값을 반환합니다.

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
