---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile
---

{{WebAssemblySidebar}}

**`WebAssembly.compile()`**함수는 WebAssembly 바이너리 코드에서 {{jsxref ( "WebAssembly.Module")}}을 컴파일합니다. 이 함수는 모듈을 인스턴스화하기 전에 컴파일해야하는 경우에 유용합니다. 그렇지 않으면 {{jsxref ( "WebAssembly.instantiate ()")}} 함수를 사용해야합니다.

## Syntax

```js
WebAssembly.compile(bufferSource);
```

### Parameters

- _bufferSource_
  - : 컴파일 할 .wasm 모듈의 이진 코드가 들어있는 [typed array](/ko/docs/Web/JavaScript/Typed_arrays) 또는 [ArrayBuffer](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)입니다.

### Return value

`Promise`는 컴파일 된 모듈로 표현된 {{jsxref ( "WebAssembly.Module")}} 객체로 반환됩니다.

### Exceptions

- `bufferSource`가 [typed array](/ko/docs/Web/JavaScript/Typed_arrays)가 아니면 {{jsxref("TypeError")}}가 발생합니다.
- 컴파일에 실패하면 promise는 {{jsxref("WebAssembly.CompileError")}}와 함께 reject가 반환됩니다.

## Examples

다음은 `compile()` 함수를 사용하여 simple.wasm 바이트 코드를 컴파일 하고 [postMessage()](/ko/docs/Web/API/Worker/postMessage)를 사용하여 [worker](/ko/docs/Web/API/Web_Workers_API)에 보내는 예제입니다.

```js
var worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> **참고:** 대부분의 경우에 {{jsxref("WebAssembly.compileStreaming()")}}를 사용하는 것이 좋습니다. 이는 `compile()`보다 효율적이기 때문입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
