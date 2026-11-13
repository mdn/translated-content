---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("String")}} 값의 **`toUpperCase()`** 메서드는 문자열을 대문자로 변환해 반환합니다.

{{InteractiveExample("JavaScript Demo: String.toUpperCase()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## 구문

```js-nolint
toUpperCase()
```

### 매개변수

없음.

### 반환 값

호출한 문자열을 대문자로 변환한 새로운 문자열.

## 설명

`toUpperCase()` 메서드는 문자열을 대문자로 변환한 값을 반환합니다.
JavaScript의 문자열은 불변이기에 원본 문자열에는
영향을 주지 않습니다.

## 예제

### 기본 사용법

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### 문자열이 아닌 `this`의 문자열 변환

이 메서드는 `this`을 문자열이 아닌 값으로 설정하면 문자열이 아닌 모든 값을 문자열로 변환합니다.

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// 'ABCDEF TRUE' 출력.
console.log(a, b);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
