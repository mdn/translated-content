---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---
{{JSRef}}

**`charCodeAt()`** 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html")}}

전체 코드 값을 원하신다면 {{jsxref("String.prototype.codePointAt()")}}을 사용하세요.

## 구문

```js
str.charCodeAt(index)
```

### 매개변수

- `index`
  - : 0 이상이고 문자열의 길이보다 작은 정수. 숫자가 아니라면 0을 기본값으로 사용함.

### 반환 값

주어진 인덱스 대한 문자에 대한 UTF-16 코드를 나타내는 숫자
범위 밖으로 넘어갔을 경우 {{jsxref("Global_Objects/NaN", "NaN")}}

## 설명

Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding. For information on Unicode, see the [JavaScript Guide](/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode).

Note that `charCodeAt()` will always return a value that is less than 65536. This is because the higher code points are represented by a pair of (lower valued) "surrogate" pseudo-characters which are used to comprise the real character. Because of this, in order to examine or reproduce the full character for individual characters of value 65536 and above, for such characters, it is necessary to retrieve not only `charCodeAt(i)`, but also `charCodeAt(i+1)` (as if examining/reproducing a string with two letters), or to use codePointAt(i) instead. See example 2 and 3 below.

`charCodeAt()` returns {{jsxref("Global_Objects/NaN", "NaN")}} if the given index is less than 0 or is equal to or greater than the length of the string.

Backward compatibilty: In historic versions (like JavaScript 1.2) the `charCodeAt()` method returns a number indicating the ISO-Latin-1 codeset value of the character at the given index. The ISO-Latin-1 codeset ranges from 0 to 255. The first 0 to 127 are a direct match of the ASCII character set.

## 예제

### Using `charCodeAt()`

The following example returns 65, the Unicode value for A.

```js
'ABC'.charCodeAt(0); // returns 65
```

### Fixing `charCodeAt()` to handle non-Basic-Multilingual-Plane characters if their presence earlier in the string is unknown

This version might be used in for loops and the like when it is unknown whether non-BMP characters exist before the specified index position.

```js
function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // High surrogate (could change last hex to 0xDB7F to treat high
  // private surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
    }
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    // We return false to allow loops to skip this iteration since should have
    // already handled high surrogate above in the previous iteration
    return false;
    /*hi = str.charCodeAt(idx - 1);
    low = code;
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
  }
  return code;
}
```

### Fixing `charCodeAt()` to handle non-Basic-Multilingual-Plane characters if their presence earlier in the string is known

```js
function knownCharCodeAt(str, idx) {
  str += '';
  var code,
      end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    }
    else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Go one further, since one of the "characters" is part of a surrogate pair
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
