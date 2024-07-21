---
title: String.prototype.toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("String")}}값의 **`toWellFormed()`** 메서드는 이 문자열의 모든 [론 서로게이트](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)가 유니코드 대체 문자 U+FFFD로 대체된 문자열을 반환합니다.

## 구문

```js-nolint
toWellFormed()
```

### 매개변수

없음.

### 반환 값

이 문자열의 복사본인 새 문자열로, 모든 론 서로게이트가 유니코드 대체 문자 U+FFFD로 대체됩니다. `str`이 [잘 형성된 문자열](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)인 경우에도 새 문자열이 반환됩니다(기본적으로 `str`의 복사본).

## 설명

JavaScript의 문자열은 UTF-16으로 인코딩됩니다. UTF-16 인코딩에는 서로게이트 쌍이라는 개념이 있으며, 이는 [UTF-16 문자, 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) 섹션에 자세히 소개되어 있습니다.

`toWellFormed()`는 이 문자열의 코드 단위를 반복하고 모든 론 서로게이트를 [유니코드 대체 문자](<https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character>) U+FFFD `�`로 대체합니다. 이렇게 하면 반환된 문자열이 올바른 형식의 문자열이 되어 {{jsxref("encodeURI")}}와 같이 올바른 형식의 문자열을 기대하는 함수에서 사용할 수 있습니다. 사용자 정의 구현과 비교할 때 `toWellFormed()`는 엔진이 문자열의 내부 표현에 직접 접근할 수 있으므로 더 효율적입니다.

잘못된 형식의 문자열이 {{domxref("TextEncoder")}}와 같은 특정 문맥에서 사용되는 경우 동일한 대체 문자를 사용하여 자동으로 올바른 형식의 문자열로 변환됩니다. 론 서로게이트가 렌더링될 때는 대체 문자(내부에 물음표가 있는 다이아몬드)로도 렌더링됩니다.

## 예제

### toWellFormed() 사용하기

```js
const strings = [
  // 론 상위 서로게이트
  "ab\uD800",
  "ab\uD800c",
  // 론 하위 서로게이트
  "\uDFFFab",
  "c\uDFFFab",
  // 잘 형성된 문자열
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### encodeURI()에서 오류 피하기

{{jsxref("encodeURI")}}는 전달받은 문자열이 잘 형성된 문자열이 아니라면 오류를 발생시킵니다. 이는 `toWellFormed()`를 사용해서 잘 형성된 문자열로 변환함으로서 피할 수 있습니다.

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.toWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
