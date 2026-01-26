---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 1c0262ad5b8f30779c90fc8527785bd45748c331
---

**`WebAssembly.instantiate()`** 静态方法允许你编译和实例化 WebAssembly 代码。它有两个重载方式：

- 主重载方式使用[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)或 {{jsxref("ArrayBuffer")}} 格式的 WebAssembly 二进制代码，并在一个步骤中执行编译和实例化。返回的 `Promise` 将兑现为已编译的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 和该模块的第一个 [`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance)。
- 次重载方式使用已编译的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module), 返回的 `Promise` 将兑现为该 `Module` 的 `Instance`。当 `Module` 已经被编译时这种方式较为有用。

> [!WARNING]
> 此方法不是获取和实例化 Wasm 模块的最高效的方法。如果可能的话，你应该改用较新的 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法，该方法在一个步骤中直接从原始字节码获取、编译和实例化模块，因此不需要转换为 {{jsxref("ArrayBuffer")}}。

## 语法

```js-nolint
// 使用 Wasm 二进制代码
WebAssembly.instantiate(bufferSource)
WebAssembly.instantiate(bufferSource, importObject)
WebAssembly.instantiate(bufferSource, importObject, compileOptions)

// 使用模块对象实例
WebAssembly.instantiate(module)
WebAssembly.instantiate(module, importObject)
WebAssembly.instantiate(module, importObject, compileOptions)
```

### 参数

- `bufferSource`
  - : 包含你想编译的 Wasm 模块的二进制代码的[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)或 {{jsxref("ArrayBuffer")}}。
- `module`
  - : 要实例化的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。
- `importObject` {{optional_inline}}
  - : 包含要导入到新创建的 `Instance` 的值（例如，函数或 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象）的对象。已编译的模块中每个声明的导入应有一个匹配的属性，否则将抛出 [`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)。
- `compileOptions` {{optional_inline}}
  - : 包含编译选项的对象。属性包含：
    - `builtins` {{optional_inline}}
      - : 由用于在已编译的 Wasm 模块中启用 [JavaScript 内置](/zh-CN/docs/WebAssembly/Guides/JavaScript_builtins)用法的字符串组成的数组。字符串定义的是你所希望启用的内置。当前唯一可用的值是 `"js-string"`，其将启用 JavaScript 字符串内置。
    - `importedStringConstants` {{optional_inline}}
      - : 指定[导入的全局字符串常量](/zh-CN/docs/WebAssembly/Guides/Imported_string_constants)命名空间的字符串。当你希望在 Wasm 模块中使用导入的全局字符串时需要指定该属性。

### 返回值

如果传递的是 `bufferSource`，返回的 `Promise` 将兑现为包含两个字段的 `ResultObject`：

- `module`: 表示已编译的 WebAssembly 模块的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。该模块可以再次被实例化、通过 {{domxref("Worker.postMessage", "postMessage()")}} 共享或[缓存](/zh-CN/docs/Web/Progressive_web_apps/Guides/Caching)。
- `instance`: 包含所有[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)的 [`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance) 对象。

如果传递的是 `module`，返回的 `Promise` 将兑现为 [`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance) 对象。

### 异常

- 如果参数的类型或结构不正确，则 promise 将以 {{jsxref("TypeError")}} 拒绝。
- 如果操作失败，则 promise 将以 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)、[`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError) 或 [`WebAssembly.RuntimeError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 之一拒绝，具体取决于失败原因。

## 示例

> [!NOTE]
> 在大多数情况下，你可能想要使用 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)，因为它比 `instantiate()` 更高效。

### 第一种重载示例

使用 fetch 获取一些 WebAssembly 字节码后，我们使用 `WebAssembly.instantiate()` 函数编译并实例化模块，在此过程中，将一个 JavaScript 函数导入到 WebAssembly 模块中，接下来我们调用 `Instance` 的[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)。

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> [!NOTE]
> 你也可以在 GitHub 上的 [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) 中找到这个示例（[也可以在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/)）。

### 第二种重载示例

下面的例子（在 GitHub 上查看我们的 [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) 示例，也可[在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)）使用 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) 方法编译已加载的 simple.wasm 字节码，然后使用 {{domxref("Worker.postMessage", "postMessage()")}} 将其发送到 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

在 worker 中（查看 [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)），我们定义一个模块要用的导入对象，然后设置一个用于从主线程接收模块的事件处理器。当接收到模块后，我们使用 `WebAssembly.instantiate()` 方法创建一个实例并调用从它的内部导出的函数。

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("从主线程接收到的模块");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

### 启用 JavaScript 内置和全局字符串导入

这个示例在用 `instantiate()` 编译和实例化 Wasm 模块时，启用 JavaScript 字符串内置和导入的全局字符串常量，然后运行导出的 `main()` 函数（输出 `"hello world!"` 到控制台）。[查看在线示例](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/)。

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

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject, compileOptions))
  .then((result) => result.instance.exports.main());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
