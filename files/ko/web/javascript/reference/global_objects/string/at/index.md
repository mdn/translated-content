---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("String")}} 값의 **`at()`** 메서드는 정수 값을 받아 지정된 오프셋에 위치한 단일 UTF-16 코드 유닛으로 구성된 새로운 {{jsxref("String")}}을 반환합니다. 이 메서드는 양의 정수와 음의 정수를 모두 허용합니다. 음의 정수는 문자열의 마지막 문자부터 거꾸로 세어 위치를 지정합니다.

{{InteractiveExample("JavaScript Demo: String.at()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
```

## 구문

```js-nolint
at(index)
```

### 매개변수

- `index`
  - : 반환할 문자열 문자의 인덱스(위치)입니다. 음수 인덱스를 전달하면 문자열 끝에서부터의 상대적 인덱싱을 지원합니다. 즉, 음수가 사용되면 반환되는 문자는 문자열의 끝에서부터 거꾸로 세어 찾아집니다.

### 반환 값

지정된 위치에 있는 단일 UTF-16 코드 유닛으로 구성된 {{jsxref("String")}}을 반환합니다. 주어진 인덱스를 찾을 수 없으면 {{jsxref("undefined")}}를 반환합니다.

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

여기서는 {{jsxref("String")}}의 끝에서 두 번째(마지막에서 하나 앞) 문자를 선택하는 다양한 방법을 비교합니다. 아래의 모든 방법이 유효하지만, 이는 `at()` 메서드의 간결성과 가독성을 강조합니다.

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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `String.prototype.at` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
