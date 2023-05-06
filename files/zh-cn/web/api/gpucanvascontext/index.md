---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`GPUCanvasContext`** 接口表示 {{htmlelement("canvas")}} 元素的 WebGPU 渲染上下文，通过 {{domxref("HTMLCanvasElement.getContext()")}} 调用返回 `"webgpu"` 的 `contextType`。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("GPUCanvasContext.canvas", "canvas")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 返回创建上下文的 canvas 的引用。

## 实例方法

- {{domxref("GPUCanvasContext.configure", "configure()")}} {{Experimental_Inline}}
  - : 使用给定的 {{domxref("GPUDevice")}} 配置渲染上下文并清除 canvas 为透明的黑色。
- {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} {{Experimental_Inline}}
  - : 返回一个由 canvas 上下文合成到文档的 {{domxref("GPUTexture")}}。
- {{domxref("GPUCanvasContext.unconfigure", "unconfigure()")}} {{Experimental_Inline}}
  - : 移除预设的上下文配置，并销毁在配置 canvas 上下文时生成的任何配置。

## 示例

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
