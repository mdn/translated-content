---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`WebAssembly.compileStreaming()`** 静态方法直接将流式传输的底层源码编译为一个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。如果在实例化模块之前必须要对其进行编译，那么这个函数就是有用的（否则，应该使用 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 函数）。

> [!NOTE]
> 有严格[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)的网页可能会阻止 WebAssembly 编译和执行模块。有关允许编译和执行 WebAssembly 的更多信息，参见 [script-src CSP](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)。

## 语法

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### 参数

- `source`
  - : 一个 [`Response`](/zh-CN/docs/Web/API/Response) 对象或者一个能兑现它的 promise，该对象代表的是你想流式编译的底层源码。
- `compileOptions` {{optional_inline}}
  - : 一个对象，包含的是编译选项。属性包括：
    - `builtins` {{optional_inline}}
      - : 一个由字符串组成的数组，用于在编译的 Wasm 模块中启用 [JavaScript 内置功能](/zh-CN/docs/WebAssembly/Guides/JavaScript_builtins)。字符串定义你想启用的内置功能。当前，唯一可用的值是 `"js-string"`，启用的是 JavaScript 字符串内置功能。
    - `importedStringConstants` {{optional_inline}}
      - : 一个字符串，为[导入的全局字符串常量](/zh-CN/docs/WebAssembly/Guides/Imported_string_constants)指定命名空间。如果你希望在 Wasm 模块中使用导入的全局字符串常量，就需要指定这个属性。

### 返回值

一个 `Promise`，兑现为能够表示已编译模块的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。

### 异常

- 如果 `source` 不是一个 [`Response`](/zh-CN/docs/Web/API/Response) 或者能兑现为 `Response` 的 `Promise`，则 promise 将会以 {{jsxref("TypeError")}} 拒绝。
- 如果编译失败，则 promise 将会以 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError) 拒绝。
- 如果 `source` 是个被拒绝的 `Promise`，则 promise 将会以该错误拒绝。
- 如果 `source` 的 `Result` 有一个错误（例如，错误的 MIME 类型），则 promise 将会以该错误拒绝。

## 示例

### 编译流

下面的例子（查看 Github 上的 [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) 示例，也可以[在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)）直接从底层源码流式传输 Wasm 模块，然后将其编译为 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。因为 `compileStreaming()` 函数接受兑现为 [`Response`](/zh-CN/docs/Web/API/Response) 对象的 promise，你可以直接将调用 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 得到的 `Promise` 传递进去，不需要等待 promise 兑现。

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

接着用 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 对得到的模块实例进行实例化，然后激活导出的函数。

### 启用 JavaScript 内置功能和全局字符串导入

这个例子在用 `compileStreaming()` 编译 Wasm 模块时，启用 JavaScript 字符串内置功能和导入的全局字符串常量，然后用 [`instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 将其实例化，接着运行导出的 `main()` 函数（其向控制台打印 `"hello world!"`）。[查看其在线版本](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/)。

```js
const importObject = {
  // 常规导入
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // 启用 JavaScript 字符串内置功能
  importedStringConstants: "string_constants", // 启用导入的全局字符串常量
};

WebAssembly.compileStreaming(fetch("log-concat.wasm"), compileOptions)
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.main());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
