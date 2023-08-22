---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiateStreaming()`** 함수는 스트림 된 원본 소스에서 직접 WebAssembly 모듈을 컴파일하고 인스턴스화합니다. Wasm 코드를로드하는 가장 효율적이고 최적화 된 방법입니다.

## Syntax

```js
WebAssembly.instantiateStreaming(source, importObject);
```

### Parameters

- _source_
  - : 스트리밍, 컴파일 및 인스턴스화하려는 .wasm 모듈의 기본 소스를 나타내는 {{domxref ( "Response")}} 객체 또는 promise.
- _importObject_ {{optional_inline}}
  - : 함수 또는 {{jsxref("WebAssembly.Memory")}} 객체와 같이 새로 생성 된 `Instance`로 가져올 값을 포함하는 객체입니다. 컴파일 된 모듈의 각 선언 된 가져 오기에 대해 하나의 일치하는 속성이 있어야합니다. 그렇지 않으면 [WebAssembly.LinkError](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)가 발생합니다.

### Return value

두 개의 필드를 포함하는 `ResultObject`로 해석되는 `Promise` :

- `module`: 컴파일 된 WebAssembly 모듈을 나타내는 {{jsxref ( "WebAssembly.Module")}} 객체입니다. 이 `Module`은 다시 인스턴스화되거나 [postMessage()](/ko/docs/Web/API/Worker/postMessage)를 통해 공유 될 수 있습니다.
- `instance`: [Exported WebAssembly functions](/ko/docs/WebAssembly/Exported_functions)를 포함하는 {{jsxref ( "WebAssembly.Instance")}} 객체입니다.

### Exceptions

- 매개 변수 중 하나가 올바른 유형 또는 구조가 아니면 {{jsxref ( "TypeError")}}가 발생합니다.
- 작업작업이 실패하면 promise는 실패 원인에 따라 {{jsxref ( "WebAssembly.CompileError")}}, {{jsxref ( "WebAssembly.LinkError")}} 또는 {{jsxref ( "WebAssembly.RuntimeError")}}로 거부됩니다.

## Examples

다음 예제 (GitHub의 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) 데모보기 및 [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html))에서는 원본 소스에서 .wasm 모듈을 직접 스트리밍 한 다음 컴파일하고 인스턴스화합니다. 약속은 `ResultObject`로 충족됩니다.`instantiateStreaming()` 함수는 {{domxref("Response")}} 객체에 대한 promise를 받아들이므로 직접 {{domxref("fetch()")}} 호출을 전달할 수 있으며 응답을 수행하면 함수에 응답을 전달합니다.

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

그런 다음 `ResultObject`의 인스턴스 구성원에 액세스하고 포함 된 내 보낸 함수를 호출합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
