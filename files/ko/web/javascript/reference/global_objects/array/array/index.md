---
title: Array() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{JSRef}}

**`Array()`** 생성자는 새로운 {{jsxref("Array")}} 객체를 생성할 때 사용합니다.

## 구문

```js-nolint
new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* …, */ elementN)
Array(arrayLength)
```

> **참고:** `Array()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)를 붙이거나 붙이지 않고 호출할 수 있습니다. 둘 다 새 `Array` 인스턴스를 생성합니다.

### 매개변수

- `elementN`
  - : JavaScript 배열은 주어진 요소로 초기화되지만, 단일 인수가 `Array` 생성자에 전달되고, 그 인수가 숫자인 경우는 예외입니다(아래 `arrayLength` 매개변수 참조). 이 특수한 경우는 대괄호 구문으로 만들어진 배열 리터럴이 아닌 `Array` 생성자로 만들어진 JavaScript 배열에만 적용된다는 점에 유의하세요.
- `arrayLength`
  - : `Array` 생성자에 전달된 유일한 인수가 0에서 2<sup>32</sup> - 1(포함) 사이의 정수인 경우, `length` 속성이 해당 숫자로 설정된 새 JavaScript 배열을 반환합니다(**참고:** 이는 실제 `undefined` 값을 가진 슬롯이 아닌 `arrayLength` 길이의 빈 슬롯 배열을 의미합니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)참조).

### 예외

- {{jsxref("RangeError")}}
  - : 숫자인 인자(`arrayLength`)가 하나뿐이지만, 그 값이 정수가 아니거나 0에서 2<sup>32</sup> - 1 (포함) 사이가 아닌 경우 발생합니다.

## 예제

### 배열 리터럴 표기법

배열은 [리터럴 표기법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#배열_리터럴)으로 생성할 수도 있습니다.

```js
const fruits = ["사과", "바나나"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "사과"
```

### 단일 매개변수 배열 생성자

단일 숫자 매개변수가 있는 생성자를 사용하여 배열을 만들 수 있습니다.
배열은 `length` 속성이 해당 숫자로 설정되어 생성되며, 배열 요소는 빈 슬롯입니다.

```js
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined이지만, 사실 빈 슬롯입니다.
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```js
const arrayOfOne = new Array("2"); // 숫자 2가 아니라 문자열 "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### 복수 매개변수 배열 생성자

생성자에 두 개 이상의 매개변수를 제공한 경우, 매개변수를 원소로 하는 새로운 {{jsxref("Array")}}를 생성합니다.

```js
const fruits = new Array("사과", "바나나");

console.log(fruits.length); // 2
console.log(fruits[0]); // "사과"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
