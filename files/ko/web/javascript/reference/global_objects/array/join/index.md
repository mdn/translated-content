---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`Join()`** 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환합니다. 배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환됩니다.

{{InteractiveExample("JavaScript Demo: Array.join()")}}

```js interactive-example
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

## 구문

```js-nolint
join()
join(separator)
```

### 매개변수

- `separator` {{optional_inline}}
  - : 배열의 인접한 요소의 각 쌍을 구분하는 문자열입니다. 생략되면 배열 요소는 쉼표(",")로 구분됩니다.

### 반환 값

배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 `arr.length` 가 `0`이라면, 빈 문자열을 반환합니다.

## 설명

문자열로 변환된 모든 배열 요소가 하나의 문자열로 결합됩니다. 요소가 `undefined`, `null`인 경우, "null" 또는 "undefine" 문자열 대신 빈 문자열로 변환됩니다.

[`Array.prototype.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)는 `join` 메서드를 내부적으로 인수 없이 호출합니다. 배열 인스턴스의 `join`을 재정의하면 해당 `toString` 동작도 재정의됩니다.

`Array.prototype.join`은 다른 배열을 포함하여 재귀적으로 각 요소를 문자열로 변환합니다. `Array.prototype.toString`(`join()` 호출과 같음)에서 반환된 문자열에는 구분 기호가 없기 때문에 중첩된 배열은 평탄화된 것처럼 보입니다. 첫 번째 수준의 구분 기호만 제어할 수 있으며, 더 깊은 수준에서는 항상 기본 쉼표를 사용합니다.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

배열이 순환 배열(자체 요소를 포함)인 경우, 브라우저는 순환 참조를 무시하여 무한 재귀를 방지합니다.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)에 사용되는 경우, `join()` 메서드는 빈 슬롯의 값이 `undefined`인 것처럼 반복합니다.

`join()` 메서드는 [범용 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상됩니다.

## 예제

### 네 가지 다른 방법으로 배열 연결하기

다음 예제에서는 세 개의 요소가 있는 배열 `a`를 만든 다음, 기본 구분 기호, 쉼표와 공백, 그리고 더하기와 빈 문자열을 사용하여 배열을 네 번 연결합니다.

```js
const a = ["바람", "물", "불"];
a.join(); // '바람,물,불'
a.join(", "); // '바람, 물, 불'
a.join(" + "); // '바람 + 물 + 불'
a.join(""); // '바람물불'
```

### 희소 배열에 join() 사용하기

`join()`은 빈 슬롯을 `undefined`와 같이 처리하고 추가 구분 기호를 생성합니다.

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### 배열이 아닌 객체에서 join() 호출하기

`join` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음이 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length가 3 이므로 join()에서 무시됨.
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.join` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
