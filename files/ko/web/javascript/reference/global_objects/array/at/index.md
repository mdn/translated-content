---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`at()`** 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환하며, 양수와 음수를 사용할 수 있습니다. 음의 정수는 배열의 마지막 항목부터 거슬러 셉니다.

{{InteractiveExample("JavaScript Demo: Array.at()")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
```

## 구문

```js-nolint
at(index)
```

### 매개변수

- `index`
  - : 반환할 배열 요소의 0부터 시작하는 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. 음수 인덱스는 배열 끝부터 거슬러 셉니다. `index < 0`인 경우, `index + array.length`로 접근합니다.

### 반환 값

주어진 인덱스와 일치하는 배열의 요소입니다. `index < -array.length` 또는 `index >= array.length`인 경우, 해당 속성에 접근하지 않고 항상 {{jsxref("undefined")}}를 반환합니다.

## 설명

인덱스가 음수가 아니라면, `at()` 메서드는 대괄호 표기법과 동일합니다. 예를 들어, `array[0]`과 `array.at(0)`은 모두 배열의 첫 번째 항목을 반환합니다. 그러나 배열의 끝에서부터 요소를 계산할 땐 Python이나 R처럼 `array[-1]`을 사용할 수 없습니다. 대괄호 안의 모든 값은 문자 그대로 문자열 속성으로 처리되므로 `array["-1"]`을 읽게 됩니다. 이는 배열 인덱스가 아닌 일반 문자열 속성입니다.

일반적인 방법은 {{jsxref("Array/length", "length")}}에 접근하고, 그로부터 인덱스를 계산하는 것입니다(예: `array[array.length - 1]`). `at()` 메서드는 상대 인덱싱을 허용하므로 이를 `array.at(-1)`로 단축할 수 있습니다.

`at()`와 {{jsxref("Array/with", "with()")}}를 결합하면 음수 인덱스를 사용하여 각각 배열을 읽고 쓸 수 있습니다.

`at()` 메서드는 [범용적](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### 배열의 끝 값 반환

아래 예제는 주어진 배열에서 맨 마지막에 위치한 값을 반환하는 함수를 정의합니다.

```js
// 몇 가지 요소가 있는 배열
const cart = ["사과", "바나나", "배"];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

// 'cart' 배열에서 마지막 요소를 가져옴
const item1 = returnLast(cart);
console.log(item1); // '배'

// 'cart'배열에 요소를 추가
cart.push("오렌지");
const item2 = returnLast(cart);
console.log(item2); // '오렌지'
```

### 메서드 비교

아래 예제에서는 {{jsxref("Array")}}의 뒤에서 두 번째 요소를 가져오는 서로 다른 방법을 비교합니다. 모든 방법이 유효하긴 하지만 `at()` 메서드의 간결성과 가독성을 확인할 수 있습니다.

```js
// 몇 가지 요소가 있는 배열
const colors = ["빨강", "초록", "파랑"];

// length 속성 사용
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // '초록'

// slice() 메서드 사용. 배열을 반환하는 것에 유의
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // '초록'

// at() 메서드 사용
const atWay = colors.at(-2);
console.log(atWay); // '초록'
```

### 배열이 아닌 객체에서 at() 호출

`at()` 메서드는 `this`의 `length` 속성을 읽고 접근할 인덱스를 계산합니다.

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // length가 2이므로 at()은 이 값을 무시합니다.
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.at` 폴리필](https://github.com/zloirock/core-js#relative-indexing-method)
- [인텍스 된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
