---
title: 可转移对象
slug: Web/API/Web_Workers_API/Transferable_objects
---

{{DefaultAPISidebar("Web Workers API")}}

**可转移的对象**（Transferable object）是拥有属于自己的资源的对象，这些资源可以从一个上下文*转移*到另一个，确保资源一次仅在一个上下文可用。传输后，原始对象不再可用；它不再指向转移后的资源，并且任何读取或者写入该对象的尝试都将抛出异常。

*可转移对象*通常用于共享资源，该资源一次仅能安全地暴露在一个 JavaScript 线程中。例如，{{jsxref("ArrayBuffer")}} 是一个拥有内存块的可转移对象。当此类缓冲区（buffer）在线程之间传输时，相关联的内存资源将从原始的缓冲区分离出来，并且附加到新线程创建的缓冲区对象中。原始线程中的缓冲区对象不再可用，因为它不再拥有属于自己的内存资源了。

使用 {{DOMxRef("WorkerGlobalScope.structuredClone", "structuredClone()")}} 创建对象的深层拷贝时，也可以使用转移。克隆操作后，传输的资源将被移动到克隆的对象，而不是复制。

使用转移对象资源的机制取决于对象自身。例如，当 {{jsxref("ArrayBuffer")}} 在线程之间转移时，它指向的内存资源*实际上*以快速且高效的零拷贝操作在上下文之间移动。其他对象可以通过拷贝关联的资源，然后将它从旧的上下文中删除来转移它。

并不是所有的对象都是可转移的。[下面提供](#支持的对象)了可转移对象的列表。

## 在线程之间传输对象

以下代码演示了当消息从主线程发送到 {{domxref("Web Workers API", "web worker 线程","","true")}}时，传输是如何工作的。{{jsxref("Uint8Array")}} 在其缓冲区被转移时，被拷贝到 worker 中。传输后，任何尝试从主线程读或者写 `uInt8Array` 都将抛出错误，但是你仍然可以检查 `byteLength` 以确定它现在是 0。

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> [!NOTE]
> 像 {{jsxref("Int32Array")}} 和 {{jsxref("Uint8Array")}} 等[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)是{{Glossary("serializable object","可序列化的")}}，但是不能转移。然而，它们的底层缓冲区是一个 {{jsxref("ArrayBuffer")}}，它是一个可转移对象。我们可以在数据参数中发送 `uInt8Array.buffer`，但是不能在传输数组中发送 `uInt8Array`。

### 在进行克隆操作时转移

以下代码展示了 `structuredClone()` 操作，将底层缓冲区从原始对象复制到克隆对象（`clone`）。

```js
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength); // 1024
console.log(clone.byteLength); // 1024

original[0] = 1;
console.log(clone[0]); // 0

// Transferring the Uint8Array would throw an exception as it is not a transferable object
// const transferred = structuredClone(original, {transfer: [original]});

// We can transfer Uint8Array.buffer.
const transferred = structuredClone(original, { transfer: [original.buffer] });
console.log(transferred.byteLength); // 1024
console.log(transferred[0]); // 1

// After transferring Uint8Array.buffer cannot be used.
console.log(original.byteLength); // 0
```

## 支持的对象

以下是可以被*转移*的不同规范的对象：

- {{jsxref("ArrayBuffer")}}
- {{domxref("MessagePort")}}
- {{domxref("ReadableStream")}}
- {{domxref("WritableStream")}}
- {{domxref("TransformStream")}}
- {{domxref("AudioData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("VideoFrame")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("RTCDataChannel")}}

在各自对象的兼容性信息中，如果拥有 `transferable` 子特性，浏览器的支持应该被展示（示例请参阅 [`RTCDataChannel`](/zh-CN/docs/Web/API/RTCDataChannel#浏览器兼容性)）。在撰写本文时，并非所有可转移对象都已更新此信息。

> [!NOTE]
> 可转移的对象在 [Web IDL 文件](https://github.com/w3c/webref/tree/main/ed/idl)中用属性 `[Transferable]` 标记。

## 参见

- [可转移对象：像闪电一样快！](https://developer.chrome.google.cn/blog/transferable-objects-lightning-fast)
- [使用 Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- [HTML 规范中的可转移对象](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
