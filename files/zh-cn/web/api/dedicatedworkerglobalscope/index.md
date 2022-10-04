---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

**`DedicatedWorkerGlobalScope`** 对象（也就是 {{domxref("Worker")}} 全局作用域）可以通过 {{domxref("window.self","self")}} 关键字来访问。一些在 worker 全局作用域下不可用的全局函数、命名空间对象以及构造器，也可以通过此对象使用。在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)的 [Web Workers 可以使用的函数和类](/zh-CN/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)页面中，有列举这些特性。

## 属性

_该接口从 {{domxref("WorkerGlobalScope")}} 接口以及它的父接口 {{domxref("EventTarget")}} 继承属性，因此，此接口也实现了来自 {{domxref("WindowTimers")}}、{{domxref("WindowBase64")}} 的属性。_

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : 通过 {{domxref("Worker.Worker", "Worker()")}} 构造器创建 {{domxref("Worker")}} 时，可以选择为其设置一个名称，即此属性的值。这主要用于调试。

### 从 WorkerGlobalScope 继承的属性

- {{domxref("WorkerGlobalScope.self")}}
  - : 返回一个指向 `DedicatedWorkerGlobalScope` 本身的对象引用。
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : 返回与当前 worker 相关联的 {{domxref("Console")}}。
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : 返回与当前 worker 相关联的 {{domxref("WorkerLocation")}}。`WorkerLocation` 是一个 worker 专有的 location 对象，基本上是浏览器作用域下 {{domxref("Location")}} 的子集，但被被适配给了 worker。
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : 返回与当前 worker 相关联的 {{domxref("WorkerNavigator")}}。`WorkerNavigator` 是一个 worker 专有的 navigator 对象，基本上是浏览器作用域下 {{domxref("Navigator")}} 的子集，但被被适配给了 worker。
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : 返回与当前 worker 相关联的 {{domxref("Performance")}}，是一个正常的 performance 对象，但只有一部分属性和方法可用。

### 事件处理器

_该接口从 {{domxref("WorkerGlobalScope")}} 接口以及它的父接口 {{domxref("EventTarget")}} 继承事件处理器，因此，此接口也实现了来自 {{domxref("WindowTimers")}}、{{domxref("WindowBase64")}} 的事件处理器。_

- {{domxref("DedicatedWorkerGlobalScope.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("message")}} event is raised. These events are of type {{domxref("MessageEvent")}} and will be called when the worker receives a message from the document that started it (i.e. from the {{domxref("Worker.postMessage")}} method.)
- {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("messageerror")}} event is raised.

## 方法

_该接口从 {{domxref("WorkerGlobalScope")}} 接口以及它的父接口 {{domxref("EventTarget")}} 继承方法，因此，此接口也实现了来自 {{domxref("WindowTimers")}}、{{domxref("WindowBase64")}} 的方法。_

- {{domxref("WorkerGlobalScope.close()")}}
  - : 抛弃当前 `WorkerGlobalScope` 的 event loop 中所有正在排队的任务，关闭当前作用域。
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}
  - : 向该 worker 的父文档发送消息——消息可以是任何 Javascript 对象。

### 从 WorkerGlobalScope 继承的方法

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : 向控制台写入一条消息。
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : 向当前 worker 的作用域导入一或更多条脚本。可按需导入任意数量的脚本，使用逗号分割参数。比如： `importScripts('foo.js', 'bar.js');`

### 从其他来源实现的方法

- {{domxref("WindowBase64.atob()")}}
  - : 解码使用 base-64 编码的字符串数据。
- {{domxref("WindowBase64.btoa()")}}
  - : 从字符串生成使用 base-64 编码的 ASCII 字符串。
- {{domxref("WindowTimers.clearInterval()")}}
  - : 取消使用 {{domxref("WindowTimers.setInterval()")}} 创建的定时操作。
- {{domxref("WindowTimers.clearTimeout()")}}
  - : 取消使用 {{domxref("WindowTimers.setTimeout()")}} 创建的定时操作。
- {{domxref("WindowTimers.setInterval()")}}
  - : 每隔一定时间执行一次给定函数。
- {{domxref("WindowTimers.setTimeout()")}}
  - : 延迟一定时间执行给定函数。

## 事件

- [`message`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Fired when the worker receives a message from its parent.
    Also available via the [`onmessage`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) property.
- [`messageerror`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : Fired when a worker receives a message that can't be deserialized.
    Also available via the [`onmessageerror`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror) property.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [使用 web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
- [Web Workers 可以使用的函数和类](/zh-CN/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
