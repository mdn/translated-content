---
title: WebAssembly.LinkError()
slug: WebAssembly/JavaScript_interface/LinkError
---

{{WebAssemblySidebar}}

The **`WebAssembly.LinkError()`** constructor creates a new WebAssembly `LinkError` object, which indicates an error during module instantiation (besides [traps](http://webassembly.org/docs/semantics/#traps) from the start function).

**`WebAssembly.LinkError()`** 생성자는 새 WebAssembly `LinkError` 객체를 만듭니다. 이 객체는 모듈 인스턴스화 중의 오류를 나타냅니다 (시작 함수의 [traps](http://webassembly.org/docs/semantics/#traps)와 함께).

## Syntax

```js
new WebAssembly.LinkError(message, fileName, lineNumber);
```

### Parameters

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 오류 설명.
- `fileName` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드가 들어있는 파일의 이름입니다.
- `lineNumber` {{optional_inline}}{{non-standard_inline}}
  - : 예외의 원인이 된 코드의 행 번호입니다.

## Properties

_`LinkError`_ 생성자에는 고유 한 고유 속성이 없지만 프로토 타입 체인을 통해 일부 속성을 상속합니다.

- `WebAssembly.LinkError.prototype.constructor`
  - : 인스턴스의 프로토 타입을 작성한 함수를 지정합니다.
- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : 에러 메시지. ECMA-262는 {{jsxref ( "URIError")}}가 [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)에서 자체 `message` 속성을 제공하도록 지정했지만 {{jsxref ( "Error.prototype.message")}}를 상속받습니다.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : 에러 이름. {{jsxref("Error")}}를 상속받습니다.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}}
  - : 해당 에러가 발생한 파일의 경로. {{jsxref("Error")}}를 상속받습니다.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}}
  - : 에러가 발생한 파일의 행 번호. {{jsxref("Error")}}를 상속받습니다.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}}
  - : 이 오류가 발생한 행의 열 번호입니다.. {{jsxref("Error")}}를 상속받습니다.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}}
  - : 스텍 추적. {{jsxref("Error")}}를 상속받습니다.

## Methods

_`LinkError`_ 생성자에는 자체 메서드가 없지만 프로토 타입 체인을 통해 일부 메서드를 상속합니다.

- {{jsxref("Error.prototype.toSource", "WebAssembly.LinkError.prototype.toSource()")}}
  - : 동일한 오류로 평가 될 수있는 코드를 반환합니다. {{jsxref("Error")}}를 상속받습니다.
- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : 지정된 Error 객체를 나타내는 문자열을 반환합니다. {{jsxref("Error")}}를 상속받습니다.

## Examples

다음 snippet은 새 `LinkError` 인스턴스를 만들고 콘솔에 세부 정보를 기록합니다.

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "LinkError"
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
