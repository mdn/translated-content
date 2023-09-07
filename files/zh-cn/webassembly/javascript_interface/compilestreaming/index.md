---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
---

{{WebAssemblySidebar}}

**`WebAssembly.compileStreaming()`** 方法用来从一个流式源中直接编译一个 {{jsxref("WebAssembly.Module")}}。当模块需要在被实例化前被编译时，这个方法会很有用。如果要从流式源实例化一个模块应采用 {{jsxref("WebAssembly.instantiateStreaming()")}} 方法。

## 语法

```plain
Promise<WebAssembly.Module> WebAssembly.compileStreaming(source);
```

### 参数

- _source_
  - : 一个 {{domxref("Response")}} 对象或一个会履行（fulfill）它的 promise，用来表示你想编译的 .wasm 模块的流式源。

### 返回值

一个会被解决（resolve）为编译后的 {{jsxref("WebAssembly.Module")}} 对象的 `Promise`。

### 异常

- 如果 `bufferSource` 不是一个 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays)，将会抛出 {{jsxref("TypeError")}} 异常。
- 如果编译失败，promise 会通过拒绝（reject）来返回一个 {{jsxref("WebAssembly.CompileError")}}。

## 示例

下面的例子（在 GitHub 上查看我们的 [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) 示例或者直接[在线预览](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)）直接从流式源传输一个 .wasm 模块然后将其编译为一个 {{jsxref("WebAssembly.Module")}} 对象。因为 `compileStreaming()` 方法可以接受一个结果为 {{domxref("Response")}} 对象的 promise，因此你可以直接用 {{domxref("fetch()")}} 的调用结果来调用该方法。

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

得到的 module 实例接下来通过 {{jsxref("WebAssembly.instantiate()")}} 方法被实例化了，然后调用模块导出的函数。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
