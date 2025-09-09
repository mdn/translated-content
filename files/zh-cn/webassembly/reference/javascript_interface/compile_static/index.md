---
title: WebAssembly.compile()
slug: WebAssembly/Reference/JavaScript_interface/compile_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**`WebAssembly.compile()`** 静态方法将 WebAssembly 二进制代码编译为一个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。如果在实例化模块之前必须要对其进行编译，那么这个函数很有帮助（否则，应该使用 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 函数）。

> [!NOTE]
> 有严格[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)的网页可能会阻止 WebAssembly 编译和执行模块。与允许 WebAssembly 编译和执行有关的额外信息，参见 [script-src CSP](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)。

## 语法

```js-nolint
WebAssembly.compile(bufferSource)
WebAssembly.compile(bufferSource, compileOptions)
```

### 参数

- `bufferSource`
  - : 一个[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)或 {{jsxref("ArrayBuffer")}}，包含你想编译的 Wasm 模块的二进制代码。
- `compileOptions` {{optional_inline}}
  - : 一个编译选项的对象。属性包括：
    - `builtins` {{optional_inline}}
      - : 一个由一个或多个字符串组成的数组，用于在编译的 Wasm 模块中启用 [JavaScript 内置功能](/zh-CN/docs/WebAssembly/Guides/JavaScript_builtins)。字符串定义你想启用的内置功能。当前，唯一可用的值是 `"js-string"`，启用的是 JavaScript 字符串内置功能。
    - `importedStringConstants` {{optional_inline}}
      - : 一个字符串，为[导入的全局字符串常量](/zh-CN/docs/WebAssembly/Guides/Imported_string_constants)指定命名空间。如果你希望在 Wasm 模块中使用导入的全局字符串常量，就需要指定这个属性。

### 返回值

一个 `Promise`，兑现为表示已编译模块的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。

### 异常

- 如果 `bufferSource` 不是一个[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)或 {{jsxref("ArrayBuffer")}}，则 promise 将会以 {{jsxref("TypeError")}} 拒绝。
- 如果编译失败，则 promise 将会以 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError) 拒绝。

## 示例

### 使用编译

下面的例子使用 `compile()` 函数编译加载的 simple.wasm 字节码，然后使用 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 将其发送给一个 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> 在多数情况下，你可能想要使用 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)，因为它比 `compile()` 效率更高。

### 启用 JavaScript 内置功能和全局字符串导入

这个例子在用 `compile()` 编译 Wasm 模块时，启用 JavaScript 字符串内置功能和导入的全局字符串常量，然后用 [`instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 将其实例化，接着运行导出的 `main()` 函数（其向控制台打印 `"hello world!"`）。[查看其在线版本](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile/)。

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

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes, compileOptions))
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
