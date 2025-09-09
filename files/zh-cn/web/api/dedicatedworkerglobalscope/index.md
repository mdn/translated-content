---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

**`DedicatedWorkerGlobalScope`** 对象（也就是 {{domxref("Worker")}} 全局作用域）可以通过 {{domxref("window.self","self")}} 关键字来访问。一些在 worker 全局作用域下不可用的全局函数、命名空间对象以及构造器，也可以通过此对象使用。在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)的 [Web Workers 可以使用的函数和类](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)页面中，有列举这些特性。

## 实例属性

_该接口从 {{domxref("WorkerGlobalScope")}} 接口以及它的父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : 通过 {{domxref("Worker.Worker", "Worker()")}} 构造器创建 {{domxref("Worker")}} 时，可以选择为其设置一个名称，即此属性的值。这主要用于调试。

## 实例方法

_该接口从 {{domxref("WorkerGlobalScope")}} 接口以及它的父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("WorkerGlobalScope.close()")}}
  - : 抛弃当前 `WorkerGlobalScope` 的 event loop 中所有正在排队的任务，关闭当前作用域。
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}
  - : 向该 worker 的父文档发送消息——消息可以是任何 Javascript 对象。

## 事件

- [`message`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Fired when the worker receives a message from its parent.
    Also available via the [`onmessage`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/message_event) property.
- [`messageerror`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : Fired when a worker receives a message that can't be deserialized.
    Also available via the [`onmessageerror`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) property.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- [worker 可以使用的函数](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
