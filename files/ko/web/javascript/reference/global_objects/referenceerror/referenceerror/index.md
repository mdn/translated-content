---
title: ReferenceError() 생성자
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError
---

{{JSRef}}

**`ReferenceError`** 객체는 존재하지 않는 변수를 참조할 때의 에러를 의미합니다.

## 구문

```js-nolint
new ReferenceError()
new ReferenceError(message)
new ReferenceError(message, options)
new ReferenceError(message, fileName)
new ReferenceError(message, fileName, lineNumber)
ReferenceError()
ReferenceError(message)
ReferenceError(message, options)
ReferenceError(message, fileName)
ReferenceError(message, fileName, lineNumber)
```

> **Note:** `ReferenceError()` 는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 같이 호출될 때도 있고 아닐 때도 있습니다. 두 방법 모두 새로운 `ReferenceError` 인스턴스를 생성합니다.

### 매개변수

- `message` {{optional_inline}}
  - : 이 오류에 대한 사람이 읽을 수 있는 설명.
- `options` {{optional_inline}}
  - : 아래 속성을 가진 객체
    - `cause` {{optional_inline}}
      - : 오류의 특정 원인을 나타내는 속성을 가리킵니다. 보다 구체적이거나 유용한 오류 메시지와 함께 오류를 처리했다가 다시 발생했을 때 이 속성을 사용하여 원래 오류를 전달할 수 있습니다.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외의 원인이 된 코드가 있는 파일 이름
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외의 원인이 코드의 줄 수

## 예제

### ReferenceError 처리하기

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### ReferenceError 생성하기

```js
try {
  throw new ReferenceError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
