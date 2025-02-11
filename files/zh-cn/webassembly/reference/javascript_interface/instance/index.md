---
title: WebAssembly.Instance
slug: WebAssembly/Reference/JavaScript_interface/Instance
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

**`WebAssembly.Instance`** 对象本身是有状态的，是 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 的一个可执行实例。`Instance` 对象包含所有的 [WebAssembly 导出函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)，允许从 JavaScript 调用 WebAssembly 代码。

## 构造函数

- [`WebAssembly.Instance()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/Instance)
  - : 创建一个新的 `Instance` 对象。

## 实例属性

- [`exports`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)
  - : 返回一个包含此 WebAssembly 模块实例所导出的全部成员对象，以便 JavaScript 访问和使用这些成员，这个对象是只读的。

## 示例

### 同步实例化 WebAssembly 模块

`WebAssembly.Instance()` 构造函数以同步方式实例化一个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象，例如：

```js
const importObject = {
  imports: {
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
  imports: {
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

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
