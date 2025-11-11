---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

**`padStart()`** 메서드는 {{jsxref("String")}} 값의 메서드로, 결과 문자열이 주어진 길이에 도달할 때까지 이 문자열의 시작 부분에 다른 문자열을 (필요하다면 여러 번) 채웁니다.
패딩은 이 문자열의 시작 부분부터 적용됩니다.

{{InteractiveExample("JavaScript Demo: String.padStart()")}}

```js interactive-example
const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

## 구문

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### 매개변수

- `targetLength`
  - : 현재 `str`이 패딩된 후의 결과 문자열의 길이입니다.
    만약 이 값이 `str.length보`다 작거나 같다면,
    `str`이 그대로 반환됩니다.
- `padString` {{optional_inline}}
  - : 현재 `str`을 채우는 데 사용할 문자열입니다.
    만약 `padString`이 `targetLength` 대비 너무 길다면,
    끝 부분이 잘립니다. 기본값은 유니코드
    "space" 문자 (U+0020)입니다.

### 반환 값

지정된 `targetLength`의 {{jsxref("String")}}으로, `padString`이 시작 부분부터 적용됩니다.

## 예제

### 기본 예제

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### 고정 길이 문자열 숫자 변환

```js
// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `String.prototype.padStart` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
