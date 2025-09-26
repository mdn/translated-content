---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jsxref("String")}} 값의 **`toLowerCase()`** 메서드는 소문자로 변환된 이 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: String.toLowerCase()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## 구문

```js-nolint
toLowerCase()
```

### 매개변수

없음.

### 반환 값

소문자로 변환된 호출 문자열을 표현하는 새로운 문자열.

## 설명

`toLowerCase()` 메서드는 소문자로 변환된 문자열의
값을 반환합니다. `toLowerCase()`는 문자열 `str` 자체의
값에는 영향을 주지 않습니다.

## 예제

### `toLowerCase()` 사용하기

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
