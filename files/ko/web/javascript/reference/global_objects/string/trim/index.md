---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/Trim
---
{{JSRef}}

**`trim()`** 메서드는 문자열 양 끝의 공백을 제거합니다.
공백이란 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미합니다.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 구문

```js
trim()
```

### 반환 값

`str` 문자열의 양끝의 공백을 제거한 문자열을 반환합니다.  

`str` 문자열에 공백이 없어도 예외가 발생하지 않고 새 문자열이 반환됩니다. (본질적으로  `str`의 복사본).  

한쪽 끝의 공백만 제거한 문자열을 반환하시려면 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 또는 {{jsxref("String.prototype.trimEnd()", "trimEnd()")}} 메서드를 사용하세요.

## 폴리필

다른 코드 전에 아래 코드를 실행하면 지원하지 않는 환경에서도 `trim()` 을 사용할 수 있습니다.

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

## 예제

### `trim()` 사용

아래의 예제는 소문자 문자열 `'foo'` 를 표시합니다.

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `String.prototype.trim` 의 폴리필은 여기를 [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) 참고 하세요.
- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
