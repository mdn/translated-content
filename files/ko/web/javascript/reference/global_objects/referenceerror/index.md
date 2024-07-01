---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef}}

**`ReferenceError`** 객체는 현재 범위에서 존재하지 않거나 초기화되지 않은 변수를 참조했을 때 발생하는 에러를 나타냅니다.

`ReferenceError`는 {{Glossary("serializable object", "직렬화 가능한 객체")}}이기 때문에, {{domxref("structuredClone()")}} 혹은 [Workers](/ko/docs/Web/API/Worker) 사이에서 {{domxref("Worker/postMessage()", "postMessage()")}}를 사용하여 복사할 수 있습니다.

## 생성자

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : 새로운 `ReferenceError` 객체를 생성합니다.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : 오류 메시지. {{jsxref("Error")}}에서 상속되었습니다.
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}에서 상속되었습니다.
- {{jsxref("Error.prototype.cause", "ReferenceError.prototype.cause")}}
  - : 오류 원인. {{jsxref("Error")}}에서 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}} {{non-standard_inline}}
  - : 오류가 발생한 파일 경로. {{jsxref("Error")}}에서 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}} {{non-standard_inline}}
  - : 오류가 발생한 곳의 파일 내 줄 수. {{jsxref("Error")}}에서 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}} {{non-standard_inline}}
  - : 오류가 발생한 곳의 줄에서 열 위치. {{jsxref("Error")}}에서 상속되었습니다..
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}} {{non-standard_inline}}
  - : 스택 추적. {{jsxref("Error")}}에서 상속되었습니다.

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
