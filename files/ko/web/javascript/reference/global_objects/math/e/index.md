---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.E`** 정적 데이터 속성은 오일러 수를 의미하며, 자연로그의 밑 값 e를 나타내며 약 2.718의 값을 가집니다.

{{InteractiveExample}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Expected output: 105.12710963760242

```

## 값

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## 설명

`E`는 `Math`의 정적 속성이므로, 생성한 `Math` 객체(`Math`는 생성자가 아닙니다)의 속성 대신 항상 `Math.E`를 사용해야 합니다.

## 예제

### `Math.E` 사용하기

다음 함수는 e 값을 반환합니다.

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
