---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.instantiate()`** 函数允许你编译和实例化 WebAssembly 代码。这个函数有两个重载方式：

- 主要的重载使用 WebAssembly 二进制代码，形式为[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)或 {{jsxref("ArrayBuffer")}}，并在一个步骤中执行编译和实例化。返回的 `Promise` 兑现为一个已编译的 [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) 和该模块的第一个 [`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance)。
- 次要的重载使用已编译的 [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module), 返回的 `Promise` 兑现为该 `Module`的一个 `Instance`. 如果 `Module` 已经被编译了, 那么这种重载方式是非常有用的。

> [!WARNING]
> 此方法不是获取和实例化 Wasm 模块的最高效的方法。如果可能的话，你应该改用较新的 [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法，该方法在一步中直接从原始字节码获取、编译和实例化模块，因此不需要转换为 {{jsxref("ArrayBuffer")}}。

## 语法

```js-nolint
// Taking Wasm binary code
WebAssembly.instantiate(bufferSource)
WebAssembly.instantiate(bufferSource, importObject)
WebAssembly.instantiate(bufferSource, importObject, compileOptions)

// Taking a module object instance
WebAssembly.instantiate(module)
WebAssembly.instantiate(module, importObject)
WebAssembly.instantiate(module, importObject, compileOptions)
```

### 参数

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or
    {{jsxref("ArrayBuffer")}} containing the binary code of the Wasm module you want to
    compile, or a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module).
- `module`
  - : The [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of the compiled module or
    else a [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/LinkError) is thrown.
- `compileOptions` {{optional_inline}}
  - : An object containing compilation options. Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of strings that enables the usage of [JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants). This property needs to be specified if you wish to use imported global string constants in the Wasm module.

### 返回值

If a `bufferSource` is passed, returns a `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object representing the compiled WebAssembly module. This `Module` can be instantiated again, shared via {{domxref("Worker.postMessage", "postMessage()")}}, or [cached](/en-US/docs/Web/Progressive_web_apps/Guides/Caching).
- `instance`: A [`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) object that contains all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Guides/Exported_functions).

If a `module` is passed, returns a `Promise` that resolves to an [`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) object.

### 异常

- If either of the parameters are not of the correct type or structure,
  the promise rejects with a {{jsxref("TypeError")}}.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError), depending on the cause of the failure.

## 示例

> [!NOTE]
> 在大多数情况下，你可能想要使用 [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)，因为它比 `instantiate()` 更高效。

### 第一种重载示例

使用 fetch 获取一些 WebAssembly 二进制代码后，我们使用 {{jsxref("WebAssembly.instantiate()")}} 方法编译并实例化模块，在此过程中，导入了一个 Javascript 方法在 WebAssembly 模块中，接下来我们使用`Instance` 导出的 [Exported WebAssembly](/zh-CN/docs/WebAssembly/Guides/Exported_functions) 方法。

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
> 查看 GitHub（[在线实例](https://mdn.github.io/webassembly-examples/js-api-examples/)）的 [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) 中一个相似的例子。

### 第二种重载示例

下面的例子（查看我们 GitHub 的 [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) 例子，可在线演示）使用 `compile()` 方法编译了 simple.wasm 字节码，然后通过 [postMessage()](/zh-CN/docs/Web/API/Worker/postMessage) 发送给一个线程 [worker](/zh-CN/docs/Web/API/Web_Workers_API)。

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

在线程中（查看 [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)）我们定义了一个导入对象供模块使用，然后设置了一个事件处理函数来接收主线程发来的模块。当模块被接收到后，我们使用{{jsxref("WebAssembly.instantiate()")}} 方法创建一个实例并且调用它从内部导出的函数。

```js
const importObject = {
  my_namespace: {
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

### Enabling JavaScript builtins and global string imports

This example enables JavaScript string builtins and imported global string constants when compiling and instantiating the Wasm module with `instantiate()`, before running the exported `main()` function (which logs `"hello world!"` to the console). [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
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
