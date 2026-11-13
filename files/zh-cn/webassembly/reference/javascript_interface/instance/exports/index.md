---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/Reference/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

[`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance) 对象原型的 **`exports`** 只读属性返回一个对象，该对象将从 WebAssembly 模块实例中导出的所有函数作为其成员，让 JavaScript 能访问和使用这些函数。

## 示例

### 使用 exports

使用 fetch 获取一些 WebAssembly 字节码之后，我们使用 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 函数编译和实例化模块，在该过程中将一个 JavaScript 函数导入到 WebAssembly 模块中。然后调用一个 `Instance` 导出的[导出 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)。

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

> [!NOTE]
> 你也可以在 Github 上的 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) 找到这个示例（[也可以在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
