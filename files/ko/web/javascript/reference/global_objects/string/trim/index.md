---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef}}

**`trim()`** 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다. 여기서 말하는 공백이란 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미합니다.

한쪽 끝의 공백만 제거한 새로운 문자열을 반환하려면 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 또는 {{jsxref("String.prototype.trimEnd()" , "trimEnd()")}}를 사용하세요.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 구문

```js-nolint
trim()
```

### 반환 값

시작과 끝에서 공백이 제거된 `str`을 나타내는 새로운 문자열입니다. 공백은 [white space](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) 문자와 [line terminators](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators)로 정의됩니다.

한쪽 끝의 공백만 제거한 문자열을 반환하시려면 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 또는 {{jsxref("String.prototype.trimEnd()", "trimEnd()")}} 메서드를 사용하세요.

## 예제

### `trim()` 사용

아래 예제는 `str` 양 끝의 공백을 제거합니다.

```js
var str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
