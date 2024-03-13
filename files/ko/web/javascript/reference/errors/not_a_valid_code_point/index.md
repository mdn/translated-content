---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
---

{{jsSidebar("Errors")}}

## 메시지

```
    RangeError: {0} is not a valid code point (Firefox)
    RangeError: Invalid code point {0} (Chrome)
```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못되었을까?

{{jsxref("String.fromCodePoint()")}} 메소드는 유효한 코드 포인트([code point](https://en.wikipedia.org/wiki/Code_point))만을 받아들입니다.

[code point](https://en.wikipedia.org/wiki/Code_point)는 유니코드의 코드 스페이스 값으로, `0`부터 `0x10FFFF`까지의 정수 범위입니다.

{{jsxref("NaN")}}을 사용하는 값, 음수 (`-1`), 정수가 아닌 수(3.14), 또는 `0x10FFFF` (`1114111`) 보다 큰 값은 이 함수에 적용될 수 없습니다.

## 예

### 유효하지 않은 경우

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### 유효한 경우

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

## 참조

- {{jsxref("String.fromCodePoint()")}}
