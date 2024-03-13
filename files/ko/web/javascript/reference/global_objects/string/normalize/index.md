---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
---

{{JSRef}}

**`normalize()`** 메서드는 주어진 문자열을 유니코드 정규화 방식(Unicode Normalization Form)에 따라 정규화된 형태로 반환합니다. 만약 주어진 값이 문자열이 아닐 경우에는 우선 문자열로 변환 후 정규화합니다.

{{EmbedInteractiveExample("pages/js/string-normalize.html")}}

## 구문

```js
str.normalize([form]);
```

### 매개변수

- `form`
  - : 유니코드 정규화 방식을 지정합니다. `"NFC"`, `"NFD"`, `"NFKC"`, `"NFKD"` 중 하나이며, 생략되거나 {{jsxref("undefined")}} 일 경우 `"NFC"`가 사용됩니다.\* `NFC` — 정규형 정준 결합(Normalization Form Canonical Composition).
    - `NFD` — 정규형 정준 분해(Normalization Form Canonical Decomposition).
    - `NFKC` — 정규형 호환성 결합(Normalization Form Compatibility Composition).
    - `NFKD` — 정규형 호환성 분해(Normalization Form Compatibility Decomposition).

### 반환 값

주어진 문자열을 유니코드 정규화 방식에 따라 정규화된 문자열로 반환합니다.

### 예외

- {{jsxref("RangeError")}}
  - : `form`이 위에서 명시된 값 중 하나가 아닐 경우 {{jsxref("RangeError")}} 에러가 발생합니다.

## 설명

`normalize()` 메서드는 문자열을 유니코드 정규화 방식에 따라 정규화된 형태로 반환합니다. 문자열의 값 자체에는 영향을 주지 않습니다.

## 예제

### `normalize()` 사용하기

```js
// 원본 문자열

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = "\u1E9B\u0323";

// 정규형 정준 결합 (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // 위와 같은 결과

// 정규형 정준 분해 (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // '\u017F\u0323\u0307'

// 정규형 호환성 결합 (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // '\u1E69'

// 정규형 호환성 분해 (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

### 한글에 `normalize()` 사용하기

```js
// 결합된 한글 문자열

// U+D55C: 한(HANGUL SYLLABLE HAN)
// U+AE00: 글(HANGUL SYLLABLE GEUL)
var first = "\uD55C\uAE00";

// 정규형 정준 분해 (NFD)
// 정준 분해 결과 초성, 중성, 종성의 자소분리가 일어납니다.
// 일부 브라우저에서는 결과값 '한글'이 자소분리된 상태로 보여질 수 있습니다.

// U+1112: ᄒ(HANGUL CHOSEONG HIEUH)
// U+1161: ᅡ(HANGUL JUNGSEONG A)
// U+11AB: ᆫ(HANGUL JONGSEONG NIEUN)
// U+1100: ᄀ(HANGUL CHOSEONG KIYEOK)
// U+1173: ᅳ(HANGUL JUNGSEONG EU)
// U+11AF: ᆯ(HANGUL JONGSEONG RIEUL)
var second = first.normalize("NFD"); // '\u1112\u1161\u11AB\u1100\u1173\u11AF'

// 정규형 정준 결합 (NFC)
// 정준 결합 결과 자소분리 되었던 한글이 결합됩니다.

// U+D55C: 한(HANGUL SYLLABLE HAN)
// U+AE00: 글(HANGUL SYLLABLE GEUL)
var third = second.normalize("NFC"); // '\uD55C\uAE00'

console.log(second === third); // 같은 글자처럼 보이지만 false를 출력합니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Unicode Standard Annex #15, Unicode Normalization Forms](http://www.unicode.org/reports/tr15/)
- [Unicode equivalence](http://en.wikipedia.org/wiki/Unicode_equivalence)
- [유니코드 정규화](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_%EC%A0%95%EA%B7%9C%ED%99%94)
