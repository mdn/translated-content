---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("String")}} 값의 **`codePointAt()`** 메서드는 주어진 인덱스에서 시작하는 문자의 유니코드 코드 포인트 값인 음수가 아닌 정수를 반환합니다. 인덱스는 여전히 유니코드 코드 포인트가 아닌 UTF-16 코드 단위를 기반으로 한다는 점에 유의하시기 바랍니다.

{{InteractiveExample("shorter")}}

```js interactive-example
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"

```

## 구문

```js-nolint
codePointAt(index)
```

### 매개변수

- `index`
  - : 반환할 문자의 0 기반 인덱스. [정수로 변환되는 규칙](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)에 따라 `undefined`는 0으로 변환됩니다.

### 반환 값

주어진 `index`에 있는 문자열의 코드 포인트 값을 표현하는 음이 아닌 정수.

- `index`가 `0`부터 `str.length - 1`의 범위에서 벗어난다면, `codePointAt()`은 {{jsxref("undefined")}}을 반환합니다.
- `index`에 있는 요소가 서로게이트로 선행 UTF-16이라면 서로게이트 쌍의 코드 포인트를 반환합니다.
- `index`에 있는 요소가 서로게이트로 후행 UTF-16이라면 서로게이트 후행 만을 반환합니다.

## 설명

문자열의 문자는 왼쪽에서 오른쪽으로 인덱싱됩니다. 첫 번째 문자의 인덱스는 `0`이고, 문자열 `str`의 마지막 문자의 인덱스는 `str.length - 1`입니다.

유니코드 코드 포인트의 범위는 `0`에서 `1114111`(`0x10FFFF`)까지입니다. UTF-16에서 각 문자열 인덱스는 `0` - `65535` 값을 갖는 코드 단위입니다. 더 큰 코드 포인트 값은 16비트 서로게이트 의사 문자의 한 쌍으로 표현됩니다. 따라서 `codePointAt()`은 두 문자열 인덱스에 걸쳐 있을 수 있는 코드 포인트를 반환합니다. 유니코드에 대한 자세한 내용은 [UTF-16 문자, 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)를 참조하세요.

## 예제

### codePointAt() 사용하기

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### 반복문에서 codePointAt() 사용

반복에 문자열 인덱스를 사용하면 동일한 코드 포인트를 두 번(선행 서로게이트에 한 번, 후행 서로게이트에 한 번) 방문하게 되고 두 번째 `codePointAt()`은 후행 서로게이트만 반환하므로 인덱스로 반복은 피하는 것이 좋습니다.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

대신 코드 포인트별로 반복하는 문자열의 [`@@iterator`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)를 호출하는 [`for...of`](/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) 문이나 [문자열 전개](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)를 사용합니다. 그런 다음 `codePointAt(0)`을 사용하여 각 요소의 코드 포인트를 가져옵니다.

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.codePointAt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
