---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile
---

{{WebAssemblySidebar}} {{SeeCompatTable}}

**`WebAssembly.compile()`** 方法编译 WebAssembly 二进制代码到一个{{jsxref("WebAssembly.Module")}} 对象。如果在实例化之前有必要去编译一个模块，那么这个方法是有用的（否则，将会使用{{jsxref("WebAssembly.instantiate()")}} 方法）

## 语法

```plain
Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);
```

### 参数

- _bufferSource_
  - : 一个包含你想编译的 wasm 模块二进制代码的 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays)(类型数组) or [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)(数组缓冲区)

### 返回值

一个解析为 {{jsxref("WebAssembly.Module")}} 的`Promise` 对象。

### 异常

- 如果 `bufferSource` 不是一个 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays), 将抛出一个 {{jsxref("TypeError")}} 。
- 如果编译失败 promise 将会 reject 一个 {{jsxref("WebAssembly.CompileError")}}。

## 示例

下面的例子 (查看 GitHub 上的 [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) 例子，并且也能 [查看运行效果](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)) 使用 `compile()` 方法编译加载进来的 simple.wasm 二进制代码并且使用 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 发送给一个 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

```js
var worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

在线程中 (查看 [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)) 我们定义了一个导入对象共模块使用，然后设置了一个事件处理函数来接收主线程发送过来的模块。当模块被接收之后，我们使用{{jsxref("WebAssembly.Instantiate()")}} 方法创建了一个实例，调用从它里面导出的一个方法，接下来展示了我们可以用 {{jsxref("WebAssembly.Module/exports", "WebAssembly.Module.exports")}} 属性来调用模块上返回的可用信息。

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

  var exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
