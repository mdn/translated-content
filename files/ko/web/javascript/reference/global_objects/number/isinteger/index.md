---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Number.isInteger()`** 정적 메서드는 전달받은 값의 정수 여부를 판별합니다.

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## 구문

```js-nolint
Number.isInteger(value)
```

### 매개변수

- `value`
  - : 정수인지 확인하려는 값.

### 반환 값

주어진 값이 정수라면 불리언 값 `true`, 그렇지 않으면 `false` 입니다.

## 설명

대상 값이 정수이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다. 값이 {{jsxref("NaN")}} 또는 {{jsxref("Infinity")}}인 경우 `false`를 반환합니다. 이 메서드는 정수로 표현할 수 있는 부동 소수점 숫자에 대해서도 `true`를 반환합니다. 값이 숫자가 아닌 경우 항상 `false`를 반환합니다.

일부 숫자 리터럴은 정수가 아닌 것처럼 보이지만 실제로는 정수를 나타내며, 이는 ECMAScript 부동 소수점 숫자 인코딩의 정밀도 제한(IEEE-754)으로 인해 발생합니다. 예를 들어 `5.0000000000000001`는 `5`와 `1e-16`만큼만 차이가 나며, 이는 너무 작아서 표현할 수 없습니다. (참고로, [`Number.EPSILON`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)은 1과 1보다 큰 다음 표현 가능한 부동 소수점 수 사이의 거리를 저장하며, 이는 약 `2.22e-16`입니다). 따라서 `5.0000000000000001`는 `5`와 동일한 인코딩으로 표현되므로 `Number.isInteger(5.0000000000000001)`는 `true`를 반환하게 됩니다.

이와 비슷하게 [`Number.MAX_SAFE_INTEGER`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)의 주변의 숫자는 정밀도 손실로 인해 정수가 아닌 경우에도 `Number.isInteger`가 `true`를 반환하게 됩니다. (실제 임계값은 10진수를 표현하는 데 필요한 비트 수에 따라 달라집니다. 예를 들어 `Number.isInteger(4500000000000000.1)`는 `true`이지만 `Number.isInteger(4500000000000000.5)`는 `false`입니다.).

## 예제

### isInteger 사용하기

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true, 정밀도 손실 발생
Number.isInteger(4500000000000000.1); // true, 정밀도 손실 발생
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Number.isInteger` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
