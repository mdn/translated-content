---
title: 加载和运行 WebAssembly 代码
slug: WebAssembly/Loading_and_running
---

{{WebAssemblySidebar}}

为了在 JavaScript 中使用 WebAssembly，在编译/实例化之前，你首先需要把模块放入内存。比如，通过[XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)或[Fetch](/zh-CN/docs/Web/API/Fetch_API)，模块将会被初始化为带类型数组；不过，将来会开发更多的方式。本文提供了一篇关于获取 WebAssembly 字节码的不同机制以及如何编译/实例化并运行它的参考。

## 这里的主题是什么？

WebAssembly 还没有和\<script type='module'>或 ES6 的 import 语句集成，也就是说，当前还没有内置的方式让浏览器为你获取模块。当前唯一的方式就是创建一个包含你的 WebAssembly 模块二进制代码的 {{domxref("ArrayBuffer")}} 并且使用{{jsxref("WebAssembly.instantiate()")}}编译它。这与 new Function(string) 类似，除了使用一个包含了 WebAssembly 源代码的数组缓存替换掉包含了 JavaScript 源代码的字符串。

那么，我们该如何获取这些字节并存入到一个数组缓存并编译它呢？下面进行解释。

## 使用 Fetch

[Fetch](/zh-CN/docs/Web/API/Fetch_API)是一个用来获取网络资源的方便现代的 API。

假设网络上有一个叫做 simple.wasm 的 WebAssembly 模块：

- 我们可以使用[fetch()](/zh-CN/docs/Web/API/fetch)全局函数来轻松地获取它，该函数返回一个可以解析为[Response](/zh-CN/docs/Web/API/Response)对象的 promise。
- 我们可以使用[arrayBuffer()](/zh-CN/docs/Web/API/Body/arrayBuffer)函数把响应（response）转换为带类型数组，该函数返回一个可以解析为带类型数组的 promise。
- 最后，我们使用{{jsxref("WebAssembly.instantiate()")}}函数一步实现编译和实例化带类型数组。

代码块看起来像这样：

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the compiled results!
  });
```

### 顺便说一下 instantiate() 重载

{{jsxref("WebAssembly.instantiate()")}}函数有两种重载形式——一种是前面展示的那样，接受待编译的字节码作为参数并且返回一个 promise 并且该 promise 可以解析为一个包含已编译的模块对象及其实例的对象。

```js
{
  module: Module; // 新编译的 WebAssembly.Module 对象，
  instance: Instance; // 新的模块对象实例
}
```

> **备注：** 通常，我们只关心实例，但是，当我们想缓存模块，使用 [postMessage()](/zh-CN/docs/Web/API/MessagePort/postMessage)与另外一个 worker 或 window 共享模块或者只是创建更多的实例的时候，拥有模块对象是很有用的。

> **备注：** 这二种重载形式接受一个[WebAssembly.Module](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)对象作为参数，并且返回一个包含了一个实例对象的 promise。参考[第二种重载示例](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example)。

### 获取及实例化的实用函数

上面的代码样式可以工作，但是，每次都重新编写它们就显得啰嗦了，特别是当你想要加载多个模块的时候。为了简单起见，我们创建了一个叫做 fetchAndInstantiate() 的实用函数，它在后台工作并返回一个 promise。你可以在[wasm-utils.js](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js)中找到这个函数。它看起来像这样：

```js
function fetchAndInstantiate(url, importObject) {
  return fetch(url)
    .then((response) => response.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes, importObject))
    .then((results) => results.instance);
}
```

把这个函数加入到 HTML 中，你就可以使用一行简单代码做到获取和实例化 WebAssembly 模块并且得到一个实例。

```js
fetchAndInstantiate('module.wasm', importObject).then(function(instance) {
  ...
})
```

> **备注：** 在我们的文档中，你可以看到许多这么用的例子（例如，参考[index.html](https://mdn.github.io/webassembly-examples/js-api-examples/)）——这是我们推荐的加载模块的标准方式。

### 运行你的 WebAssembly 代码

一旦在 JavaScript 中得到了可用的 WebAssembly 实例，你就可以开始使用那些通过 {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}} 属性导出的特性了。你的代码可能看起来像这样：

```js
fetchAndInstantiate("myModule.wasm", importObject).then(function (instance) {
  // 调用导出函数：
  instance.exports.exported_func();

  // 或者获取导出内存的缓存内容：
  var i32 = new Uint32Array(instance.exports.memory.buffer);

  // 或者获取导出表格中的元素：
  var table = instance.exports.table;
  console.log(table.get(0)());
});
```

> **备注：** 关于从 WebAssembly 模块导出是如何工作的更多信息，请阅读使[用 WebAssembly 的 JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)和[理解 WebAssembly 文本格式](/zh-CN/docs/WebAssembly/Understanding_the_text_format)。

## 使用 XMLHttpRequest

[XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)在一定程度上而言要比 Fetch 老旧一些，但是，仍然可以很好地被用来获取带类型数组。仍然假设我们的模块叫做 simple.wasm：

1. 创建一个 {{domxref("XMLHttpRequest()")}} 实例，然后使用它的{{domxref("XMLHttpRequest.open","open()")}} 方法来开启一个请求——设置请求方法为 GET 并且声明我们想要获取的文件路径。
2. 关键之处在于使用{{domxref("XMLHttpRequest.responseType","responseType")}}属性设置响应类型为'arraybuffer'。
3. 接下来使用{{domxref("XMLHttpRequest.send()")}}发送请求。
4. 当响应已经完成下载之后，我们使用{{domxref("XMLHttpRequest.onload", "onload")}}事件处理器来调用一个函数——在这个函数中，我们从{{domxref("XMLHttpRequest.response", "response")}}属性中得到数组缓存然后就像使用 Fetch 那样把它传递给{{jsxref("WebAssembly.instantiate()")}} 。

最终代码看起来像这样：

```js
request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = function () {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **备注：** 你可以在[xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html)看到实际使用的例子。
