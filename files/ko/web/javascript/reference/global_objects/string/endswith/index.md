---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("String")}} 값의 **`endsWith()`** 메서드는 문자열이 이 문자열의 문자로 끝나는지 여부를 결정하여 적절하게 `true` 또는 `false`를 반환합니다.

{{InteractiveExample("JavaScript Demo: String.endsWith()")}}

```js interactive-example
const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false
```

## 구문

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### 매개변수

- `searchString`
  - : `str` 끝에서 검색할 문자. [정규 표현식이 될 수 없습니다](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). 정규식이 아닌 모든 값은 [문자열로 강제 변환]되므로 이를 생략하거나 `undefined`를 전달하면 `endsWith()`가 `"undefined"` 문자열을 검색하게 되는데, 이는 원하는 경우가 거의 없습니다.
- `endPosition` {{optional_inline}}
  - : `searchString`이 발견될 것으로 예상되는 끝 위치(`searchString`의 마지막 문자의 인덱스에 1을 더한 값)입니다. 기본값은 `str.length`입니다.

### 반환 값

`searchString`이 빈 문자열인 경우를 포함하여 문자열 끝에 주어진 문자가 있으면 **`true`**를 반환하고, 그렇지 않으면 **`false`**를 반환합니다.

### 예외

- {{jsxref("TypeError")}}
  - : `searchString`가 [정규 표현식이라면](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) 발생합니다.

## 설명

이 메서드를 사용하면 문자열이 다른 문자열로 끝나는지 여부를 확인할 수 있습니다. 이 메서드는 대소문자를 구분합니다.

## 예제

### endsWith() 사용하기

```js
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `String.prototype.endsWith` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
