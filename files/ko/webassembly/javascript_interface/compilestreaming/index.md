---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
---

{{WebAssemblySidebar}}

**`WebAssembly.compileStreaming()`**함수는 스트림 된 원본 소스에서 직접 {{jsxref ( "WebAssembly.Module")}}을 컴파일합니다. 이 함수는 모듈을 인스턴스화하기 전에 컴파일해야하는 경우 유용합니다 (그렇지 않으면 {{jsxref ( "WebAssembly.instantiateStreaming ()")}} 함수를 사용해야합니다).

## Syntax

```js
WebAssembly.compileStreaming(source);
```

### Parameters

- _source_
  - : 스트리밍 및 컴파일하려는 .wasm 모듈의 기본 소스를 나타내는 {{domxref ( "Response")}} 객체 또는 약속을 수행합니다.

### Return value

`Promise`는 컴파일 된 모듈로 표현된 [`WebAssembly.Module`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) 객체로 반환됩니다.

### Exceptions

- `bufferSource`가 [typed array](/ko/docs/Web/JavaScript/Typed_arrays)가 아니면 [`TypeError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError)가 발생합니다.
- 컴파일에 실패하면 promise는 [`WebAssembly.CompileError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError)와 함께 reject가 반환됩니다.

## Examples

다음 예제 (GitHub의 [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) 데모 및 [라이브보기](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html))에서 기본 소스의 .wasm 모듈을 직접 스트리밍 한 다음 {{jsxref ( "WebAssembly.Module")}} 객체로 컴파일합니다. `compileStreaming()` 함수는 {{domxref ( "Response")}} 객체에 대한 promise를 받으므로 직접 {{domxref("fetch()")}} 호출을 전달할 수 있습니다.

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

결과 모듈 인스턴스는 {{jsxref ( "WebAssembly.instantiate ()")}}를 사용하여 인스턴스화되고 내 보낸 함수가 호출됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
