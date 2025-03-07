---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`String.fromCodePoint()`** 정적 메서드는 명시된 코드 포인트의 시퀀스로부터 생성된 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: String.fromCodePoint()", "shorter")}}

```js interactive-example
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"
```

## 구문

```js-nolint
String.fromCodePoint()
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### 매개변수

- `num1`, …, `numN`
  - : 유니코드의 코드 포인트를 표현하는 `0`부터 `0x10FFFF` 이하의 정수.

### 반환 값

명시된 코드 포인트의 시퀀스를 사용하여 생성된 문자열

### 예외

- {{jsxref("RangeError")}}
  - : `numN`이 정수가 아니거나 `0`보다 작거나 혹은 숫자로 변환된 후 `0x10FFFF`보다 크면 발생합니다.

## 설명

`fromCodePoint()`는 `String`의 정적 메서드이기 때문에, 항상 사용자가 만든 `String` 값의 메서드가 아닌 `String.fromCodePoint()`로 사용합니다.

유니코드 코드 포인트의 범위는 `0`에서 `1114111`(`0x10FFFF`)까지입니다. UTF-16에서 각 문자열 인덱스는 `0` - `65535` 값을 갖는 코드 단위입니다. 더 높은 코드 포인트는 16비트 서로게이트 의사 문자의 쌍으로 표현됩니다. 따라서 `fromCodePoint()`는 전달된 인수 수보다 [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length)(UTF-16 코드 단위)가 더 큰 문자열을 반환할 수 있습니다. 유니코드에 대한 자세한 내용은 [UTF-16 문자, 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)를 참조하세요.

## 예제

### fromCodePoint() 사용하기

아래는 유효한 입력입니다.

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

아래는 유효하지 않은 입력입니다.

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### fromCharCode()와의 비교

{{jsxref("String.fromCharCode()")}}는 코드 포인트를 지정하여 보조 문자(예: 코드 포인트 `0x010000` - `0x10FFFF`)를 반환할 수 없습니다. 대신 보조 문자를 반환하려면 UTF-16 서로게이트 쌍이 필요합니다.

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

반면 `String.fromCodePoint()`는 코드 포인트(UTF-32 코드 단위와 동일)를 지정하여 4바이트 보조 문자뿐만 아니라 보다 일반적인 2바이트 BMP 문자도 반환할 수 있습니다.

```js
String.fromCodePoint(0x1f303); // or 127747 in decimal
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.fromCodePoint` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
