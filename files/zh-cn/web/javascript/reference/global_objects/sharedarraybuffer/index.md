---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Class
  - JavaScript
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---
{{JSRef}}

**`SharedArrayBuffer`** 对象用来表示一个通用的、固定长度的原始二进制数据缓冲区，类似于 {{jsxref("ArrayBuffer")}} 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 `ArrayBuffer` 不同的是，**`SharedArrayBuffer`** 不能被{{Glossary("Transferable Objects", "转移")}}。

## 描述

### 分配及共享内存

为了将一个 {{jsxref("SharedArrayBuffer")}} 对象从一个用户代理共享到另一个用户代理（另一个页面的主进程或者当前页面的一个 `worker`）从而实现共享内存，我们需要运用  [`postMessage`](/zh-CN/docs/Web/API/Worker/postMessage) 和[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。

结构化克隆算法接收 `SharedArrayBuffers` 对象，或被映射到一个新的 `SharedArrayBuffers` 对象上的 `TypedArrays` 对象。在这两种情况下，这个新的 `SharedArrayBuffer` 对象会被传递到目标用户代理的接收函数上，从而在目标用户代理产生一个新的私有 `SharedArrayBuffer` 对象（正如 {{jsxref("ArrayBuffer")}} 一样）。但是，这两个 `SharedArrayBuffer` 对象指向的共享数据块其实是同一个，所以某一代理对数据块的修改在另一个代理中可见。

```js
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### 通过原子操作更新及同步共享内存

共享内存能被同时创建和更新于 `worker` 线程或主线程。依赖于系统（CPU、操作系统、浏览器），变化传递给所有上下文环境需要一段时间。因此需要通过{{jsxref("Atomics", "原子", "", 1)}}操作来进行同步。

### 接受 SharedArrayBuffer 对象的 API

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}

### 安全需求

为应对[幽灵漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)，所有主流浏览器均默认[于 2018 年 1 月 5 日禁用 SharedArrayBuffer](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/)。在 2020 年，一种新的、安全的方法已经标准化，以重新启用 `SharedArrayBuffer`。通过一些安全措施，[`postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) 将不再抛出有关 `SharedArrayBuffer` 对象的异常，跨线程共享内存也变得可用：

作为基准需求，你的文档需处于[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中。

对于顶级文档，需要设置两个 HTTP 消息头以跨域隔离你的站点：

- [`Cross-Origin-Opener-Policy`](/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) 设置为 `same-origin`（保护源站免受攻击）
- [`Cross-Origin-Embedder-Policy`](/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) 设置为 `require-corp`（保护源站免受侵害）

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

为检查跨域隔离是否生效，你可以检查 [`crossOriginIsolated`](/zh-CN/docs/Web/API/crossOriginIsolated) 属性在窗口和 `worker` 上下文中是否可用：

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

参阅 [Planned changes to shared memory](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes)，以了解共享内存在浏览器中的变更计划（例如，Firefox 79）。

### 始终使用 new 运算符来构造 SharedArrayBuffer

`SharedArrayBuffer` 必须使用 {{jsxref("Operators/new", "new")}} 运算符来构造。作为函数来调用 `SharedArrayBuffer()` 构造函数（如果不用 `new` 运算符），将会抛出 {{jsxref("TypeError")}} 异常。

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## 构造函数

- [`SharedArrayBuffer()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer)
  - : 创建一个 `SharedArrayBuffer` 对象。

## 实例属性

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : 数组的大小（以字节为单位）。这是在构造数组时建立的，不能更改（**只读**）。

## 实例方法

- {{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}
  - : 返回一个新的 `SharedArrayBuffer`，其为源数组从 `begin` 字节到 `end` 字节（不含 `end` 字节）的拷贝。若 `begin` 或 `end` 为负数，则表示从数组末尾开始的索引。

## 示例

### 创建一个新的 SharedArrayBuffer

```js
var sab = new SharedArrayBuffer(1024);
```

### 截取 SharedArrayBuffer

```js
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### 在 WebGL buffer 中使用

```js
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple)——一个提供同步和工作分配抽象的简单库。
- [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
