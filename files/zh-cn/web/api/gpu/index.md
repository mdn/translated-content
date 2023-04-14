---
title: GPU
slug: Web/API/GPU
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`GPU`** 接口是使用 WebGPU 的入口点。它用于返回一个 {{domxref("GPUAdapter")}}，你可以从中请求设备，获取配置特性以及限制等。

当前上下文的 `GPU` 对象可以通过 {{domxref("Navigator.gpu")}} 或 {{domxref("WorkerNavigator.gpu")}} 属性访问。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("GPU.requestAdapter", "requestAdapter()")}} {{Experimental_Inline}}
  - : 返回 {{jsxref("Promise")}}，会兑现一个 {{domxref("GPUAdapter")}} 对象实例。这时，你可以请求一个 {{domxref("GPUDevice")}}，它是使用 WebGPU 功能的主要接口。
- {{domxref("GPU.getPreferredCanvasFormat", "getPreferredCanvasFormat()")}} {{Experimental_Inline}}
  - : 返回用于当前系统上显示 8 位色深、标准动态范围（SDR）内容的最佳 canvas 纹理格式。

## 示例

### 请求适配器和设备

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

### 使用最佳纹理格式配置 GPUCanvasContext

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
