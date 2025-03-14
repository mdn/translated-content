---
title: "RangeError: repeat count must be less than infinity"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
---

{{jsSidebar("Errors")}}

## 메시지

```
    RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)
    (repeat count는 infinity보다 작아야하며, 최대 문자열 크기를 넘길 수 없습니다.)

    RangeError: Invalid count value (Chrome)
```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못되었을까?

{{jsxref("String.prototype.repeat()")}} 메소드가 사용되었습니다. 이 메소드는 문자열을 반복하는 수를 예측하는 카운트 파라메터를 가지고 있었습니다. 그리고 이 파라메터는 0보다 커야하며, 양의 {{jsxref("Infinity")}} 보다 작아야 했으며, 음수는 허용되지 않았습니다. 이 값의 허용 범위는 이렇게 표현될 수 있습니다. : \[0, +∞).

결과인 문자열은 최대 문자열 크기보다 클 수 없지만, JavaScript 에서는 다를 수 있습니다. Firefox (SpiderMonkey) 에서의 최대 문자열 크기는 2^28 -1 (`0xFFFFFFF`)입니다.

## 예

### 허용되지 않는 경우

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 28); // RangeError
```

### 허용되는 경우

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (숫자는 정수로 변환될 것입니다.)
```

## 참조

- {{jsxref("String.prototype.repeat()")}}
