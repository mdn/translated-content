---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiate()`** 允许你编译和实例化 WebAssembly 代码。这个方法有两个重载方式：

- 第一种主要重载方式使用 WebAssembly 二进制代码的 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays) 或{{jsxref("ArrayBuffer")}}形，一并进行编译和实例化。返回的 `Promise` 会携带已编译的 {{jsxref("WebAssembly.Module")}} 和它的第一个实例化对象 {{jsxref("WebAssembly.Instance")}}.
- 第二种重载使用已编译的 {{jsxref("WebAssembly.Module")}} , 返回的 `Promise` 携带一个 `Module`的实例化对象 `Instance`. 如果这个 `Module` 已经被编译了或者是从缓存中获取的 ( [retrieved from cache](/zh-CN/docs/WebAssembly/Caching_modules)), 那么这种重载方式是非常有用的。

> **警告：** 此方法不是获取 (fetch) 和实例化 wasm 模块的最具效率方法。如果可能的话，您应该改用较新的{{jsxref("WebAssembly.instantiateStreaming()")}}方法，该方法直接从原始字节码中直接获取，编译和实例化模块，因此不需要转换为{{jsxref("ArrayBuffer")}}。

## 语法

### 主重载方式 — 使用 wasm 二进制代码

```plain
Promise<ResultObject> WebAssembly.instantiate(bufferSource, importObject);
```

#### 参数

- _bufferSource_
  - : 一个包含你想编译的 wasm 模块二进制代码的 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays)(类型数组) or [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)(数组缓冲区)
- _importObject_ {{optional_inline}}
  - : 一个将被导入到新创建实例中的对象，它包含的值有函数、{{jsxref("WebAssembly.Memory")}} 对象等等。编译的模块中，对于每一个导入的值都要有一个与其匹配的属性与之相对应，否则将会抛出 [WebAssembly.LinkError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)。

#### 返回值

解析为包含两个字段的 `ResultObject` 的一个 `Promise`:

- `module`: 一个被编译好的 {{jsxref("WebAssembly.Module")}} 对象。这个模块可以被再次实例化，通过 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 被分享，或者缓存到 [IndexedDB](/zh-CN/docs/WebAssembly/Caching_modules)。
- `instance`: 一个包含所有 [Exported WebAssembly functions](/zh-CN/docs/WebAssembly/Exported_functions)的{{jsxref("WebAssembly.Instance")}}对象。

#### 异常

- 如果参数的类型或结构不正确，将会抛出异常 {{jsxref("TypeError")}} .
- 如果操作失败，promise 将会被 reject 掉，根据失败的原因不同，会抛出 3 种异常，{{jsxref("WebAssembly.CompileError")}}，{{jsxref("WebAssembly.LinkError")}}, 或{{jsxref("WebAssembly.RuntimeError")}}。

### 第二种重载 — 使用模块对象

```plain
Promise<WebAssembly.Instance> WebAssembly.instantiate(module, importObject);
```

#### 参数

- _module_
  - : 将被实例化的 {{jsxref("WebAssembly.Module")}} 对象。
- _importObject_ {{optional_inline}}
  - : 一个将被导入到新创建实例中的对象，它包含的值有函数、{{jsxref("WebAssembly.Memory")}} 对象等等。编译的模块中，对于每一个导入的值都要有一个与其匹配的属性与之相对应，否则将会抛出{{jsxref("WebAssembly.LinkError")}} 。

#### 返回值

一个解析为 {{jsxref("WebAssembly.Instance")}} 的`Promise` 对象。

#### 异常

- 如果参数的类型或结构不正确，将抛出异常 {{jsxref("TypeError")}} 。
- 如果操作失败，promise 将会被 reject 掉，根据失败的原因不同，会抛出 3 种异常，{{jsxref("WebAssembly.CompileError")}}，{{jsxref("WebAssembly.LinkError")}}, 或{{jsxref("WebAssembly.RuntimeError")}}。

## 示例

**提示**: 在大多数情况下，您可能需要使用{{jsxref("WebAssembly.instantiateStreaming()")}}，因为它比`instantiate()`更具效率。

### 第一种重载例子

使用 fetch 获取一些 WebAssembly 二进制代码后，我们使用 {{jsxref("WebAssembly.instantiate()")}} 方法编译并实例化模块，在此过程中，导入了一个 Javascript 方法在 WebAssembly 模块中，接下来我们使用`Instance` 导出的[Exported WebAssembly](/zh-CN/docs/WebAssembly/Exported_functions) 方法。

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
  env: {
    abort: () => {},
  },
};

/* 2019-08-03：importObject 必须存在 env 对象以及 env 对象的 abort 方法 */

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports);
```

> **备注：** 查看 GitHub([在线实例](https://mdn.github.io/webassembly-examples/js-api-examples/)) 的 [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) 中一个相似的例子，使用了我们的[`fetchAndInstantiate()`](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js#L1)库函数

### 第二种重载例子

下面的例子（查看我们 GitHub 的 [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) 例子，可在线演示）使用 `compile()` 方法编译了 simple.wasm 字节码，然后通过 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 发送给一个线程 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

```js
var worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

在线程中 (查看 [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)) 我们定义了一个导入对象供模块使用，然后设置了一个事件处理函数来接收主线程发来的模块。当模块被接收到后，我们使用{{jsxref("WebAssembly.instantiate()")}} 方法创建一个实例并且调用它从内部导出的函数。

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
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
