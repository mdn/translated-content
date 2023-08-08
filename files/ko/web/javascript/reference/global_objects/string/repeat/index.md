---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}

**`repeat()`** 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

## 구문

```js
str.repeat(count);
```

### 매개변수

- `count`
  - : 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수(\[0, +∞)).

### 반환값

현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열.

### 예외

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: 반복 횟수는 양의 정수여야 함.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: 반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨.

## 예제

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
```

## 폴리필

`repeat`은 ECMAScript 2015 명세에 추가됐습니다. 따라서 어떤 표준 구현체에서는 사용할 수 없을 수도 있습니다. 그러나 아래 코드를 포함하면 지원하지 않는 플랫폼에서도 `repeat`을 사용할 수 있습니다.

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null) {
      throw new TypeError("can't convert " + this + " to object");
    }
    var str = "" + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count == Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return "";
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        "repeat count must not overflow maximum string size",
      );
    }
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
