---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiate()`** 함수를 사용하면 WebAssembly 코드를 컴파일하고 인스턴스화 할 수 있습니다. 이 함수에는 두개의 overloads가 있습니다.

- 기본 오버로드는 [typed array](/ko/docs/Web/JavaScript/Typed_arrays) 또는 {{jsxref ( "ArrayBuffer")}}의 형태로 WebAssembly 바이너리 코드를 취해 컴파일 및 인스턴스화를 한 번에 수행합니다. 반환 된 Promise는 컴파일 된 {{jsxref ( "WebAssembly.Module")}} 및 첫 번째 {{jsxref ( "WebAssembly.Instance")}}로 해석됩니다.
- 두번째 오버로드는 이미 컴파일 된 {{jsxref ( "WebAssembly.Module")}}을 취하여 해당 `Module`의 `Instance`로 해석되는 `Promise`을 반환합니다. 이 overload는 `Module`이 이미 컴파일된 경우 유용합니다.

> **경고:** **중요 :** **이 방법은 wasm 모듈을 가져와 인스턴스화하는 가장 효율적인 방법은 아닙니다. 가능하다면 원시 바이트 코드에서 모듈을 모두 한 단계로 가져오고, 컴파일하고 인스턴스화하는 대신 최신 {{jsxref ( "WebAssembly.instantiateStreaming ()")}} 메서드를 사용해야합니다. {{jsxref ( "ArrayBuffer")}} 로의 변환이 필요합니다.**

## Syntax

### Primary overload — taking wasm binary code

```
Promise<ResultObject> WebAssembly.instantiate(bufferSource, importObject);
```

#### Parameters

- _bufferSource_
  - : 컴파일 할 .wasm 모듈의 이진 코드가 들어있는 [typed array](/ko/docs/Web/JavaScript/Typed_arrays) 또는 {{jsxref("ArrayBuffer")}}입니다.
- _importObject_ {{optional_inline}}
  - : 함수 또는 {{jsxref ( "WebAssembly.Memory")}} 객체와 같이 새로 생성 된 `인스턴스`로 가져올 값을 포함하는 객체입니다. 컴파일 된 모듈의 각 선언 된 가져 오기에 대해 하나의 일치하는 속성이 있어야합니다. 그렇지 않으면 {{jsxref("WebAssembly.LinkError")}}가 발생합니다.

#### Return value

두개의 필드를 포함하는 `ResultObject`를 가진 `Promise`를 반환:

- `module`: 컴파일 된 WebAssembly 모듈을 나타내는 {{jsxref ( "WebAssembly.Module")}} 객체입니다. 이 `Module`은 {{domxref("Worker.postMessage", "postMessage()")}}를 통해 공유되거나 [cached in IndexedDB](/ko/docs/WebAssembly/Caching_modules)로 다시 인스턴스화 될 수 있습니다.
- `instance`: [Exported WebAssembly functions](/ko/docs/WebAssembly/Exported_functions)을 포함하는 {{jsxref ( "WebAssembly.Instance")}} 객체입니다.

#### Exceptions

- 매개 변수 중 하나가 올바른 유형 또는 구조가 아니면 {{jsxref ( "TypeError")}}가 발생합니다.
- 작업이 실패하면 promise는 실패 원인에 따라 {{jsxref ( "WebAssembly.CompileError")}}, {{jsxref ( "WebAssembly.LinkError")}} 또는 {{jsxref ( "WebAssembly.RuntimeError")}}로 reject됩니다.

### Secondary overload — taking a module object instance

```
Promise<WebAssembly.Instance> WebAssembly.instantiate(module, importObject);
```

#### Parameters

- _module_
  - : {{jsxref ( "WebAssembly.Module")}} 객체가 인스턴스화됩니다.
- _importObject_ {{optional_inline}}
  - : 함수 또는 {{jsxref ( "WebAssembly.Memory")}} 객체와 같이 새로 생성 된 인스턴스로 가져올 값을 포함하는 객체입니다. 선언 된 각 `module` 가져 오기에 대해 일치하는 속성이 하나 있어야합니다. 그렇지 않으면 {{jsxref("WebAssembly.LinkError")}} 가 발생합니다.

#### Return value

A `Promise` that resolves to an {{jsxref("WebAssembly.Instance")}} object.

#### Exceptions

- 매개 변수 중 하나가 올바른 유형 또는 구조가 아니면 {{jsxref ( "TypeError")}}가 발생합니다.
- If the operation fails, the promise rejects with a {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.
  작업이 실패하면 promise는 실패 원인에 따라 {{jsxref ( "WebAssembly.CompileError")}}, {{jsxref ( "WebAssembly.LinkError")}} 또는 {{jsxref ( "WebAssembly.RuntimeError")}}로 reject됩니다.

## Examples

**Note**: 대부분의 경우 `instantiate()`보다 더 효율적이므로 {{jsxref ( "WebAssembly.instantiateStreaming ()")}}을 사용하는 것이 좋습니다.

### First overload example

fetch를 사용하여 일부 WebAssembly 바이트 코드를 가져온 후 우리는 {{jsxref ( "WebAssembly.instantiate ()")}} 함수를 사용하여 모듈을 컴파일하고 인스턴스화하여 해당 프로세스에서 JavaScript 함수를 WebAssembly 모듈로 가져옵니다. 그런 다음 `Instance`에서 [Exported WebAssembly function](/ko/docs/WebAssembly/Exported_functions)를 호출합니다.

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> **참고:** 이 예제는 GitHub의 [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html)에서도 찾을 수 있습니다 ([라이브보기도 있음](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Second overload example

다음 예제는 (GitHub의 [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) 데모 혹은 [라이브로 보기](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)). {{jsxref ( "WebAssembly.compileStreaming ()")}} 메서드를 사용하여 로드된 simple.wasm 바이트 코드를 컴파일 한 다음 {{domxref("Worker.postMessage", "postMessage()")}}를 사용하여 [worker](/ko/docs/Web/API/Web_Workers_API)에게 전달합니다.

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

작업자 ([`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js) 참조)에서 모듈이 사용할 가져 오기 객체를 정의한 다음 주 스레드에서 모듈을 수신 할 이벤트 핸들러를 설정합니다. 모듈을 받으면 {{jsxref ( "WebAssembly.instantiate ()")}} 메소드를 사용하여 인스턴스를 만들고 내부에서 내 보낸 함수를 호출합니다.

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

onmessage = function (e) {
  console.log("module received from main thread");
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function (instance) {
    instance.exports.exported_func();
  });
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebAssembly](/ko/docs/WebAssembly) overview page
- [WebAssembly concepts](/ko/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API)
