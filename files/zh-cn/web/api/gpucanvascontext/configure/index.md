---
title: GPUCanvasContext：configure() 方法
slug: Web/API/GPUCanvasContext/configure
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUCanvasContext")}} 接口的 **`configure()`** 方法使用给定的 {{domxref("GPUDevice")}} 配置用于渲染的上下文。当调用时，将首先清除画布为透明的黑色。

## 语法

```js-nolint
configure(configuration)
```

### 参数

- `configuration`

  - : 一个包含以下属性的对象：

    - `alphaMode` {{optional_inline}}
      - : 枚举值，用于指定 alpha 值，在读取、显示或用作图像源的纹理时，该值会对通过 {{domxref("GPUCanvasContext.getCurrentTexture()", "getCurrentTexture()")}} 返回的纹理内容产生影响。
        - `opaque`：忽略 alpha 值——如果纹理是透明的，当它用作图像源或显示到屏幕上时，将清除 alpha 通道为 1.0。这是默认值。
        - `premultiplied`：颜色值会与它们的 alpha 值预乘。例如，在 50% alpha 下的 100% 红色是 `[0.5, 0, 0, 0.5]`。
    - `colorSpace` {{optional_inline}}
      - : `getCurrentTexture()` 返回的纹理中写入的值应该使用哪种颜色空间来显示。可能的值是 `srgb`（默认值）和 `display-p3`。
    - `device`
      - : 包含上下文渲染信息的 {{domxref("GPUDevice")}}。
    - `format`
      - : `getCurrentTexture()` 返回的纹理将有哪些格式。这可以是 `bgra8unorm`、`rgba8unorm` 或 `rgba16float`。对于当前系统最佳的 canvas 纹理格式是由 {{domxref("GPU.getPreferredCanvasFormat()")}} 返回的。建议使用此方法——如果你在配置 canvas 上下文时不使用最佳格式，则可能会产生额外的开销，例如根据平台而异的额外纹理的复制。
    - `usage` {{optional_inline}}

      - : 指定由 `getCurrentTexture()` 返回的纹理允许使用方式的{{glossary("Bitwise flags","位标识")}}。可能的值有：

        - `GPUTextureUsage.COPY_SRC`：纹理可用于复制操作的源，例如，调用 {{domxref("GPUCommandEncoder.copyTextureToBuffer()")}} 方法时的 source 参数。
        - `GPUTextureUsage.COPY_DST`：纹理可用于拷贝/写入操作的目标，例如，调用 {{domxref("GPUCommandEncoder.copyTextureToTexture()")}} 方法的 destination 参数。
        - `GPUTextureUsage.RENDER_ATTACHMENT`：纹理可用于渲染通道中的颜色附件，例如，调用 {{domxref("GPUCommandEncoder.beginRenderPass()")}} 中要使用的颜色附件视图。`usage` 的默认值是 `GPUTextureUsage.RENDER_ATTACHMENT`，但请注意，如果明确设置了不同的值，则不会自动地包含它；在这种情况下，你需要去主动的添加。
        - `GPUTextureUsage.TEXTURE_BINDING`：纹理可绑定以在着色器中用作采样纹理，例如，调用 {{domxref("GPUDevice.createBindGroup()")}} 的要使用的绑定组条目。
        - `GPUTextureUsage.STORAGE_BINDING`：纹理可绑定以在着色器中用作存储纹理，例如，调用 {{domxref("GPUDevice.createBindGroup()")}} 的要使用的绑定组条目。

        请注意，可以通过管道符分隔值来指定多种可能的用法，例如：

        ```js
        usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT;
        ```

    - `viewFormats` {{optional_inline}}
      - : 视图从 `getCurrentTexture()` 返回的纹理创建时可能使用的格式数组。有关所有可能的值，请参阅[纹理格式](https://gpuweb.github.io/gpuweb/#texture-formats)。

### 返回值

无（`undefined`）。

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
