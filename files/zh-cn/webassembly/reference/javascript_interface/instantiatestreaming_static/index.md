---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
original_slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
---

**`WebAssembly.instantiateStreaming()`** 函数直接从流式底层源编译并实例化 WebAssembly 模块。这是加载 Wasm 代码的最有效、最优化的方式。

> [!NOTE]
> 具有严格的[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/CSP)的网页可能会阻止 WebAssembly 模块的编译和执行。请参阅 [script-src CSP](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) 以了解更多有关允许 WebAssembly 编译和执行的信息。

## 语法

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### 参数

- `source`
  - : 一个 [`Response`](/zh-CN/docs/Web/API/Response) 对象或一个会兑现为 Response 的 promise，其表示你想要传输、编译和实例化的 Wasm 模块的底层源。
- `importObject` {{optional_inline}}
  - : 包含一些想要导入到新创建的 `Instance` 中的值的对象，例如函数或 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象。每个已编译模块的声明导入必须有一个匹配属性，否则抛出 [`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError) 异常。

### 返回值

一个 `Promise`，会兑现为一个包含两个属性的 `ResultObject`：

- `module`：[`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象，表示编译完成的 WebAssembly 模块。这个 `Module` 能够再次被实例化或通过 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 共享。
- `instance`：[`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance) 对象，包含所有[导出的 WebAssembly 方法](/zh-CN/docs/WebAssembly/Guides/Exported_functions)。

### 异常

- 如果任意参数的类型或结构存在错误，则抛出 {{jsxref("TypeError")}}。
- 如果操作失败，Promise 根据失败原因以 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)、[`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError) 或
  [`WebAssembly.RuntimeError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 拒绝。

## 示例

下面的示例（在 GitHub 上查看 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) 示例，也可[在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）直接从基础源传输一个 Wasm 模块，然后进行编译和实例化，Promise 会兑现 `ResultObject`。因为 `instantiateStreaming()` 函数接受兑现后返回 [`Response`](/zh-CN/docs/Web/API/Response) 对象的 Promise，你可以直接传递一个 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 调用，它会在兑现后将 response 传递给该函数。

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

然后访问 `ResultObject` 的实例成员，并调用包含的导出函数。

> [!NOTE]
> 为了使其工作，服务器应该返回一个 `application/wasm` MIME 类型的 `.wasm` 文件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
