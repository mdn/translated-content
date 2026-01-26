---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: 48315226326a31a77d9b63b584bb7c345e4edb4e
---

{{AvailableInWorkers}}

**`WebAssembly.Exception`** 对象表示一个从 WebAssembly 向 JavaScript 抛出、或者从 JavaScript 向 WebAssembly 的异常处理器抛出的运行时异常。

[构造函数](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)接受一个 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)、一个由值组成的数组和一个 `options` 对象作为参数。标签唯一地定义了异常的*类型*，包括异常的参数的顺序和参数的数据类型。访问抛出的异常的参数所用的标签要求和用于创建 `Exception` 的标签相同。提供了用于测试异常是否和特定的标签匹配的方法，也提供了通过索引获取特定值的方法（如果异常匹配上指定的标签的话）。

当关联的标签共享时，JavaScript 和其他客户端代码仅能访问 WebAssembly 异常值，反之亦然（你不能仅使用恰好定义了相同数据类型的其他标签）。没有匹配的标签，也可以捕获以及重新抛出异常，但是不能对其进行检查。

为了让异常抛出更快，从 WebAssembly 抛出的异常通常不包括堆栈跟踪。需要提供堆栈跟踪的 WebAssembly 代码必须在调用创建异常的 Javascript 函数时，在构造函数中传递 `options.traceStack=true` 参数。然后构造函数可能会返回一个将堆栈跟踪附着到 [`stack`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) 属性的异常。

## 构造函数

- [`WebAssembly.Exception()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : 创建一个新的 `WebAssembly.Exception` 对象。

## 实例方法

- [`Exception.prototype.is()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
  - : 测试异常是否匹配某个特定的标签。

- [`Exception.prototype.getArg()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : 返回与特定标签相匹配的异常的数据字段。

## 实例属性

- [`Exception.prototype.stack`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : 返回异常的堆栈跟踪，或者 `undefined`。

## 示例

这个示例展示如何定义一个标签并将其导入到模块，然后用它抛出一个在 JavaScript 中被捕获的异常。

思考下面的 WebAssembly 代码，假设其被编译为 **example.wasm** 文件。

- 模块导入一个标签，内部引用为 `$tagname` 并有一个单独的 `i32` 参数。tag 期望使用模块 `extmod` 和标签 `exttag` 传递标签。
- `$throwException` 函数使用 `throw` 指令抛出一个异常，接收 `$tagname` 和标签的参数。
- 模块导出一个抛出异常值为“42”的函数 `run()`。

```wat
(module
  ;; 导入的标签在这引用为 $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException 函数将 i32 参数作为 $tagname 异常抛出
  (func $throwException (param $errorValueArg i32)
    local.get $errorValueArg
    throw $tagname
  )

  ;; 导出调用 $throwException 的函数“run”
  (func (export "run")
    i32.const 42
    call $throwException
  )
)
```

下面的代码调用 [`WebAssembly.instantiateStreaming`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 导入 **example.wasm** 文件，传入的“导入对象”（`importObject`）中包含一个新的、名为 `tagToImport` 的 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)。导入的对象用匹配 WebAssembly 代码中 `import` 语句的属性定义一个对象。

一旦实例化文件，代码就调用导出的 WebAssembly `run` 方法，该方法会立即抛出一个异常。

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// 注意：导入对象属性要匹配 WebAssembly import 语句！
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // 检查我们是否有该异常对应的正确标签
    // 如果有的话，使用 getArg() 检查其内容
    if (e.is(tagToImport)) {
      console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
    }
  });

/* 日志输出
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 42
*/
```

在 JavaScript 中使用 `catch` 块捕获异常。我们可以看见它是 `WebAssembly.Exception` 类型，但是如果我们没有正确的标签的话，我们就什么也做不了。

然而，因为我们有一个标签，于是使用 [`Exception.prototype.is()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) 检查它是否是正确的那个，又因为它是正确的，于是调用 [`Exception.prototype.getArg()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) 读取值“42”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
