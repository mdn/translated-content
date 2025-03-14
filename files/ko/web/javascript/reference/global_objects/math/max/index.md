---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

**`Math.max()`** 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환하거나,
매개변수가 없을 경우 -{{jsxref("Infinity")}}를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
```

## 구문

```js-nolint
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```

### 매개변수

- `value1`, …, `valueN`
  - : 가장 큰 값을 선택하고 반환할 0개 이상의 숫자입니다.

### 반환 값

주어진 숫자 중 가장 큰 숫자를 반환합니다. 만약 인수 중 하나라도 숫자로 변환한 값이 `NaN`이라면
{{jsxref("NaN")}}로 반환합니다. 매개변수가 없을 경우 -{{jsxref("Infinity")}}를 반환합니다.

## 설명

`max()`는 `Math`의 정적 메서드이기 때문에 만든 `Math`객체의 메서드가 아닌 항상
`Math.max()`로 사용해야합니다. (Math는 생성자가 아닙니다).

[`Math.max.length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/length)의 값이 2 인데, 이는 이 메서드가 최소 2개의 매개변수를 받도록 설계되었음을 암시합니다.

## 예제

### Math.max()함수 사용하기

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### 배열의 최대값 가져오기

{{jsxref("Array.prototype.reduce()")}}는 각 값을 비교하여 숫자 배열의 최대 요소를 찾는 데 사용할 수 있습니다.

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

다음 함수는 {{jsxref("Function.prototype.apply()")}}를 사용하여 배열의 최대값을 가져옵니다. `getMaxOfArray([1, 2, 3])`는 `Math.max(1, 2, 3)`와 동일하지만, 프로그래밍 방식으로 배열을 생성하기 위해 `getMaxOfArray()`를 사용할 수 있습니다. 이 함수는 상대적으로 요소가 적은 배열에만 사용해야 합니다.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

[전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)은 배열의 최대값을 구하기 위한 `apply` 솔루션을 짧게 작성하는 방법입니다.

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

그러나 전개 구문(`...`)와 `apply`는 모두 배열 요소를 함수 매개변수로 전달하려고 하기 때문에 배열에 요소가 너무 많으면 실패하거나
잘못된 결과를 반환합니다. 자세한 내용은 [apply와 내장 함수 사용하기](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions)를 참조하세요.
`reduce` 솔루션에는 이 문제가 없습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.min()")}}
