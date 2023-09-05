---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate
---

{{WebAssemblySidebar}}

**`WebAssembly.validate()`** 함수는 바이트가 유효한 wasm 모듈을 형성하는지 (`true`) 또는 생성하지 않는지 (`false`)를 반환하여 WebAssembly 바이너리 코드의 지정된 [typed array](/ko/docs/Web/JavaScript/Typed_arrays)의 유효성을 검사합니다.

## Syntax

<pre class="syntax">WebAssembly.validate(bufferSource);</pre>

### Parameters

- `bufferSource`
  - : 유효성을 검사 할 WebAssembly 바이너리 코드가 들어있는 [typed array](/ko/docs/Web/JavaScript/Typed_arrays) 또는 [ArrayBuffer](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)입니다.

### Return value

`bufferSource`가 유효한 wasm 코드 (`true`)인지 아닌지 (`false`)를 지정하는 부울입니다.

### Exceptions

`bufferSource`가 [typed array](/ko/docs/Web/JavaScript/Typed_arrays)이나 [ArrayBuffer](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)가 아닌 경우 {{jsxref ( "TypeError")}}가 발생합니다.

## Examples

다음 예제 (validate.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/validate.html) 참조 및 [see it live](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html))는 .wasm 모듈을 가져 와서 형식화 된 배열로 변환합니다. 그런 다음 `validate()` 메서드를 사용하여 모듈이 유효한지 확인합니다.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then(function (bytes) {
    var valid = WebAssembly.validate(bytes);
    console.log(
      "The given bytes are " + (valid ? "" : "not ") + "a valid wasm module",
    );
  });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
