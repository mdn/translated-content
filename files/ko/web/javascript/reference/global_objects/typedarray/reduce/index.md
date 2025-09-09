---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`reduce()`** 메서드는 형식화 배열의 각 요소에서 사용자가 제공한 "reducer" 콜백 함수를 순서대로 실행하여 이전 요소의 계산에서 반환 값을 전달합니다. 입력된 배열의 모든 요소에 대해 reducer를 실행한 최종 결과는 단일 값입니다. 이 메서드는 {{jsxref("Array.prototype.reduce()")}}와 동일한 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.reduce()")}}

```js interactive-example
const uint8 = new Uint8Array([0, 1, 2, 3]);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(uint8.reduce(sum));
// Expected output: 6
```

## 구문

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 매개변수

- `callbackFn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 이 함수의 반환 값은 다음번 `callbackFn` 호출 시 `accumulator` 매개변수의 값이 됩니다. 마지막 호출의 경우 반환 값은 `reduce()`의 반환 값이 됩니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `accumulator`
      - : 이전 `callbackFn` 호출의 결과 값입니다. 첫 번째 호출에서 후자를 지정하면 `initialValue`이고, 그렇지 않으면 `array[0]`가 그 값입니다.
    - `currentValue`
      - : 현재 요소의 값입니다. 첫 번째 호출에서 `initialValue`가 지정되면 `array[0]`이고, 그렇지 않으면 `array[1]`입니다.
    - `currentIndex`
      - : 형식화 배열에서 `currentValue`의 인덱스 위치. 처음 호출할 때 `initialValue`가 지정되면 `0`이고, 그렇지 않으면 `1`입니다.
    - `array`
      - : `reduce()`가 호출된 형식화 배열.
- `initialValue` {{optional_inline}}
  - : 콜백이 처음 호출될 때 `accumulator`가 초기화되는 값입니다.
    `initialValue`이 지정되면 `callbackFn`은 형식화 배열의 첫 번째 값인 `currentValue`로 실행을 시작합니다.
    `initialValue`이 지정되지 않은 경우, `accumulator`는 형식화 배열의 첫 번째 값으로 초기화되고, `callbackFn`은 형식화 배열의 두 번째 값을 `currentValue`로 하여 실행을 시작합니다. 이 경우 형식화된 배열이 비어 있으면(즉, `accumulator`로 반환할 첫 번째 값이 없으면) 오류가 발생합니다.

### 반환 값

전체 형식화 배열에 대해 "reducer" 콜백 함수를 실행하여 완료한 결과 값입니다.

### 예외

- {{jsxref("TypeError")}}
  - : `initialValue`가 주어지지 않고 형식화 배열에 요소가 없을 경우 발생합니다.

## 설명

자세한 설명은 {{jsxref("Array.prototype.reduce()")}}를 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며, 오직 형식화 배열에서만 호출됩니다.

## 예제

### 배열 내 모든 값의 합을 구하기

```js
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.reduce` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
