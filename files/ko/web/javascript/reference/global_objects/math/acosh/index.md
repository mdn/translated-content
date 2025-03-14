---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{JSRef}}

**`Math.acosh()`** 정적 메서드는 숫자의 역 쌍곡선 코사인를 반환합니다. 아래와 같습니다.

<math display="block"><semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \geq 1,\;\mathtt{\operatorname{Math.acosh}(x)} &amp;= \operatorname{arcosh}(x) = \text{the unique } y \geq 0 \text{ such that } \cosh(y) = x\\&amp;= \ln\left(x + \sqrt{x^2 - 1}\right)\end{aligned}</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.acosh()")}}

```js interactive-example
console.log(Math.acosh(0.999999999999));
// Expected output: NaN

console.log(Math.acosh(1));
// Expected output: 0

console.log(Math.acosh(2));
// Expected output: 1.3169578969248166

console.log(Math.acosh(2.5));
// Expected output: 1.566799236972411
```

## 구문

```js-nolint
Math.acosh(x)
```

### 매개변수

- `x`
  - : 1보다 크거나 같은 숫자.

### 반환 값

`x`의 역 쌍곡선 코사인. `x`가 1보다 작으면 {{jsxref("NaN")}}를 반환합니다.

## 설명

`acosh()`는 `Math`의 정적 메서드이기 때문에, 생성한 `Math` 객체 메서드보다 `Math.acosh()`를 항상 사용합니다 (`Math`는 생성자가 아닙니다).

## 예제

### Math.acosh() 사용

```js
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Math.acosh`의 폴리필](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
