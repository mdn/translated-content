---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

**`TypeError`** 객체는 일반적으로 값이 기대하던 자료형이 아니라서 연산을 할 수 없을 때 발생하는 오류를 나타냅니다.

다음과 같은 경우 `TypeError`가 발생할 수 있습니다.

- 함수에 전달된 피연산자 또는 인수가 해당 연산자나 함수가 예상하는 타입과 호환되지 않을 경우
- 변경할 수 없는 값을 수정하려고 할 경우
- 부적절한 방법으로 값을 사용하려고 할 경우

`TypeError`는 {{Glossary("serializable object", "직렬화 가능한 객체")}}이기 때문에,
{{domxref("structuredClone()")}}로 복제하거나
{{domxref("Worker/postMessage()", "postMessage()")}}를 사용하여
[Workers](/ko/docs/Web/API/Worker) 간에 복사할 수 있습니다.

## 생성자

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : 새로운 `TypeError` 객체를 생성합니다.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : 오류 메시지. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.cause", "TypeError.prototype.cause")}}
  - : 오류 원인. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}} {{non-standard_inline}}
  - : 오류가 발생한 파일 경로. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : 오류가 발생한 곳의 줄 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : 오류가 발생한 곳의 열 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}}
  - : 스택 추적. {{jsxref("Error")}}로부터 상속되었습니다.

## 예제

### `TypeError` 오류를 잡아내기

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### `TypeError` 오류를 생성하기

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
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
