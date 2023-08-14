---
title: RangeError() 생성자
slug: Web/JavaScript/Reference/Global_Objects/RangeError/RangeError
---

{{JSRef}}

**`RangeError()`** 생성자는 어떤 값이 집합에 없거나 허용되는 범위가 아닐 때 발생하는 오류를 생성합니다

## 구문

```js-nolint
new RangeError()
new RangeError(message)
new RangeError(message, options)
new RangeError(message, fileName)
new RangeError(message, fileName, lineNumber)

RangeError()
RangeError(message)
RangeError(message, options)
RangeError(message, fileName)
RangeError(message, fileName, lineNumber)
```

> **참고:** `RangeError()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출하거나 혹은 `new` 없이 호출할 수 있습니다. 두 방법 모두 새로운 `RangeError` 인스턴스를 생성합니다.

### 매개변수

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 오류에 대한 설명
- `options` {{optional_inline}}
  - : 다음의 속성을 가지는 객체.
    - `cause` {{optional_inline}}
      - : 오류의 특정 원인을 가리키는 속성.
        오류를 잡아서 좀 더 상세하거나 유용한 오류 메시지와 함께 예외를 다시 발생시킬 때 이 속성을 원래 오류를 전달하는데 사용할 수 있습니다.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 예외가 발생한 코드를 담고 있는 파일 이름
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 예외가 발상한 코드의 줄 수

## 예제

### RangeError 사용하기(숫자 값일 경우)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}
try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### RangeError 사용하기 (숫자 값이 아닐 경우)

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}
try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
