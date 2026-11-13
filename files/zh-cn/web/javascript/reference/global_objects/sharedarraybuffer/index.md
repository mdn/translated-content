---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

**`SharedArrayBuffer`** 对象用来表示一个通用的原始二进制数据缓冲区，类似于 {{jsxref("ArrayBuffer")}} 对象，但它可以用来在共享内存上创建视图。与可转移的 `ArrayBuffer` 不同，`SharedArrayBuffer` 不是[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

## 描述

要在集群中的一个代理（agent，可以是网页的主程序或其任意一个 web worker）与另一个代理之间使用 `ShareArrayBuffer` 共享内存，需要使用 [`postMessage`](/zh-CN/docs/Web/API/Worker/postMessage) 和[结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。

结构化克隆算法接受 `SharedArrayBuffer` 对象和映射到 `SharedArrayBuffer` 对象的类型化数组。在这两种情况下， `SharedArrayBuffer` 对象会被传输给接收者，从而在接收代理中产生一个新的、私有的 `SharedArrayBuffer` 对象（就像 {{jsxref("ArrayBuffer")}} 一样）。但是，两个 `SharedArrayBuffer` 对象指向的共享数据块其实是同一个数据块，一个代理中对数据块的修改最终会将在另一个代理中可见。

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

共享内存可以被 worker 线程或主线程创建和同时更新。根据系统（CPU、操作系统、浏览器）的不同，需要一段时间才能将变化传递给所有上下文环境。因此需要通过{{jsxref("Atomics", "原子", "", 1)}}操作来进行同步。

`SharedArrayBuffer` 被一些 web API 使用，比如：

- [`WebGLRenderingContext.bufferData()`](/zh-CN/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/zh-CN/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/zh-CN/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### 安全需求

由于[幽灵漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)，共享内存和高精度定时器在 2018 年 1 月 5 日开始被[禁用](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/)。在 2020 年，一种新的、安全的方法已经被标准化，以重新启用共享内存。

作为基本要求，你的文档需要处于一个[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中。

对于顶级文档，需要设置两个标头来实现你网站的跨源隔离：

- [`Cross-Origin-Opener-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy) 设置为 `same-origin`（来保护你的源站点免受攻击）
- [`Cross-Origin-Embedder-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) 设置为 `require-corp` 或 `credentialless`（保护受害者免受你的源站点的影响）

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

为了验证跨源隔离是否生效，你可以测试窗口和 worker 上下文中的 {{domxref("Window.crossOriginIsolated")}} 或 {{domxref("WorkerGlobalScope.crossOriginIsolated")}} 属性：

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

在设置了这两个标头后，`postMessage()` 不再为 `SharedArrayBuffer` 对象抛出错误，因此，跨线程共享内存现在可用。

嵌套文档和专用 worker 线程也需要将 [`Cross-Origin-Embedder-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) 标头设置为同样的值。对于同源嵌套文档和子资源，不需要进行任何其他更改。同站（但跨源）嵌套文档和子资源需要将 [`Cross-Origin-Resource-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) 标头设置为 `same-site`。而它们的跨源（和跨站点）的对应部分也需要将同样的标头设置为 `cross-origin`。请注意，将 [`Cross-Origin-Resource-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) 标头设置为除 `same-origin` 之外的任何值，都会使资源暴露于潜在的攻击中，比如[幽灵漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)。

请注意，[`Cross-Origin-Opener-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy) 标头会限制你对弹出窗口引用的保留能力。两个顶级窗口上下文之间的直接访问基本上只在它们同源且携带相同的两个标头（且具有相同的值）时才可行。

### API 可用性

根据是否采取了上述安全措施，各类内存共享 API 具有不同的可用性：

- `Atomics` 对象总是可用的。
- `SharedArrayBuffer` 对象在原则上始终可用，但遗憾的是，除非设置了前面提到的两个标头，否则其在全局对象上的构造函数是隐藏的，这是为了兼容 web 内容。这个限制有望在未来被移除。尽管如此，仍然可以用 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 来获取实例。
- 除非设置了上文提到的两个标头，否则各种 `postMessage()` 的 API 在处理 `SharedArrayBuffer` 对象时会抛出异常。如果正确设置了这两个标头，`Window` 对象和专用 worker 线程上的 `postMessage()` 都可以正常工作，并允许跨线程共享内存。

### WebAssembly 共享内存

[`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象可以通过设置 [`shared`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared) 构造函数标志来创建。当这个标志设置为 `true` 时，构造出的 `Memory` 对象就像 `SharedArrayBuffer` 一样，可以通过 `postMessage()` 在 worker 线程之间共享，而且 `Memory` 对象的后备 [`buffer`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) 是一个 `SharedArrayBuffer`。因此，上述关于在 worker 线程间共享 SharedArrayBuffer 的要求同样适用于共享 `WebAssembly.Memory`。

WebAssembly Thread 提案还定义了一套新的[原子](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses)指令。就像 `SharedArrayBuffer` 及其方法始终可用（并且只有在设置了新标头的情况下，才允许线程间共享）一样，WebAssembly 原子指令也是始终可用的。

### 增大 SharedArrayBuffer

`SharedArrayBuffer` 对象可以通过在调用 {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} 时包含 `maxByteLength` 选项来使其可增大。你可以通过访问 `SharedArrayBuffer` 的 {{jsxref("SharedArrayBuffer/growable", "growable")}} 和 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} 属性来分别查询其是否可增大以及其最大大小。你还可以通过调用 {{jsxref("SharedArrayBuffer/grow", "grow()")}} 为一个可增大的 `SharedArrayBuffer` 分配新的大小。新字节被初始化为 0。

这些特性令增大 `SharedArrayBuffer` 更为高效——否则，你必须创建一个新大小的缓冲区副本。它还使得 JavaScript 在这方面与 WebAssembly 保持一致（Wasm 线性内存可以通过 [`WebAssembly.Memory.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) 调整大小）。

出于安全原因，`SharedArrayBuffer` 的大小无法缩小，只能增大。

## 构造函数

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : 创建一个新的 `SharedArrayBuffer` 对象。

## 静态属性

- [`SharedArrayBuffer[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : 返回用于构造 `SharedArrayBuffer` 方法返回值的构造函数。

## 实例属性

属性定义于 `SharedArrayBuffer.prototype` 并且被所有 `SharedArrayBuffer` 实例所共享。

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : 数组大小，以字节为单位。在构造数组时被确定，并且只能在可增大的 `SharedArrayBuffer`上通过 {{jsxref("SharedArrayBuffer.prototype.grow()")}} 方法来改变。
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `SharedArrayBuffer` 实例，其初始值为 {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}} 构造函数。
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : 只读。如果当前 `SharedArrayBuffer` 可以增大，则返回 `true`，否则返回 `false`。
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : 当前 `SharedArrayBuffer` 可以增大的最大长度，只读，以字节为单位。在构造数组时确定且无法更改。
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"SharedArrayBuffer"`。它被用于 {{jsxref("Object.prototype.toString()")}}。

## 实例方法

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : 增大当前 `SharedArrayBuffer` 到指定大小，以字节为单位。
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : 返回一个新的 `SharedArrayBuffer`，其内容是当前 `SharedArrayBuffer` 从 `begin`（含）到 `end`（不含）的字节的副本。如果 `begin` 或 `end` 为负，则它是从数组的末尾开始的索引，而不是数组的开头。

## 示例

### 创建一个新的 SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### 截取 SharedArrayBuffer

```js
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### 在 WebGL buffer 中使用

```js
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");
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
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)
- [共享内存——简明教程](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md)，TC39 ecmascript-sharedmem 提案
- [JavaScript 新并发原语的初体验](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)，hacks.mozilla.org（2016）
- [COOP 和 COEP 的解释](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit)，由 Chrome 团队撰写（2020）
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} 和 {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [Android Chrome 88 和桌面版 Chrome 92 中的 SharedArrayBuffer 更新](https://developer.chrome.google.cn/blog/enabling-shared-array-buffer)，developer.chrome.google.cn（2021）
