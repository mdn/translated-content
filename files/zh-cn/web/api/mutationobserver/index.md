---
title: MutationObserver
slug: Web/API/MutationObserver
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。

## 构造函数

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : 创建并返回一个新的 `MutationObserver` 它会在指定的 DOM 发生变化时被调用。

## 方法

- {{domxref("MutationObserver.disconnect", "disconnect()")}}
  - : 阻止 `MutationObserver` 实例继续接收的通知，直到再次调用其 {{domxref("MutationObserver.observe", "observe()")}} 方法，该观察者对象包含的回调函数都不会再被调用。
- {{domxref("MutationObserver.observe", "observe()")}}
  - : 配置 `MutationObserver` 在 DOM 更改匹配给定选项时，通过其回调函数开始接收通知。
- {{domxref("MutationObserver.takeRecords", "takeRecords()")}}
  - : 从 MutationObserver 的通知队列中删除所有待处理的通知，并将它们返回到 {{domxref("MutationRecord")}} 对象的新 {{jsxref("Array")}} 中。

## Mutation Observer & customize resize event listener & demo

<https://codepen.io/webgeeker/full/YjrZgg/>

## 示例

以下示例改编自[这篇博客](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)。

```js
// 选择需要观察变动的节点
const targetNode = document.getElementById("some-id");

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

// 当观察到变动时执行的回调函数
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log("The " + mutation.attributeName + " attribute was modified.");
    }
  }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
observer.observe(targetNode, config);

// 之后，可停止观察
observer.disconnect();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
