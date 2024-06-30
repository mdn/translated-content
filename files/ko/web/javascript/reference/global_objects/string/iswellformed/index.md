---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("String")}} 값의 **`isWellFormed()`** 메서드는 이 문자열에 [론 서로게이트](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) 포함 여부를 나타내는 불리언을 반환합니다.

## 구문

```js-nolint
isWellFormed()
```

### 매개변수

없음.

### 반환 값

문자열이 론 서로게이트를 포함하고 있지 않으면 `true`를 반환하고 그렇지 않다면 `false`를 반환합니다.

## 설명

JavaScript의 문자열은 UTF-16으로 인코딩됩니다. UTF-16 인코딩에는 서로게이트 쌍이라는 개념이 있으며, 이는 [UTF-16 문자, 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_graphheme_clusters) 섹션에 자세히 소개되어 있습니다.

`isWellFormed()`를 사용하면 문자열이 잘 형성되었는지(즉, 론 서로게이트를 포함하지 않는지) 테스트할 수 있습니다. 사용자 정의 구현과 비교할 때 `isWellFormed()`는 엔진이 문자열의 내부 표현에 직접 접근할 수 있으므로 더 효율적입니다. 문자열을 잘 형성된 문자열로 변환해야 하는 경우 {{jsxref("String/toWellFormed", "toWellFormed()")}} 메서드를 사용하세요. `isWellFormed()`를 사용하면 오류를 발생시키거나 유효하지 않은 것으로 표시하는 등 잘못된 형식의 문자열을 올바른 형식의 문자열과 다르게 처리할 수 있습니다.

## 예제

### isWellFormed() 사용하기

```js
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
```

### encodeURI()에서 오류 피하기

전달된 문자열이 제대로 형태를 갖추지 못한 경우 {{jsxref("encodeURI")}}는 오류가 발생합니다. 문자열을 `encodeURI()`로 전달하기 전에 `isWellFormed()`를 사용하여 문자열을 테스트하면 이 문제를 피할 수 있습니다.

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.isWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
