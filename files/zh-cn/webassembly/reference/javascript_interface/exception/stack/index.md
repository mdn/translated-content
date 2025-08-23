---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{non-standard_header}}

[`WebAssembly.Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception) 类型的一个对象实例的只读 **`stack`** 属性*可能*包含堆栈跟踪。

来自 WebAssembly 代码的异常默认不会包含堆栈跟踪。

如果 WebAssembly 代码需要提供堆栈跟踪，它必须调用 JavaScript 函数来创建异常，并为其[构造函数](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)传递 `options.trackStack=true` 参数。然后虚拟机会将堆栈跟踪附着到该构造函数返回的异常对象上。

> [!NOTE]
> 通常不会从 WebAssembly 代码发送堆栈跟踪以改善性能。给异常添加堆栈跟踪的能力是为开发者工具提供的，一般不建议更广泛的使用。

## 值

一个包含堆栈跟踪的字符串，或者当跟踪没有被赋值时为 {{jsxref("undefined")}}。

堆栈跟踪字符串列出 WebAssembly 格式的栈上的每个操作的位置。它是人类可读的字符串，包含 URL、被调用的函数类型名、函数索引以及它在模块二进制中的偏移。它大约是这个格式（参见规范中的[堆栈跟踪约定](https://webassembly.github.io/spec/web-api/index.html#conventions)获取更多信息）：

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## 示例

这个例子展示如何从 WebAssembly 抛出一个包含堆栈跟踪的异常。

考虑下面的 WebAssembly 代码，假设其被编译为一个名为 **example.wasm** 的文件。它导入一个标签，内部引用为 `$tagname`，并导入一个引用为 `$throwExnWithStack` 的函数。它导出一个可被外部代码调用的方法 `run`，以调用 `throwExnWithStack`（就是 JavaScript 函数）

```wat
(module
  ;; 导入的标签在这引用为 $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; 导入的函数在这引用为 $throwExnWithStack
  (import "extmod" "throwExnWithStack" (func $throwExnWithStack (param i32)))

  ;; 将 42 作为参数调用 $throwExnWithStack
  (func (export "run")
    i32.const 42
    call $throwExnWithStack
  )
)
```

下面的 JavaScript 代码定义一个新标签 `tag` 和函数 `throwExceptionWithStack`。在实例化 WebAssembly 模块时，将它们放在 `importObject` 中传递给 WebAssembly 模块。

一旦文件被实例化，代码就调用导出的 WebAssembly `run()` 方法，该方法会立即抛出一个异常。然后 `catch` 语句会打印栈。

```js
const tag = new WebAssembly.Tag({ parameters: ["i32"] });

function throwExceptionWithStack(param) {
  // 注意：我们用“{traceStack: true}”申明异常
  throw new WebAssembly.Exception(tag, [param], { traceStack: true });
}

// 注意：importObject 属性要和 WebAssembly import 语句相匹配。
const importObject = {
  extmod: {
    exttag: tag,
    throwExnWithStack: throwExceptionWithStack,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.log(`栈：${e.stack}`);
  });

// 日志输出（像这样）：
// 栈：throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

该代码中最“相关”的部分是创建异常的那行：

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

传递 `{traceStack: true}` 是告诉 WebAssembly 虚拟机它应该将堆栈跟踪附着到返回的 `WebAssembly.Exception`。如果没有的话，栈将会是 `undefined`。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
