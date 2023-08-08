---
title: Array() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
---

{{JSRef}}

**`Array()`** 생성자는 새로운 {{jsxref("Array")}} 객체를 생성할 때 사용합니다.

## 구문

```js
    [element0, element1, ..., elementN]

    new Array(element0, element1[, ...[, elementN]])
    new Array(arrayLength)
```

### 매개변수

- `elementN`
  - : JavaScript 배열을 초기화할 때 채워넣을 요소. 단, 항목이 하나 뿐이며 그 항목의 자료형이 숫자일 경우 아래의 `arrayLength` 매개변수로 간주합니다.
- `arrayLength`
  - : `Array` 생성자에 제공한 유일한 매개변수가 0에서 2^32-1 이하의 정수인 경우, `length` 속성이 해당 값인 새로운 JavaScript 배열을 생성합니다. (**참고:** 이렇게 생성한 배열은 `arrayLength` 만큼의 빈 슬롯을 가지는 것으로, 실제 {{jsxref("undefined")}}를 채우는 것이 아닙니다.) 값이 범위 밖이거나 정수가 아닌 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### 배열 리터럴 표기법

배열은 [리터럴 표기법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#배열_리터럴)으로 생성할 수도 있습니다.

```js
let fruits = ["사과", "바나나"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "사과"
```

### 단일 매개변수 배열 생성자

배열을 생성자와 하나의 숫자 매개변수로 생성할 수 있습니다. 그 결과는 `length`가 매개변수고, 길이만큼의 빈 슬롯을 가진 배열입니다.

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]); // undefined
```

### 복수 매개변수 배열 생성자

생성자에 두 개 이상의 매개변수를 제공할 경우, 매개변수를 원소로 하는 새로운 배열을 생성합니다.

```js
let fruits = new Array("사과", "바나나");

console.log(fruits.length); // 2
console.log(fruits[0]); // "사과"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}} 클래스
