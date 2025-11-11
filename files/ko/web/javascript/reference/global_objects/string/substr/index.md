---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`substr()`** 메서드는 지정된 인덱스에서 시작하여 그 다음에 지정된 문자 수만큼 확장되는 이 문자열의 일부를 반환합니다.

> [!NOTE]
> `substr()`은 기본 ECMAScript 명세의 일부가 아니며, 비브라우저 런타임에 대한 권장 선택 사항인[부록 B: 웹 브라우저용 추가 ECMAScript 기능](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html)에 정의되어 있습니다. 그러므로 코드를 최대한 크로스 플랫폼 친화적으로 만들려면 표준 [`String.prototype.substring()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 그리고 [`String.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 메서드를 대신 사용을 권장합니다. [`String.prototype.substring()` 페이지](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr)에는 세 가지 메서드 간의 비교가 나와 있습니다.

{{InteractiveExample("JavaScript Demo: String.substr()")}}

```js interactive-example
const str = "Mozilla";

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"
```

## 구문

```js-nolint
substr(start)
substr(start, length)
```

### 매개변수

- `start`
  - : 반환된 부분 문자열에 포함할 첫 번째 문자의 인덱스입니다.
- `length` {{optional_inline}}
  - : 추출할 문자 수입니다.

### 반환 값

주어진 문자열의 지정된 부분을 포함하는 새 문자열입니다.

## 설명

문자열의 `substr()` 메서드는 `start` 인덱스부터 `length` 만큼의 문자를 추출합니다.

- `start >= str.length`이면 빈 문자열이 반환됩니다.
- `start < 0`이면 인덱스는 문자열의 끝부터 카운트를 시작합니다. 보다 공식적으로는 이 경우 하위 문자열은 `max(start + str.length, 0)`에서 시작합니다.
- `start`가 생략되거나 {{jsxref("undefined")}}가 있으면 `start`는 `0`으로 처리됩니다.
- `length`가 생략되거나 {{jsxref("undefined")}}인 경우 혹은 `start + length >= str.length`인 경우 `substr()`은 문자열의 끝 부분까지 문자를 추출합니다.
- `length < 0`이면 빈 문자열이 반환됩니다.
- `start`와 `length` 모두에 대해 {{jsxref("NaN")}}는 `0`으로 처리됩니다.

`substr()` 사용을 피하는 것이 좋지만, 기본적으로 `substr()`에 대한 폴리필을 작성하지 않고도 레거시 코드에서 `substr()`을 `slice()` 또는 `substring()`으로 마이그레이션하는 간단한 방법은 없습니다. 예를 들어, `str = "01234", a = 1, l = -2`인 경우 `str.substr(a, l)`, `str.slice(a, a + l)`, `str.substring(a, a + l)`는 모두 다른 결과를 반환하지만, `substr()`는 빈 문자열을 반환하고 `slice()`는 `"123"`을 반환하지만 `substring()`는 `"0"`을 반환합니다. 실제 리팩토링 방법은 `a`와 `l`의 범위에 대한 지식에 따라 달라집니다.

## 예제

### substr() 사용하기

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `String.prototype.substr` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
