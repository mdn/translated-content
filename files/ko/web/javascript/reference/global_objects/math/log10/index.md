---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{JSRef}}

**`Math.log10()`** 정적 메서드는 숫자의 밑이 기본 10인 로그를 반환합니다. 아래와 같습니다.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log\_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.log10()")}}

```js interactive-example
console.log(Math.log10(100000));
// Expected output: 5

console.log(Math.log10(2));
// Expected output: 0.3010299956639812

console.log(Math.log10(1));
// Expected output: 0

console.log(Math.log10(0));
// Expected output: -Infinity
```

## 구문

```js-nolint
Math.log10(x)
```

### 매개변수

- `x`
  - : 0보다 크거나 같은 숫자입니다.

### 반환 값

`x`의 밑이 기본 10인 로그. `x < 0`이면 {{jsxref("NaN")}}를 반환합니다.

## 설명

`log10()`이 `Math`의 정적 메서드이기 때문에 생성한 `Math` 객체의 메서드가 아닌 항상 `Math.log10()`로 사용합니다 (`Math`는 생성자가 아닙니다).

이 함수는 `Math.log(x) / Math.log(10)`와 동일합니다. `log(e)`의 경우, 1 / {{jsxref("Math.LN10")}}인 상수 {{jsxref("Math.LOG10E")}}를 사용합니다.

## 예제

### Math.log10() 사용

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Math.log10`의 폴리필](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
