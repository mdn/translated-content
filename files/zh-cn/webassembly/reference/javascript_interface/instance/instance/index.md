---
title: WebAssembly.Instance() 构造函数
slug: WebAssembly/Reference/JavaScript_interface/Instance/Instance
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

**`WebAssembly.Instance()`** 构造函数创建一个新的 `Instance` 对象，该对象是 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 的有状态、可执行的实例。

> [!WARNING]
> 因为实例化大模块的开销很大，当一定要使用同步实例化时，开发者才应该使用 `Instance`；在所有其他情况下使用异步的 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法。

## 语法

```js-nolint
new WebAssembly.Instance(module, importObject)
```

### 参数

- `module`
  - : 要实例化的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。
- `importObject` {{optional_inline}}
  - : 一个对象，包含的是被导入到新创建的 `Instance` 的值，例如：函数或 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象。`module` 中每一个申明的导入必须有一个匹配的属性，否则会抛出 [`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)。

### 异常

- 如果参数的类型或者结构不正确，则抛出 {{jsxref("TypeError")}}。
- 如果操作失败，则抛出 [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)、[`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)、[`WebAssembly.RuntimeError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 其中的一个，具体取决于失败的原因。
- 一些浏览器可能会抛出 {{jsxref("RangeError")}}，因为它们禁止在 UI 线程上的大缓冲区上进行 Wasm 的编译和初始化。

## 示例

### 同步实例化 WebAssembly 模块

可以调用 `WebAssembly.Instance()` 构造函数同步地实例化一个指定的 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象，例如：

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

然而，获得一个 `Instance` 的首选方式是使用异步的 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 函数，例如像这样：

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
