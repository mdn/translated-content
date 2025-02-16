---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("String")}} 값의 **`padEnd()`** 메서드는
이 문자열을 주어진 문자열(필요한 경우 반복됨)로 채워서 결과 문자열이 지정된 길이에 도달하도록 합니다.
패딩은 이 문자열의 끝에서부터 적용됩니다.

{{InteractiveExample("JavaScript Demo: String.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## 구문

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### 매개변수

- `targetLength`
  - : 현재 `str`이 패딩된 후의 결과 문자열의 길이입니다.
    이 값이 `str.length`보다 작거나 같으면
    현재 문자열이 그대로 반환됩니다.
- `padString` {{optional_inline}}
  - : 현재 `str`을 채우는 데 사용할 문자열입니다.
    `padString`이 `targetLength` 내에 맞지 않을 정도로 길면 잘립니다.
    왼쪽에서 오른쪽으로 쓰는 언어의 경우 가장 왼쪽 부분이,
    오른쪽에서 왼쪽으로 쓰는 언어의 경우 가장 오른쪽 부분이 적용됩니다.
    이 매개변수의 기본값은
    " " (U+0020)입니다.

### 반환값

반환값은 지정된 `targetLength`를 가진
{{jsxref("String")}}으로, 현재 `str`의 끝에
`padString`이 적용된 상태입니다.

## 예제

### padEnd 사용하기

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `String.prototype.padEnd` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
