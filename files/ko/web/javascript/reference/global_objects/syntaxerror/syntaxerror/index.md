---
title: SyntaxError() constructor
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
l10n:
  sourceCommit: f5d6eeec8c270d74f92e59dd915261e8bf1d083f
---

{{JSRef}}

**`SyntaxError()`** 생성자는 {{jsxref("SyntaxError")}} 객체를 생성합니다.

## 구문

```js-nolint
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, options)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)

SyntaxError()
SyntaxError(message)
SyntaxError(message, options)
SyntaxError(message, fileName)
SyntaxError(message, fileName, lineNumber)
```

> **참고:** `SyntaxError()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 쓰거나 함께 쓰지 않아도 됩니다. 두 방법 모두 새로운 `SyntaxError` 인스턴스를 생성합니다.

### 매개변수

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 오류에 대한 설명
- `options` {{optional_inline}}
  - : 다음의 속성을 가지는 객체
    - `cause` {{optional_inline}}
      - : 오류의 구체적인 원인을 나타내는 속성입니다.
        보다 구체적이거나 유용한 오류 메시지가 포함된 오류를 처리 및 다시 예외를 발생시킬 때 이 속성을 사용하여 원래 오류를 전달할 수 있습니다.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외가 발생한 코드가 초함된 파일의 이름
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외가 발생한 코드의 라인 수

## 예제

### SyntaxError 처리하기

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // 오류 스택
}
```

### SyntaxError 만들기

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // 오류 스택
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
