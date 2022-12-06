---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
---

{{JSRef}}

**`at()`** 메서드는 정수 값을 받아서 지정된 오프셋에 있는 단일 UTF-16 코드 단위로 구성된 새 {{jsxref('String')}}을 반환합니다. 이 방법은 양의 정수와 음의 정수를 허용합니다. 음의 정수는 문자열의 마지막부터 셉니다.

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## 구문

```js-nolint
at(index)
```

### 매개변수

- `index`
  - : 문자열에서 반환할 문자의 인덱스(위치)입니다. 인덱스로 음수를 전달할 때 문자열의 끝에서 상대적인 색인을 지원합니다. 즉, 음수가 사용되면 반환할 문자는 문자열의 끝에서 역으로 계산하여 찾습니다.

### 반환 값

지정된 위치에 있는 단일 UTF-16 코드 단위로 구성된 새 {{jsxref('String')}}. 만약 주어진 인덱스를 찾을 수 없는 경우 {{jsxref('undefined')}}을 반환합니다.

## 예제

### 문자열의 마지막 문자 반환

다음 예제는 주어진 문자열에서 마지막 문자를 반환하는 함수를 제공합니다.

```js
// 주어진 문자열에서 마지막 문자를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}
let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### 메서드 비교하기

여기서 {{jsxref('String')}}의 끝에서 두 번째 문자를 선택하는 다양한 방법을 비교하겠습니다. 아래의 모든 방법이 유효하며, 싱대적으로 `at()`의 간결함과 가독성이 돋보입니다.

```js
const myString = "Every green bus drives fast.";

// length 속성과 charAt() 메서드 사용하기
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// slice() 메서드 사용하기
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// at() 메서드 사용하기
const atWay = myString.at(-2);
console.log(atWay); // 't'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.at` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [A polyfill for the at() method](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
