---
title: Array.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`includes()`** 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 `true` 또는 `false`를 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.includes()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

## 구문

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 매개변수

- `searchElement`
  - : 찾을 값입니다.
- `fromIndex` {{optional_inline}}
  - : 검색을 시작할 0 기반 인덱스로, [정수로 변환됩니다](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환).
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. 즉, `fromIndex < 0`이면, `fromIndex + array.length`가 사용됩니다. 그러나, 이 경우에도 배열은 여전히 앞에서 뒤로 검색됩니다.
    - `fromIndex < -array.length`이거나 `fromIndex`가 생략되면, `0`이 사용되어 전체 배열이 검색됩니다.
    - `fromIndex >= array.length` 이면, 배열은 검색되지 않고 `false`가 반환됩니다.

### 반환 값

배열(또는 `fromIndex`를 지정했다면, `fromIndex` 인덱스로 표시된 배열의 일부) 내에서 `searchElement` 값이 발견되면 `true` 불리언 값이 반환됩니다.

## 설명

`includes()` 메서드는 [SameValueZero](/ko/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#동일_값_제로_동등) 알고리즘을 사용하여 `searchElement`를 배열의 요소와 비교합니다. 0 값은 부호에 관계없이 모두 동일한 것으로 간주됩니다. (즉, `-0`은 `0`과 같지만), `false`는 `0`과 같은 것으로 간주되지 않습니다. [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)은 올바르게 검색될 수 있습니다.

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)에 사용할 경우, `include()` 메서드는 빈 슬롯을 `undefined`로 간주하고 순회합니다.

`includes()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### includes() 사용하기

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### fromIndex가 배열 길이보다 크거나 같은 경우

`fromIndex`가 배열의 길이보다 크거나 같으면 `false`가 반환됩니다. 배열은 검색되지 않습니다.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### 0보다 작은 인덱스 계산

`fromIndex`가 음수라면, 계산된 인덱스가 `searchElement` 검색을 시작할 배열의 위치로 사용되도록 계산됩니다.
계산된 인덱스가 `0`보다 작거나 같으면 전체 배열에서 검색됩니다.

```js
// 배열 길이는 3
// fromIndex는 -100
// 계산된 인덱스는 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### 희소 배열에서 includes() 사용하기

희소 배열에서 `undefined`를 검색하면 `true`를 얻을 수 있습니다.

```js
console.log([1, , 3].includes(undefined)); // true
```

### 배열이 아닌 객체에서 includes() 호출하기

`includes()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // length가 3이므로 includes()에서 무시됩니다.
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.includes` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
