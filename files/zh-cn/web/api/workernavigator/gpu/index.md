---
title: WorkerNavigator：gpu 属性
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WorkerNavigator")}} 接口的 **`gpu`** 只读属性返回当前浏览上下文的 {{domxref("GPU")}} 对象，该对象是 {{domxref("WebGPU_API", "WebGPU API", "", 1)}} 的入口点。

## 值

一个 {{domxref("GPU")}} 对象。

## 示例

```js
// 可以在 web worker 中运行
async function init() {
  if (!navigator.gpu) {
    throw Error("不支持 WebGPU。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("无法请求 WebGPU 适配器。");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGPU_API", "WebGPU API", "", 1)}}
