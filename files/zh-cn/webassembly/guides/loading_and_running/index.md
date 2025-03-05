---
title: 加载和运行 WebAssembly 代码
slug: WebAssembly/Guides/Loading_and_running
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

为了在 JavaScript 中使用 WebAssembly，在编译/实例化之前，你首先需要把模块放入内存。本文提供了一篇关于获取 WebAssembly 字节码的不同机制以及如何编译/实例化并运行它的参考。

## 这里的主题是什么？

WebAssembly 还没有和 `<script type='module'>` 或 `import` 语句集成，因此当前还没有方式可以让浏览器使用 import 为你获取模块。

老的 [`WebAssembly.compile`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 方法要求你在获取原始字节之后创建一个包含了你的 WebAssembly 模块二进制的 {{jsxref("ArrayBuffer")}}，然后编译/实例化它。这类似于 `new Function(string)`，只不过我们用字节数组缓冲区（WebAssembly 源码）替换了字符串（JavaScript 源码）。

新的 [`WebAssembly.compileStreaming`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法更加高效——它们直接在来自网络的原始字节流上执行操作，省去了 {{jsxref("ArrayBuffer")}} 步骤。

那么，我们该如何把这些字节放入到一个数组缓冲区并进行编译呢？下面的部分将进行解释。

## 使用 Fetch

[Fetch](/zh-CN/docs/Web/API/Fetch_API) 是一个方便的、现代的用于获取网络资源的 API。

获取 WebAssembly 模块最快、最有效的方式是使用新的 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法，该方法可以接受一个 {{domxref("fetch()")}} 调用作为它的第一个参数，并且可以在一步骤中处理获取、编译和实例化模块，访问从服务器流式传输的原始字节码：

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // 使用 results 做些什么！
  },
);
```

如果我们使用旧的 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 方法，它不能直接在流上工作，我们需要一个额外的步骤来把获取的字节码转换为 {{jsxref("ArrayBuffer")}}，像这样：

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // 使用 results 做些什么！
  });
```

### 顺便说一下 instantiate() 重载

[`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 函数有两种重载形式——一种是前面展示的那样，接受待编译的字节码作为参数并且返回一个 Promise，其会被解决为一个包含已编译的模块对象及其实例的对象。这个对象看起来像这样：

```js-nolint
{
  module: Module, // 新编译的 WebAssembly.Module 对象，
  instance: Instance, // 新的模块对象实例（WebAssembly.Instance）
}
```

> [!NOTE]
> 通常，我们只关心实例，但是，当我们想缓存模块，使用 [`postMessage()`](/zh-CN/docs/Web/API/MessagePort/postMessage) 与另外一个 worker 或 window 共享模块或者只是创建更多的实例的时候，拥有模块对象是很有用的。

> [!NOTE]
> 这二种重载形式接受一个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象作为参数，并且返回一个直接包含一个实例对象作为其结果的 promise。参考[第二种重载示例](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#第二种重载示例)。

### 运行你的 WebAssembly 代码

一旦在 JavaScript 中得到了可用的 WebAssembly 实例，你就可以开始使用那些通过 [`WebAssembly.Instance.exports`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) 属性导出的特性了。你的代码可能看起来像这样：

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // 调用导出函数：
    obj.instance.exports.exported_func();

    // 或者获取导出内存的缓存内容：
    const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // 或者获取导出表格中的元素：
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> [!NOTE]
> 关于如何从 WebAssembly 模块中导出的更多信息，请阅读[使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API) 和[理解 WebAssembly 文本格式](/zh-CN/docs/WebAssembly/Guides/Understanding_the_text_format)。

## 使用 XMLHttpRequest

[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 在一定程度上而言要比 Fetch 老旧一些，但是仍然可以很好地被用来获取类型化数组。仍然假设我们的模块叫做 `simple.wasm`：

1. 创建一个 {{domxref("XMLHttpRequest()")}} 实例，然后使用它的 {{domxref("XMLHttpRequest.open","open()")}} 方法来开启一个请求——设置请求方法为 `GET` 并且声明我们想要获取的文件路径。
2. 关键之处在于使用 {{domxref("XMLHttpRequest.responseType","responseType")}} 属性设置响应类型为 `'arraybuffer'`。
3. 接下来使用 {{domxref("XMLHttpRequest.send()")}} 发送请求。
4. 当响应已经完成下载之后，我们使用 {{domxref("XMLHttpRequest.load_event", "load")}} 事件处理器来调用一个函数——在这个函数中，我们从 {{domxref("XMLHttpRequest.response", "response")}} 属性中得到数组缓冲区，然后就像使用 Fetch 那样把它传递给[`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 方法。

最终代码看起来像这样：

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> [!NOTE]
> 你可以在 [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html) 看到实际使用的示例。
