---
title: Window：crossOriginIsolated 属性
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("DOM")}}

{{domxref("Window")}} 接口的 **`crossOriginIsolated`** 只读属性返回一个指示网站是否处于跨源隔离状态的布尔值。该状态降低了旁路攻击的风险并解锁了一些功能：

- 可以创建并通过调用 {{DOMxRef("Window.postMessage()")}} 或 {{DOMxRef("MessagePort.postMessage()")}} 来发送 {{JSxRef("SharedArrayBuffer")}}。
- 提升 {{DOMxRef("Performance.now()")}} 的精度。
- 可以访问 {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}}。

当响应标头 {{HTTPHeader("Cross-Origin-Opener-Policy")}} 的值为 `same-origin` 且 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} 标头的值为 `require-corp` 或 `credentialless` 时，网站处于跨源隔离状态。

## 值

一个布尔值。

## 示例

```js
const myWorker = new Worker("worker.js");

if (window.crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
