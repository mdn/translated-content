---
title: GPUDevice
slug: Web/API/GPUDevice
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`GPUDevice`** 接口表示一个逻辑 GPU 设备。这是访问大部分 WebGPU 功能的主要接口。

使用 {{domxref("GPUAdapter.requestDevice()")}} 方法请求 `GPUDevice` 对象。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{domxref("GPUDevice.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : {{domxref("GPUSupportedFeatures")}} 对象，其描述了由设备支持的额外功能。

- {{domxref("GPUDevice.label", "label")}} {{Experimental_Inline}}
  - : 字符串，其提供了用于标识对象的标签，例如在 {{domxref("GPUError")}} 信息或控制台警告中。

- {{domxref("GPUDevice.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : {{domxref("GPUSupportedLimits")}} 对象，其描述了由设备支持的限制。

- {{domxref("GPUDevice.lost", "lost")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 包含一个 {{jsxref("Promise")}}，该 promise 在设备的整个生命周期内一直保留待定状态，当失去设备时，会兑现为 {{domxref("GPUDeviceLostInfo")}}。

- {{domxref("GPUDevice.queue", "queue")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 返回设备主要的 {{domxref("GPUQueue")}}。

## 实例方法

_从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}} {{Experimental_Inline}}
  - : 基于 {{domxref("GPUBindGroupLayout")}} 创建一个 {{domxref("GPUBindGroup")}}，该组定义了一组要绑定在一起的资源，以及如何在着色阶段使用这些资源。

- {{domxref("GPUDevice.createBindGroupLayout", "createBindGroupLayout()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUBindGroupLayout")}}，其定义了相关 GPU 资源的结构和目的，例如将在管线中使用的缓冲区，并在创建 {{domxref("GPUBindGroup")}} 时用作模版。

- {{domxref("GPUDevice.createBuffer", "createBuffer()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUBuffer")}}，在其中存储用于 GPU 运算的原始数据。

- {{domxref("GPUDevice.createCommandEncoder", "createCommandEncoder()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUCommandEncoder")}}，用于将要发给 GPU 的指令编码。

- {{domxref("GPUDevice.createComputePipeline", "createComputePipeline()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUComputePipeline")}}，可以控制计算着色阶段，并用于 {{domxref("GPUComputePassEncoder")}}。

- {{domxref("GPUDevice.createComputePipelineAsync", "createComputePipelineAsync()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个 {{domxref("GPUComputePipeline")}}，一旦管线可以在没有任何停滞的情况下使用，其可以控制计算着色阶段，并用于 {{domxref("GPUComputePassEncoder")}}。

- {{domxref("GPUDevice.createPipelineLayout", "createPipelineLayout()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUPipelineLayout")}}，其定义了管线使用的 {{domxref("GPUBindGroupLayout")}}。在指令编码期间，与管线一起使用的 {{domxref("GPUBindGroup")}} 必须具有兼容的 {{domxref("GPUBindGroupLayout")}}。

- {{domxref("GPUDevice.createQuerySet", "createQuerySet()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUQuerySet")}}，其可以用于录制通道中的查询结果，例如例如遮挡或时间戳查询。

- {{domxref("GPUDevice.createRenderBundleEncoder", "createRenderBundleEncoder()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPURenderBundleEncoder")}}，其可用于预先录制指令的 bundle。可以根据需要多次，通过 {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} 方法在 {{domxref("GPURenderPassEncoder")}} 中重复使用。

- {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPURenderPipeline")}}，其可以控制顶点或片元着色器阶段，并用于 {{domxref("GPURenderPassEncoder")}} 或 {{domxref("GPURenderBundleEncoder")}}。

- {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个 {{domxref("GPURenderPipeline")}}，一旦管线可以在没有任何停滞的情况下使用，其可以控制顶点或片元着色器阶段，并用于 {{domxref("GPURenderPassEncoder")}} 或 {{domxref("GPURenderBundleEncoder")}}。

- {{domxref("GPUDevice.createSampler", "createSampler()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUSampler")}}，其控制着色器如何转换并过滤纹理资源数据。

- {{domxref("GPUDevice.createShaderModule", "createShaderModule()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUShaderModule")}}，其用 WGSL 源码字符串创建。

- {{domxref("GPUDevice.createTexture", "createTexture()")}} {{Experimental_Inline}}
  - : 创建一个 {{domxref("GPUTexture")}}，在其中存储用于 GPU 渲染操作的纹理数据。

- {{domxref("GPUDevice.destroy", "destroy()")}} {{Experimental_Inline}}
  - : 销毁设备，防止对它进行进一步操作。

- {{domxref("GPUDevice.importExternalTexture", "importExternalTexture()")}} {{Experimental_Inline}}
  - : 将 {{domxref("HTMLVideoElement")}} 作为输入，并返回一个 {{domxref("GPUExternalTexture")}} 包装器对象，其中包含可用于 GPU 渲染操作的视频快照。

- {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} {{Experimental_Inline}}
  - : 从错误范围堆栈中弹出一个现有的 GPU 错误作用域，并返回一个 Promise，会兑现为一个对象（{{domxref("GPUInternalError")}}、{{domxref("GPUOutOfMemoryError")}} 或 {{domxref("GPUValidationError")}}），描述作用域中捕获的第一个错误，如果没有发生错误，则为 `null`。

- {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} {{Experimental_Inline}}
  - : 将新的 GPU 错误作用域推入到设备的错误作用域栈上，允许你捕获特定类型的错误。

## 事件

- {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} {{Experimental_Inline}}
  - : 当抛出 GPU 错误作用域未观察到的错误时触发，以提供报告意外错误的方式。已知的错误情况应使用 {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} 和 {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} 处理。

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

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  //...
}
```

有关 `GPUDevice` 使用的更多示例，请参阅上面列出的每个成员页面和以下的演示网站：

- [基础的计算示例](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [基础的渲染示例](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU 示例](https://webgpu.github.io/webgpu-samples/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
