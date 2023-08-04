---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiateStreaming()`** 方法直接从流式底层源编译和实例化 WebAssembly 模块。这是加载 wasm 代码一种非常有效的优化方式。

## Syntax

```plain
Promise<ResultObject> WebAssembly.instantiateStreaming(source, importObject);
```

### Parameters

- _source_
  - : 一个{{domxref("Response")}}对象 或 一个可以履行（fulfill）一个（Response）的 {{jsxref("Promise")}}，表示你想要传输、编译和实例化的 .wasm 模块基础源。
- _importObject_ {{optional_inline}}
  - : 包含一些想要导入到新创建`Instance`中值的对象，例如方法 或 {{jsxref("WebAssembly.Memory")}} 对象。每个已编译模块的声明导入必须有一个匹配属性，否则抛出 [WebAssembly.LinkError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError) 异常。

### Return value

一个 `Promise`，通过 resolve 返回一个包含两个属性的 `ResultObject` ：

- `module`: {{jsxref("WebAssembly.Module")}} 对象表示编译完成的 WebAssembly 模块。这个`Module`能够再次被实例化 或 通过[postMessage()](/zh-CN/docs/Web/API/Worker/postMessage)共享。
- `instance`: {{jsxref("WebAssembly.Instance")}} 对象包含 WebAssembly 所有公开方法 [Exported WebAssembly functions](/zh-CN/docs/WebAssembly/Exported_functions).

### Exceptions

- 如果任意参数的类型或结构错误，{{jsxref("TypeError")}} 抛出。
- 如果操作失败，Promise 通过 reject 根据失败原因返回 {{jsxref("WebAssembly.CompileError")}}，{{jsxref("WebAssembly.LinkError")}} 或 {{jsxref("WebAssembly.RuntimeError")}}。

## Examples

下面的示例 (在 GitHub 上查看 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) 示例，并且也可 [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) ) 直接从基础源传输一个 .wasm 模块，然后进行编译和实例化，Promise 履行后返回一个 `ResultObject`. 因为 `instantiateStreaming()` 方法允许履行后返回{{domxref("Response")}}对象的 Promise，你可以直接传递一个 {{domxref("fetch()")}} 请求，它会在履行后将 response 传递给方法。

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

然后访问`ResultObject`的实例成员，并调用包含的公开函数。

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
- [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [使用 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
