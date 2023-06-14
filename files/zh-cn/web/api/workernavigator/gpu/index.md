---
title: WorkerNavigator.gpu
slug: Web/API/WorkerNavigator/gpu
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}

{{domxref("WorkerNavigator")}} 接口的 **`gpu`** 只读属性为当前浏览上下文返回 {{domxref("GPU")}} 对象，该对象是 {{domxref("WebGPU_API", "WebGPU API", "", 1)}} 的入口点。

## 值

一个 {{domxref("GPU")}} 对象。

## 示例

```js
// 在 web worker 中可以运行
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
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
