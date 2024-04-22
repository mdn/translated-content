---
title: WebAssembly.CompileError()
slug: WebAssembly/JavaScript_interface/CompileError
---

{{WebAssemblySidebar}}

**`WebAssembly.CompileError()`**생성자는 WebAssembly 디코딩 또는 유효성 검사 중에 발생한 오류를 나타내는 WebAssembly `CompileError` 객체를 새로 만듭니다.

## Syntax

```js
new WebAssembly.CompileError(message, fileName, lineNumber);
```

### Parameters

- `message` {{optional_inline}}
  - : 사람이 읽을수 있는 형태의 에러에 대한 설명.
- `fileName` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드가 들어있는 파일의 이름입니다.
- `lineNumber` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드의 행 번호입니다.

## Properties

_`CompileError` 생성자에는 고유 한 고유 속성이 없지만 프로토 타입 체인을 통해 일부 속성을 상속합니다._

- `WebAssembly.CompileError.prototype.constructor`
  - : 인스턴스의 프로토 타입을 작성한 함수를 지정합니다.
- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : 에러 메시지. ECMA-262는 {{jsxref ( "URIError")}}가 [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)에서 자체 `message` 속성을 제공하도록 지정했지만 {{jsxref ( "Error.prototype.message")}}를 상속받습니다.
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : 에러 명칭. {{jsxref("Error")}}에서 상속합니다.
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}}
  - : 에러가 발생한 파일의 경로. {{jsxref("Error")}}에서 상속합니다.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}}
  - : 에러가 발생한 파일의 코드 줄번호. {{jsxref("Error")}}에서 상속합니다.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}}
  - : 에러가 발생한 줄의 열 번호. {{jsxref("Error")}}에서 상속합니다.
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}}
  - : 스텍 추적. {{jsxref("Error")}}에서 상속합니다.

## Methods

_`CompileError`_ 생성자에는 자체 메서드가 없지만 프로토 타입 체인을 통해 일부 메서드를 상속합니다.

- {{jsxref("Error.prototype.toSource", "WebAssembly.CompileError.prototype.toSource()")}}
  - : 동일한 오류로 판단할 수 있는 코드를 반환합니다. {{jsxref("Error")}}에서 상속합니다.
- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : 지정된 Error 객체를 나타내는 문자열을 반환합니다. {{jsxref("Error")}}에서 상속합니다.

## Examples

다음 스 니펫은 새 `CompileError` 인스턴스를 만들고 콘솔에 세부 정보를 기록합니다.

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)

<!---->
