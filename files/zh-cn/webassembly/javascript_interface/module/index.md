---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
---

{{JSRef}}**`WebAssembly.Module`** 对象包含已经由浏览器编译的无状态 WebAssembly 代码，可以高效地[与 Workers 共享](/zh-CN/docs/Web/API/Worker/postMessage)、[缓存在 IndexedDB 中](/zh-CN/docs/WebAssembly/Caching_modules)，和多次实例化。`WebAssembly.Module()` 构造函数可以用来同步编译给定的 WebAssembly 二进制代码。不过，获取 `Module` 对象的主要方法是通过异步编译函数，如 {{jsxref("WebAssembly.compile()")}}，或者是[通过 IndexedDB 读取 Module 对象](/zh-CN/docs/WebAssembly/Caching_modules).

## 构造函数语法

> **警告：** 由于大型模块的编译可能很消耗资源，开发人员只有在绝对需要同步编译时，才使用 `Module()` 构造函数；其他情况下，应该使用异步 {{jsxref("WebAssembly.compile()")}} 方法。

```plain
var myModule = new WebAssembly.Module(bufferSource);
```

### 参数

- _bufferSource_
  - : 一个 [类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays) 或 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)，包含要编译的 .wasm 模块的二进制代码。

## `Module` 构造函数的方法属性

- {{jsxref("Global_Objects/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}
  - : 给定 `Module` 对象和字符串，通过该字符串，返回 Module 对象中所有自定义部分的内容的副本。
- {{jsxref("Global_Objects/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}
  - : 给定 `Module` 对象，返回一个数组，内容是所有已声明的接口的描述。
- {{jsxref("Global_Objects/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}
  - : 给定 `Module` 对象，返回一个数组，内容是所有已声明的引用的描述。

## `Module` 实例

所有 `Module` 实例继承自 `Module()` 构造函数的[原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/prototype) —— 修改它会影响所有 `Module` 实例。

### 实例属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/prototype', 'Properties')}}

### 实例方法

Module 实例没有自己的默认方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请查阅

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页面
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
