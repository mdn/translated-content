---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
  - at
  - Experimental
  - Polyfill
browser-compat: javascript.builtins.Array.at
translation_of: Web/JavaScript/Reference/Global_Objects/Array/at
---
{{JSRef}}

**`at()`** 메서드는 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환합니다. 양수와 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 셉니다.

`at()` 메서드의 존재가 대괄호 표기법을 부정하는 것은 아닙니다. 예를 들어 `array[0]`은 문제 없이 배열의 첫 요소를 반환합니다. 그러나 맨 마지막 요소를 가져오고 싶을 때 {{jsxref("Array.prototype.length", "length")}} 속성을 사용해 `array[array.length - 1]`을 하는 대신, 짧게 `array.at(-1)`을 사용할 수 있습니다. [(예제를 참고하세요)](#예제)

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## 구문

```js
at(index)
```

### 매개변수

- `index`
  - : 배열에서 반환할 요소의 인덱스(위치). 음수 값을 지정할 경우 배열의 마지막을 기준으로 한 인덱스입니다. 즉, 배열 앞 대신 끝에서부터 위치를 계산합니다.

### 반환 값

주어진 인덱스에 위치한 배열 요소. 주어진 인덱스가 배열에 없으면 {{jsxref('undefined')}}를 반환합니다.

## 예제

### 배열의 끝 값 반환

아래 예제는 주어진 배열에서 맨 마지막에 위치한 값을 반환하는 함수를 정의합니다.

```js
// 대상 배열
const cart = ['사과', '바나나', '배'];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

// 위의 배열 'cart'에서 마지막 요소를 가져옴
const item1 = returnLast(cart);
console.log(item1); // '배' 기록

// 위의 배열 'cart'에 요소를 추가함
cart.push('오렌지');
const item2 = returnLast(cart);
console.log(item2); // '오렌지' 기록
```

### 방법 비교

아래 예제에서는 {{jsxref("Array")}}의 뒤에서 두 번째 요소를 가져오는 서로 다른 방법을 비교합니다. 모든 방법이 유효하긴 하지만 `at()` 메서드의 간결성과 가독성을 확인할 수 있습니다.

```js
// 대상 배열
const colors = ['빨강', '초록', '파랑'];

// length 속성 사용
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // '초록' 기록

// slice() 메서드 사용. 배열을 반환함에 주의
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // '초록' 기록

// at() 메서드 사용
const atWay = colors.at(-2);
console.log(atWay); // '초록' 기록
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Array.prototype.at` 폴리필](https://github.com/zloirock/core-js#relative-indexing-method)
- [`at()` 메서드 폴리필](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – 판별식을 사용해 값을 반환합니다.
- {{jsxref("Array.prototype.includes()")}} – 값이 배열에 존재하는지 판별합니다.
- {{jsxref("Array.prototype.indexOf()")}} – 주어진 요소의 인덱스를 반환합니다.
