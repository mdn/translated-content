---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

**`startsWith()`**는 {{jsxref("String")}} 값의 메서드로, 어떤 문자열의 문자로 시작하는지 확인하여 결과를 적절하게 `true` 혹은 `false`로 반환합니다.

{{InteractiveExample("JavaScript Demo: String.startsWith()")}}

```js interactive-example
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false
```

## 구문

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### 매개변수

- `searchString`
  - : 이 문자열의 시작 부분에서 검색할 문자. [정규식](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)이 될 수 없습니다. 정규식이 아닌 모든 값은 [문자열로 강제로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)되므로 이를 생략하거나 `undefined`를 전달하면 `startsWith()`가 `"undefined"` 문자열을 검색하게 되는데, 이는 원하는 경우가 거의 없습니다.
- `position` {{optional_inline}}
  - : `searchString`이 발견될 것으로 예상되는 시작 위치(`searchString`의 첫 번째 문자의 인덱스)입니다. 기본값은 `0`입니다.

### 반환 값

대상 문자열이 주어진 문자로 시작하면 `true`, 아니면 `false`.

### 예외

- {{jsxref("TypeError")}}
  - : `searchString`이 [정규식일 경우](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## 설명

`startsWith` 메소드로 어떤 문자열이 다른 문자열로 시작하는지 확인 할 수 있습니다. 대소문자를 구분합니다.

## 예제

### `startsWith()` 사용하기

```js
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `String.prototype.startsWith`의 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
