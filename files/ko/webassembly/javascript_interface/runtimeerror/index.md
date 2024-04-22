---
title: WebAssembly.RuntimeError()
slug: WebAssembly/JavaScript_interface/RuntimeError
---

{{WebAssemblySidebar}}

**`WebAssembly.RuntimeError()`** 생성자는 WebAssembly에서 [trap](http://webassembly.org/docs/semantics/#traps)을 지정할 때마다 throw되는 새 WebAssembly `RuntimeError` 객체를 만듭니다.

## Syntax

```js
new WebAssembly.RuntimeError(message, fileName, lineNumber);
```

### Parameters

- `message` {{optional_inline}}
  - : 인간이 읽을 수있는 오류 설명.
- `fileName` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드가 들어있는 파일의 이름입니다.
- `lineNumber` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드의 행 번호입니다.

## Properties

_`RuntimeError` 생성자에는 고유 한 고유 속성이 없지만 프로토 타입 체인을 통해 일부 속성을 상속합니다._

- `WebAssembly.RuntimeError.prototype.constructor`
  - : 인스턴스의 프로토 타입을 작성한 함수를 지정합니다.
- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : 에러 메시지. ECMA-262는 {{jsxref ( "URIError")}}가 [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)에서 자체 `message` 속성을 제공하도록 지정했지만 {{jsxref ( "Error.prototype.message")}}를 상속받습니다.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : 오류 이름. {{jsxref ( "Error")}}에서 상속됩니다.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}
  - : 이 오류를 발생시킨 파일의 경로입니다. {{jsxref ( "Error")}}에서 상속됩니다.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}
  - : 이 오류가 발생한 파일의 행 번호입니다. {{jsxref ( "Error")}}에서 상속됩니다.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}
  - : 이 오류가 발생한 행의 열 번호입니다. {{jsxref ( "Error")}}에서 상속됩니다.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}
  - : 스택 추적. {{jsxref ( "Error")}}에서 상속됩니다.

## Methods

_`RuntimeError` 생성자에는 자체 메서드가 없지만 프로토 타입 체인을 통해 일부 메서드를 상속합니다._

- {{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}
  - : 동일한 오류로 평가 될 수있는 코드를 반환합니다. {{jsxref ( "Error")}}에서 상속됩니다.
- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : 지정된 `Error` 객체를 나타내는 문자열을 반환합니다. {{jsxref ( "Error")}}에서 상속됩니다.

## Examples

다음의 스니펫은, 새로운 RuntimeError 인스턴스를 작성해, 그 상세를 콘솔에 기록합니다.

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
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
