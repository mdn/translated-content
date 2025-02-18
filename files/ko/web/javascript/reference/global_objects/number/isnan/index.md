---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`Number.isNaN()`** 정적 메서드는 전달받은 값이 {{jsxref("NaN")}}인지 여부를 결정하고 입력이 Number 유형이 아니라면 `false`를 반환합니다. 이 함수는 원래의 전역 {{jsxref("isNaN()")}} 함수보다 강력합니다.

{{InteractiveExample("JavaScript Demo: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```

## 구문

```js-nolint
Number.isNaN(value)
```

### 매개변수

- `value`
  - : {{jsxref("NaN")}} 일지 검증할 값.

### 반환 값

주어진 숫자가 {{jsxref("NaN")}} 값을 가진다면 `true` 불리언 값을, 그렇지 않다면 `false`를 반환합니다.

## 설명

`Number.isNaN()` 함수는 `NaN`과의 동등성을 확인하는 편리한 방법을 제공합니다. JavaScript에서 [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Equality) 또는 [`===`](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 연산자를 사용하여 `NaN`과의 동등성을 시험할 수 없다는 점을 유의하세요. 모든 다른 값 비교와는 달리, 이 연산자는 한 피연산자가 {{jsxref("NaN")}}일 때 항상 `false`로 평가되며, 또 다른 피연산자가 {{jsxref("NaN")}}일 때도 마찬가지입니다.

JavaScript의 모든 가능한 값 중에서 `x !== x`가 `true`인 경우는 `NaN`뿐이므로, `Number.isNaN(x)`는 `x !== x` 테스트로 대체될 수 있습니다. 다만 후자가 가독성이 떨어진다는 단점이 있습니다.

전역 {{jsxref("isNaN()")}} 함수와는 달리, `Number.isNaN()` 메서드는 매개변수를 강제로 숫자로 변환하지 않습니다. 이로 인해 일반적으로는 {{jsxref("NaN")}}으로 변환되지만 실제로는 {{jsxref("NaN")}}과 같은 값이 아닌 값들을 안전하게 전달할 수 있습니다. 또한 이는 {{jsxref("NaN")}}인 Number 타입의 값만이 `true`를 반환한다는 것을 의미합니다.

## 예제

### isNaN() 사용하기

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Number.isNaN() 과 전역 isNaN()과의 차이점

`Number.isNaN()`은 매개변수를 숫자로 변환하려는 시도를 하지 않아서 숫자가 아니면 언제나 `false`를 반환합니다. 아래 코드는 모두 `false`입니다.

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

전역 {{jsxref("isNaN()")}}은 매개변수를 숫자로 강제로 변환시킵니다.

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, 1로 강제 변환됩니다
isNaN(null); // false, 0으로 강제 변환됩니다
isNaN("37"); // false, 37로 강제 변환됩니다
isNaN("37.37"); // false, 37.37로 강제 변환됩니다
isNaN(""); // false, 0으로 강제 변환됩니다
isNaN(" "); // false, 0으로 강제 변환됩니다
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Number.isNaN` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isNaN()")}}
