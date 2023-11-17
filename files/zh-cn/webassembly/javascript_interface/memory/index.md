---
title: WebAssembly.Memory()
slug: WebAssembly/JavaScript_interface/Memory
---

{{WebAssemblySidebar}}

**`WebAssembly.Memory()`** 构造函数创建一个新的 `Memory` 对象。该对象的 {{jsxref("WebAssembly/Memory/buffer","buffer")}} 属性是一个可调整大小的 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ，其内存储的是 WebAssembly `实例` 所访问内存的原始字节码。

从 JavaScript 或 WebAssembly 中所创建的内存，可以由 JavaScript 或 WebAssembly 来访问及更改。

## 语法

```plain
var myMemory = new WebAssembly.Memory(memoryDescriptor);
```

### 参数

- _memoryDescriptor_

  - : 一个可包含以下成员的对象：

    - _initial_
      - : WebAssembly 内存的初始大小，以 WebAssembly 页面为单位。
    - _maximum {{optional_inline}}_
      - : 以 WebAssembly 页面为单位，可允许 WebAssembly 内存的 `最大值`。当存在此属性时，此参数用于提示引擎预先保留内存。但是，引擎可能会忽略或限制此预留请求。通常情况下大多数 WebAssembly 模块不需要设置 `最大值`。

> **备注：** A WebAssembly 页面的大小为一个常量 65,536 字节，即 64KB。

### 异常

- 如果 `memoryDescriptor` 的类型不是对象，则抛出 {{jsxref("TypeError")}} 异常。
- 如果指定了 `maximum` 并且小于 `initial`，则抛出 {{jsxref("RangeError")}} 异常。

## `Memory` 实例

所有 `Memory` 实例都继承自 `Memory()` 构造函数的 [原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/prototype) — 这个原型可被修改并影响到所有的 `Memory` 实例。

### 实例属性

- `Memory.prototype.constructor`
  - : 返回创建此对象实例的函数。默认情况下，它是 {{jsxref("WebAssembly.Memory()")}} 构造函数。
- {{jsxref("WebAssembly/Memory/buffer","Memory.prototype.buffer")}}
  - : 一个访问器，用于返回内存中包含的缓冲区。

### 实例方法

- {{jsxref("WebAssembly/Memory/grow","Memory.prototype.grow()")}}
  - : 通过指定 WebAssembly 页面数量来增加内存实例的大小。（每个页面大小为 64KB）

## 示例

有两种方法可以获得 `WebAssembly.Memory` 对象。第一种方法是由 JavaScript 来创建。以下示例创建了一个新的 WebAssembly 内存实例，初始大小为 10 页（640KB），最大值设置为 100 页（6.4MB）。

```js
var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
```

获取 `WebAssembly.Memory` 对象的第二种方法是从 WebAssembly 模块中导出。以下示例（详见 GitHub 页面 [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) ，也可以 [用浏览器运行查看](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)）使用 {{jsxref("WebAssembly.instantiateStreaming()")}} 方法实例化已加载的 memory.wasm 字节代码，同时导入上面一行中创建的内存。用它来存储一些值，然后导出一个函数并用它来对一些值进行求和操作。

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## 标准规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
