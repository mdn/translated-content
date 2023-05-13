---
title: GPU：getPreferredCanvasFormat() 方法
slug: Web/API/GPU/getPreferredCanvasFormat
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPU")}} 接口的 **`getPreferredCanvasFormat()`** 方法返回用于当前系统上显示 8 位色深、标准动态范围（SDR）内容的最佳 canvas 纹理格式。

这通常用于为当前系统提供 {{domxref("GPUCanvasContext.configure()")}} 调用的最佳 `format` 值。这是推荐的——如果你没有在配置 canvas 上下文时使用最佳的格式，可能会产生开销，例如根据平台而异的额外纹理的复制。

## 语法

```js-nolint
getPreferredCanvasFormat()
```

### 参数

无。

### 返回值

一个字符串，表示 canvas 的纹理格式。该值可以是 `rgba8unorm` 或 `bgra8unorm`。

### 异常

无。

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
