---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`findLast()`** 메서드는 형식화 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 테스트 함수를 만족하는 요소가 없으면 {{jsxref("undefined")}}가 반환됩니다. 이 메서드는 {{jsxref("Array.prototype.findLast()")}}와 같은 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.findLast()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, 50]);

console.log(int8.find(isNegative));
// Expected output: -30
```

## 구문

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `findLast()`가 호출된 형식화 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하세요.

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 마지막(가장 높은 인덱스) 요소 값. 일치하는 요소를 찾을 수 없으면 {{jsxref("undefined")}}를 반환합니다.

## 설명

보다 자세한 설명은 {{jsxref("Array.prototype.findLast()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 형식화 배열에서 마지막 소수 찾기

다음 예제는 형식화 배열의 마지막 요소 중 소수인 요소를 반환하거나, 소수가 없는 경우 {{jsxref("undefined")}}를 반환합니다.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLast(isPrime)); // undefined (배열 내 소수 없음)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### 콜백이 모든 요소를 방문했으며 변경되었을 수 있습니다

다음 예제는 모든 요소가 방문되었으며 콜백에 전달된 값이 방문 시 해당 요소의 값임을 보여줍니다.

```js
// 인덱스 2,3,4에는 요소가 없는 배열을 선언합니다
// 누락된 요소는 0으로 초기화 됩니다.
const uint8 = new Uint8Array([0, 1, , , , 5, 6]);

// 역순으로 요소를 순회합니다.
// 모든 요소를 방문하는 점을 유의하시기 바랍니다.
uint8.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// 삭제된 것을 포함한 모든 인덱스를 보여줍니다
uint8.findLast((value, index) => {
  // 첫 순회때 요소 3을 수정합니다
  if (index === 6) {
    console.log("Set uint8[3] to 44");
    uint8[3] = 44;
  }
  // 요소 3은 여전히 방문하지만 새로운 값을 가집니다
  console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 0
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
// Set uint8[3] to 44
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 44
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `TypedArray.prototype.findLast` 폴리필](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
