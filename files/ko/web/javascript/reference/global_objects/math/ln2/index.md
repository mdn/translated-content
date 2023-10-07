---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

The **`Math.LN2`** property represents the natural logarithm of 2, approximately 0.693:

**`Math.LN2`** 속성은 2의 자연로그 값, 약 0.693의 값을 가집니다.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln2.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`LN2`는 `Math`의 정적 속성이므로, 사용자가 생성한 `Math` 객체의 속성으로 접근할 수 없고 항상 `Math.LN2`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

## Examples

### `Math.LN2` 사용하기

다음 함수는 2의 자연 로그 값을 반환합니다.

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
