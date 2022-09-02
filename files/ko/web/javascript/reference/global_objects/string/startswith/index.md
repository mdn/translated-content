---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/startsWith
---
{{JSRef}}

**`startsWith()`** 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `true` 혹은 `false`로 반환합니다.

## 구문

```js
str.startsWith(searchString[, position])
```

### 매개변수

- `searchString`
  - : 문자열의 시작 지점에서 탐색할 문자열
- `position` {{optional_inline}}
  - : `searchString`을 탐색할 위치. 기본값 0.

### 반환 값

문자열이 검색 문자열로 시작하면 `true`, 아니면 `false`.

## 설명

`startsWith` 메소드로 어떤 문자열이 다른 문자열로 시작하는지 확인 할 수 있습니다. 대소문자를 구분합니다.

## 예시

### `startsWith()` 사용하기

```js
//startswith
var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true
```

## 폴리필

`startsWith` 메소드는 ECMAScript 2015 명세에 포함됐으며, 아직까지 모든 JavaScrpt 구현체가 지원하지 않을 수 있습니다. 그러나 아래 코드 조각을 사용해 폴리필 할 수 있습니다.

```js
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}
```

ES2015 명세를 모두 만족하지만, 더 무거운 폴리필은 [Mathias Bynens의 GitHub](https://github.com/mathiasbynens/String.prototype.startsWith) 에서 확인할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 문서

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
