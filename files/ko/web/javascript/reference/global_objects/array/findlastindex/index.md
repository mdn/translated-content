---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{JSRef}}

**`findLastIndex()`** 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.

인덱스 대신 판별함수를 만족하는 마지막 값을 반환하는{{jsxref("Array/findLast", "findLast()")}}메서드도 참고하세요.

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

## 구문

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`

  - : 배열의 각 요소에 대해 실행할 함수입니다. 이 함수는 매칭된 요소가 발견되었음을 나타내기 위해 [참 값](/ko/docs/Glossary/Truthy)을 반환해야하며, 그렇지 않으면 [거짓 값](/ko/docs/Glossary/Falsy)을 반환해야 합니다. 이 함수는 다음과 같은 인수와 함께 호출됩니다.

    - `element`
      - : 배열에서 처리중인 현재 요소입니다.
    - `index`
      - : 배열에서 처리중인 현재 요소의 인덱스입니다.
    - `array`
      - : `findLastIndex()`가 호출된 배열입니다.

- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 this로 사용할 객체입니다. 자세한 내용은 반복적인 메소드([iterative methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods))를 참조합니다.

### 반환 값

테스트를 통과하는 배열에서 마지막 요소(가장 높은 인덱스)의 인덱스입니다.
만약 매칭되는 요소가 없다면 -1을 반환합니다.

## 설명

`findLastIndex()` 메서드는 반복적인 메소드([iterative methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods))입니다. 이 메서드는 배열의 각 요소마다 제공된 `callbackFn` 함수를 역순으로 한 번씩 호출하며, `callbackFn`이 [참 값](/ko/docs/Glossary/Truthy)을 반환할 때까지 반복합니다. 참 값이 반환되면 `findLastIndex()`는 해당 요소의 인덱스를 반환하고 배열 반복을 중단합니다. 만약 `callbackFn`이 참 값을 반환하지 않으면, `findLastIndex()`는 `-1`을 반환합니다.

`callbackFn`는 배열의 _모든_ 인덱스에 대해 호출됩니다. 할당된 값이 있는 인덱스뿐만 아니라 희소 배열([sparse arrays](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays))의 비어있는 슬롯도 `undefined`와 동일하게 동작합니다.

`findLastIndex()` 메서드는 호출된 배열을 변경하지 않지만, 인자로 제공된 `callbackFn`은 변경할 수 있습니다. 그러나, 배열의 길이는 `callbackFn`의 첫 호출 _이전에_ 저장됨에 유의합니다. 따라서 다음과 같이 동작합니다.

- `callbackFn`은 `findLastIndex()`가 호출된 이후 배열에 추가된 요소에 방문하지 않습니다.
- 이미 방문한 인덱스의 변경은 `callbackFn`을 다시 호출하지 않습니다.
- `callbackFn`에 의해 아직 방문되지 않은 배열의 기존 요소가 변경되면, `callbackFn`에 전달되는 값은 해당 요소가 방문되었을 때의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 마치 `undefined`인 것처럼 방문됩니다.

> **경고:** 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드로 이어지는 경우가 많으며, 일반적으로 피해야 할 것입니다 (특별한 경우를 제외하고).

`findLastIndex()` 메서드는 [일반적인(generic)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods) 메서드입니다. 이는 `this` 값이 `length` 속성과 정수 키 속성을 가지고 있는 것만을 요구합니다.

## 예제

### 배열에서 마지막 소수의 인덱스 찾기

다음 예제는 배열에서 마지막으로 나오는 소수(prime number)의 인덱스를 반환하며, 소수가 없는 경우 `-1`을 반환합니다.

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

### 희소 배열에서 findLastIndex() 사용

희소 배열에서 `undefined`를 찾아 빈 슬롯의 인덱스를 알아낼 수 있습니다.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### 배열이 아닌 객체에서 findLastIndex() 사용

`findLastIndex()` 메서드는 `this`의 `length` 속성을 읽은 다음 각 정수 인덱스에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
); // 2
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
