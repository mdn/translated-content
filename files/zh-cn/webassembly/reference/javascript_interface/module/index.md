---
title: WebAssembly.Module
slug: WebAssembly/Reference/JavaScript_interface/Module
---

**`WebAssembly.Module`** 对象包含已经由浏览器编译的无状态 WebAssembly 代码，可以高效地[与 Worker 共享](/zh-CN/docs/Web/API/Worker/postMessage)和多次实例化。

## 构造函数

- [`WebAssembly.Module()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)
  - : 创建一个新的 `Module` 对象。

## 静态属性

- [`WebAssembly.Module.customSections()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
  - : 给定一个 `Module` 和字符串，返回模块中具有给定字符串名称的所有自定义的部分的内容副本。
- [`WebAssembly.Module.exports()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
  - : 给定一个 `Module`，返回一个数组，其中包含所有声明的导出的描述。
- [`WebAssembly.Module.imports()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
  - : 给定一个 `Module`，返回一个数组，其中包含所有声明的导入的描述。

## 示例

### 将编译后的模块发送到 worker

以下示例将使用 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) 方法编译 `simple.wasm` 加载后的字节码，并将返回的 `Module` 实例通过 {{domxref("Worker/postMessage", "postMessage()")}} 发送到一个 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

参见 `index-compile.html` 的[源代码](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)，或[查看在线演示](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)。

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Worker 函数 [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) 定义了模块需要使用的导入对象。然后，该函数会创建一个事件处理器，以接受主线程发送的模块。在接收到模块后，我们使用 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 方法创建一个它的实例，然后调用其导出的函数。

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
