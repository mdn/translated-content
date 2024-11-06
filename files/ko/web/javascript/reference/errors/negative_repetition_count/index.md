---
title: "RangeError: repeat count must be non-negative"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
---

{{jsSidebar("Errors")}}

## 메시지

```
    RangeError: repeat count must be non-negative (Firefox)
    RangeError: Invalid count value (Chrome)
```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못되었을까?

{{jsxref("String.prototype.repeat()")}} 메소드가 사용되었습니다. 이 메소드는 문자열이 반복되는 수를 예측하는 카운트 파라메터를 가지고 있었습니다. 이 파라메터는 0보다 크고, 양의 {{jsxref("Infinity")}} 보다는 작으며, 음수는 될수 없습니다. 이 범위는 이렇게 표현 될 수 있습니다. : \[0, +∞)

## 예

### 허용되지 않는 경우

```js example-bad
"abc".repeat(-1); // RangeError
```

### 허용되는 경우

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (수는 정수로 변환될 것입니다.)
```

## 참조

- {{jsxref("String.prototype.repeat()")}}
