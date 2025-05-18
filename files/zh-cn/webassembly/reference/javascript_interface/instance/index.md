---
title: WebAssembly.Instance
slug: WebAssembly/Reference/JavaScript_interface/Instance
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.Instance`** 对象是 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 的一个有状态、可执行的实例。`Instance` 对象包含所有的、允许从 JavaScript 调用 WebAssembly 代码的[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)。

## 构造函数

- [`WebAssembly.Instance()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/Instance)
  - : 创建一个新的 `Instance` 对象。

## 实例属性

- [`exports`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)
  - : 返回一个将所有从 WebAssembly 模块实例导出的函数作为成员的对象，让 JavaScript 能访问以及使用这些函数。这个对象是只读的。

## 示例

### 同步实例化 WebAssembly 模块

可以调用 `WebAssembly.Instance()` 同步地实例化一个指定的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象，例如：

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
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

获得一个 `Instance` 的首选方式是异步的，例如像这样使用 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 函数：

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

示例也说明如何使用 `exports` 属性来访问导出的函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
