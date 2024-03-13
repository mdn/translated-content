---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef}}

**`startsWith()`** 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `true` 혹은 `false`로 반환합니다.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## 구문

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### 매개변수

- `searchString`
  - : 문자열의 시작 지점에서 탐색할 문자열. 정규표현식이 올 수 없습니다.
- `position` {{optional_inline}}
  - : `searchString`을 탐색할 위치. 기본값은 `0`.

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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `String.prototype.startsWith`의 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
