---
title: PromiseRejectionEvent.promise
slug: Web/API/PromiseRejectionEvent/promise
---

{{APIRef("HTML DOM") }}

{{domxref("PromiseRejectionEvent")}}事件对象的 **`promise`** 属性是只读的，表明 Promise 被 reject 的原因。您可以通过检查{{domxref("PromiseRejectionEvent.reason")}}来了解 Promise 为什么被 reject。

## Syntax

```plain
promise = PromiseRejectionEvent.promise
```

### Value

一个被 reject 的，并且错误未被处理的{{jsxref("Promise")}}

## Examples

下面的例子监听了未被处理的 promise，如果{{domxref("PromiseRejectionEvent.reason", "reason")}} 是一个对象，并且其`code`属性包含了一段文本“Module not read.”，一个空闲的回调函数被声明，当任务执行错误时会进行重试

{{domxref("event.preventDefault()")}} 用来表明该 promise 已被处理

```js
window.onunhandledrejection = function (event) {
  if (event.reason.code && event.reason.code == "Module not ready") {
    window.requestIdleCallback(function (deadline) {
      loadModule(event.reason.moduleName).then(performStartup);
    });
    event.preventDefault();
  }
};
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
