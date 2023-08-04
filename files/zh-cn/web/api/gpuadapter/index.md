---
title: GPUAdapter
slug: Web/API/GPUAdapter
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`GPUAdapter`** 接口表示 GPU 适配器。这时，你可以请求一个 {{domxref("GPUDevice")}}、适配器信息、特性和限制。

使用 {{domxref("GPU.requestAdapter()")}} 方法去请求 `GPUAdapter` 对象。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("GPUAdapter.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 一个 {{domxref("GPUSupportedFeatures")}} 对象，其描述了适配器支持的额外的功能。
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 一个布尔值。如果适配器是[备用适配器](/zh-CN/docs/Web/API/GPU/requestAdapter#备用适配器)，则返回 `true` ；如果不是，则返回 `false`。
- {{domxref("GPUAdapter.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 一个 {{domxref("GPUSupportedLimits")}} 对象，其描述了适配器支持的限制。

## 实例方法

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{Experimental_Inline}}
  - : 返回 {{jsxref("Promise")}}，会兑现为一个 {{domxref("GPUAdapterInfo")}} 对象，该对象包含适配器的识别信息。
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : 返回 {{jsxref("Promise")}}，会兑现为一个 {{domxref("GPUDevice")}} 对象，该对象是与 GPU 通信的主要接口。

## 示例

```js
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

- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
