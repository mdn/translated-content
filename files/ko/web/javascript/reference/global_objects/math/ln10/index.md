---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
---

{{JSRef}}

**`Math.LN10`** 속성은 10의 자연로그 값, 약 2.302의 값을 가집니다.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.LN10")}}

```js interactive-example
function getNatLog10() {
  return Math.LN10;
}

console.log(getNatLog10());
// Expected output: 2.302585092994046
```

{{js_property_attributes(0, 0, 0)}}

## 설명

`LN10`은 `Math`의 정적 속성이므로, 사용자가 생성한 `Math` 객체의 속성으로 접근할 수 없고 항상 `Math.LN10`을 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.LN10` 사용하기

다음 함수는 10의 자연 로그 값을 반환합니다.

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
