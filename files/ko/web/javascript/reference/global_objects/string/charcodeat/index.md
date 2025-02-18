---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{JSRef}}

{{jsxref("String")}} 값의 **`charCodeAt()`** 메서드는 주어진 인덱스의 UTF-16 코드 단위를 표현하는 `0`과 `65535` 사이의 정수를 반환합니다.

`charCodeAt()`은 항상 문자열을 [UTF-16 코드 단위](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)의 시퀀스로 색인하므로 론 서로게이트(lone surrogates)를 반환할 수 있습니다. 주어진 인덱스에서 전체 유니코드 코드 포인트를 가져오려면 {{jsxref("String.prototype.codePointAt()")}}를 사용합니다.

{{InteractiveExample("JavaScript Demo: String.charCodeAt()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"
```

## 구문

```js-nolint
charCodeAt(index)
```

### 매개변수

- `index`
  - : 반환할 문자의 0 기반 인덱스. [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)되는 원칙에 따라 `undefined`은 0으로 변환됩니다.

### 반환 값

명시된 `index`에 있는 문자의 UTF-16 코드 단위 값를 표현하는 `0` 부터 `65535`사이의 정수입니다. 만약 `index`가 `0`부터 `str.length - 1` 사이의 범위를 벗어난다면 `charCodeAt()`은 {{jsxref("NaN")}}을 반환합니다.

## 설명

문자열의 문자는 왼쪽에서 오른쪽으로 색인됩니다. 첫 번째 문자의 인덱스는 `0`이고 `str`이라 불리는 문자열의 마지막 문자열의 인덱스는 `str.length - 1`입니다.

유니코드 코드 포인트 범위는 `0`에서 `1114111`(`0x10FFFF`)까지입니다. 더 높은 코드 포인트는 16비트 의사 문자의 서로게이트로 표현되기 때문에 `charCodeAt()`은 항상 `65536`보다 작은 값을 반환합니다. 따라서 `65535`보다 큰 값을 가진 전체 문자를 얻으려면 `charCodeAt(i)`뿐만 아니라 `charCodeAt(i + 1)`도 검색하거나(두 문자로 된 문자열을 조작하는 것처럼) {{jsxref("String/codePointAt", "codePointAt(i)")}}를 대신 사용해야 합니다. 유니코드에 대해 정보를 더 알고 싶으시면 [UTF-16 문자, 유니코드 코드 포인트 그리고 그래프 클러스터](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)를 참고하시기 바랍니다.

## 예제

### charCodeAt() 사용하기

다음 예제는 유니코드 값 A에 해당하는 `65`를 반환합니다.

```js
"ABC".charCodeAt(0); // 65 반환
```

`charCodeAt()`은 유효한 유니코드 문자가 아닌 론 서로게이트(lone surrogates)를 반환할 수 있습니다.

```js
const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 유효한 유니코드 문자가 아닌 55362, 혹은 d842
console.log(str.charCodeAt(1)); // 유효한 유니코드 문자가 아닌 57271, 혹은 dfb7
```

주어진 인덱스의 온전한 유니코드 코드 포인트를 얻기 위해서는 {{jsxref("String.prototype.codePointAt()")}}를 사용하세요.

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> **참고:** `charCodeAt()`을 사용하여 `codePointAt()`을 다시 구현하지 마세요. UTF-16 서로게이트에서 유니코드 코드 포인트로의 변환은 복잡하며 `codePointAt()`은 문자열의 내부 표현을 직접 사용하므로 성능이 더 우수할 수 있습니다. 필요한 경우 `codePointAt()`에 대한 폴리필을 설치하시기 바랍니다.

아래는 [유니코드 FAQ](https://unicode.org/faq/utf_bom.html#utf16-3)에서 발췌한 UTF-16 코드 단위 쌍을 유니코드 코드 포인트로 변환하는 가능한 알고리즘입니다.

```js
// constants
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
