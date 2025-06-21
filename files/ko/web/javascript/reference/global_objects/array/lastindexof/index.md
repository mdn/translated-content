---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 `lastIndexOf()` 메서드는 배열에서 특정 요소를 찾을 수 있는 마지막 인덱스를 반환하거나, 해당 요소가 없으면 `-1`을 반환합니다. 배열은 `fromIndex`에서 시작하여 역방향으로 검색됩니다.

{{InteractiveExample("JavaScript Demo: Array.lastIndexOf()")}}

```js interactive-example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
```

## 구문

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 매개변수

- `searchElement`
  - : 배열에서 찾을 요소.
- `fromIndex` {{optional_inline}}
  - : 역방향 검색을 시작하는 0부터 시작하는 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다.
    - 음수 인덱스는 배열 끝에서부터 다시 계산됩니다. 만약 `fromIndex < 0` 이라면, `fromIndex + array.length`가 사용됩니다.
    - `fromIndex < -array.length`인 경우, 배열을 검색하지 않고 `-1`을 반환합니다. 개념적으로 배열이 시작되기 전 존재하지 않는 위치에서 시작해 그곳에서부터 거꾸로 가는 것이라고 생각하면 됩니다. 도중에 배열 요소가 없으므로 `searchElement`를 찾을 수 없습니다.
    - `fromIndex >= array.length` 또는 `fromIndex`를 생략하면, `array.length - 1`이 사용되어 전체 배열을 검색하게 됩니다. 개념적으로 배열 끝 너머 존재하지 않는 위치에서 시작하고 그곳에서부터 거꾸로 가는 것이라고 생각하면 됩니다. 결국 배열의 실제 끝 위치에 도달하고, 이 지점에서 실제 배열 요소를 통해 역순 검색을 시작합니다.

### 반환 값

배열에 있는 `searchElement`의 마지막 인덱스입니다. 찾을 수 없으면 `-1`입니다.

## 설명

`lastIndexOf()` 메서드는 [엄격한 동등성](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)(`===` 연산자에서 사용하는 것과 동일한 알고리즘)을 사용하여 `searchElement`를 배열 요소와 비교합니다. 두 개의 [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN) 값은 동일한 것으로 비교되지 않으므로 `searchElement`가 `NaN`인 경우, `lastIndexOf()`는 항상 `-1`을 반환합니다.

## 예제

### lastIndexOf() 사용하기

다음 예제에서는 `lastIndexOf()`를 사용하여 배열에서 값을 찾습니다.

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

`NaN`을 찾기위해 `lastIndexOf()`을 사용할 수 없습니다.

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### 요소의 모든 위치 찾기

다음 예제에서는 `lastIndexOf`를 사용하여 주어진 배열에 있는 요소의 모든 인덱스를 찾고, 발견된 요소를 다른 배열에 추가하기 위해 {{jsxref("Array/push", "push()")}}를 사용합니다.

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

여기서는 `idx === 0`인 경우를 별도로 처리해야 합니다. 요소가 배열의 첫 번째 요소인 경우 `fromIndex` 매개변수에 관계없이 항상 검색되기 때문입니다. 이는 {{jsxref("Array/indexOf", "indexOf()")}} 메서드와 다릅니다.

### 희소 배열에 lastIndexOf() 사용하기

배열의 빈 슬롯을 검색하기 위해 `lastIndexOf()`를 사용할 수 없습니다.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### 배열이 아닌 객체에 lastIndexOf() 사용하기

`lastIndexOf()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음이 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // length가 3 이므로 lastIndexOf()에서 무시됩니다.
};
console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
// -1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.lastIndexOf` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
