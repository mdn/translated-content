---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 05becee987475e724aaee34fe93eafe15514b37a
---

**`WebAssembly.instantiateStreaming()`** 静态方法直接从流式底层源编译并实例化 WebAssembly 模块。这是加载 Wasm 代码最有效、最优化的方式。

> [!NOTE]
> 具有严格的[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)的网页可能会阻止 WebAssembly 编译和执行模块。请参阅 [script-src CSP](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) 以了解更多有关允许 WebAssembly 编译和执行的信息。

## 语法

```js-nolint
WebAssembly.instantiateStreaming(source)
WebAssembly.instantiateStreaming(source, importObject)
WebAssembly.instantiateStreaming(source, importObject, compileOptions)
```

### 参数

- `source`
  - : [`Response`](/zh-CN/docs/Web/API/Response) 对象或兑现为 Response 对象的 promise，表示的是你想要流式、编译和实例化的 Wasm 模块的底层源。
- `importObject` {{optional_inline}}
  - : 包含要导入到新创建的 `Instance` 的值（例如，函数或 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象）的对象。已编译模块的每个声明的导入一定有一个匹配的属性，否则抛出 [`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)。
- `compileOptions` {{optional_inline}}
  - : 包含编译选项的对象。属性包含：
    - `builtins` {{optional_inline}}
      - : 由在已编译的 Wasm 模块中启用 [JavaScript 内置](/zh-CN/docs/WebAssembly/Guides/JavaScript_builtins)用法的字符串组成的数组。字符串定义的你想要启用的内置。当前唯一可用的值是 `"js-string"`，启用的是 JavaScript 字符串内置。
    - `importedStringConstants` {{optional_inline}}
      - : 为[导入的全局字符串常量](/zh-CN/docs/WebAssembly/Guides/Imported_string_constants)指定命名空间的字符串。如果你想在 Wasm 模块中使用导入的全局字符串常量的话，则需要指定该属性。

### 返回值

兑现为含两个字段的 `ResultObject` 的 `Promise`：

- `module`：表示已编译的 WebAssembly 模块的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。该 `Module` 能够再次被实例化或通过 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 共享。
- `instance`：包含所有[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)的 [`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance) 对象。

### 异常

- 如果参数的类型或结构存在错误，则抛出 {{jsxref("TypeError")}}。
- 如果操作失败，promise 将以 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)、[`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError) 或
  [`WebAssembly.RuntimeError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 之一拒绝，具体取决于失败原因。

## 示例

### 实例化流

下面的示例（在 GitHub 上查看 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) 示例，也可[在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）直接从底层源流式 Wasm 模块，然后进行编译和实例化，promise 兑现的是 `ResultObject`。因为 `instantiateStreaming()` 函数接受兑现为 [`Response`](/zh-CN/docs/Web/API/Response) 对象的 promise，你可以直接传递 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 调用，它会在兑现后将 response 传递给该函数。

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

然后访问 `ResultObject` 的实例成员，并调用其包含的导出函数。

> [!NOTE]
> 为了能运行，服务器返回的 `.wasm` 文件应该有 `application/wasm` MIME 类型。

### 启用 JavaScript 内置和全局字符串导入

这个示例在用 `instantiateStreaming()` 编译和实例化 Wasm 模块时，启用 JavaScript 字符串内置和导入的全局字符串常量，然后运行导出的 `main()` 函数（输出 `"hello world!"` 到控制台）。（[查看在线示例](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate-streaming/)）。

```js
const importObject = {
  // 常规导入
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // 启用 JavaScript 字符串内置
  importedStringConstants: "string_constants", // 启用导入的全局字符串常量
};

WebAssembly.instantiateStreaming(
  fetch("log-concat.wasm"),
  importObject,
  compileOptions,
).then((result) => result.instance.exports.main());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
