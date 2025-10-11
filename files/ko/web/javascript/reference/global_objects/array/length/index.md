---
title: "Array: length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`length`** 데이터 속성은 해당 배열의 요소 수를 나타냅니다. 해당 값은 부호 없는 32비트 정수이며 배열의 최대 인덱스 보다 항상 큽니다.

{{InteractiveExample("JavaScript Demo: Array.length", "shorter")}}

```js interactive-example
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// Expected output: 4
```

## 값

2<sup>32</sup>보다 작은 음수가 아닌 정수.

{{js_property_attributes(1, 0, 0)}}

## 설명

`length` 속성의 값은 양의 정수이며 2<sup>32</sup> 미만의 값을 가집니다.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 음수 값은 허용되지 않습니다
// RangeError: Invalid array length
```

배열 객체는 `length` 속성을 주시하여, `length` 값을 배열의 내용과 자동으로 동기화합니다. 이것은 다음을 의미합니다.

- `length`를 현재 길이보다 작은 값으로 설정하면 배열이 잘립니다. 새 `length`를 초과하는 요소는 삭제됩니다.
- 배열 인덱스(2<sup>32</sup>보다 작은, 음이 아닌 정수)를 현재 `length` 이상으로 설정하면 배열이 확장됩니다. 새로운 가장 큰 인덱스를 반영하도록 `length` 속성이 증가합니다.
- `length`를 잘못된 값(예: 음수 또는 정수가 아닌 값)으로 설정하면 `RangeError` 예외가 발생합니다.

`length`가 현재 길이보다 큰 값으로 설정되면 실제 `undefined` 값이 아닌 [빈 슬롯](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)을 추가하여 배열을 확장합니다. 빈 슬롯은 배열 방법과 몇 가지 특별한 상호 작용을 합니다. [배열 방법과 빈 슬롯](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#배열_메서드와_빈_슬롯)을 참조하십시오.

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // 현재 길이가 2이지만 배열의 길이를 5로 설정합니다.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

[length와 숫자 속성의 관계](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#length와_숫자_속성의_관계)를 참고하시기 바랍니다.

## 예제

### 배열 순회

다음 예제는 `numbers` 배열을 length 속성의 크기만큼 순회합니다. 각 원소의 값은 두 배가 됩니다.

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### 배열 단축

다음 예제는 `numbers` 배열의 현재 길이가 3보다 클 경우 3으로 줄입니다.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; 추가 요소는 삭제되었습니다.
```

### 고정 길이의 빈 배열 생성하기

`length`를 현재 크기보다 더 크게 설정하면 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)을 생성합니다.

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### length 쓰기 불가능한 배열

`length` 속성은 현재 길이를 넘어 요소가 추가되면 Array에 의해 자동으로 업데이트됩니다. `length` 속성이 쓰기 불가능한 경우 Array는 이를 업데이트할 수 없습니다. 이로 인해 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 오류가 발생합니다.

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: invalid array length](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
