---
title: WebAssembly.validate()
slug: WebAssembly/Reference/JavaScript_interface/validate_static
---

**`WebAssembly.validate()`** 方法用于验证包含 WebAssembly 二进制码的一个[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)是否合法，返回 `true` 如果这些字节能构成一个合法的 wasm 模块，否则返回 `false`。

## 语法

```js-nolint
WebAssembly.validate(bufferSource)
WebAssembly.validate(bufferSource, compileOptions)
```

### 参数

- `bufferSource`
  - : 一个包含 WebAssembly 二进制码的 [typed array](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays) 或 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

### 返回值

一个布尔值，用来表示给定的 `bufferSource` 是合法 wasm 代码（`true`）或者不是（`false`）。

### 异常

如果给定的 `bufferSource` 不是 [typed array](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays) 或 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 类型，将会抛出 {{jsxref("TypeError")}} 异常。

## 示例

下面的例子（查看 validate.html [源代码](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html)，或者[在线预览](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)）通过 `fetch` 获取了一个 .wasm 模块并将其转换为一个类型化数组。接下来用 `validate()` 方法来验证这个模块是否合法。

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const valid = WebAssembly.validate(bytes);
    console.log(
      `The given bytes are ${valid ? "" : "not "}a valid Wasm module`,
    );
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
