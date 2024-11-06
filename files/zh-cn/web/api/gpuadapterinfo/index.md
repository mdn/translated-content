---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`GPUAdapterInfo`** 接口包含关于 {{domxref("GPUAdapter")}} 的标识信息。

使用 {{domxref("GPUAdapter.requestAdapterInfo()")}} 方法去请求 `GPUAdapterInfo` 对象。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("GPUAdapterInfo.architecture", "architecture")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 适配器所属的 GPU 家族或类别的名称。如果不能获得，则返回空字符串。
- {{domxref("GPUAdapterInfo.description", "description")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 描述适配器的人类可读字符串。如果不能获得，则返回空字符串。
- {{domxref("GPUAdapterInfo.device", "device")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 适配器供应商的标识符。如果不能获得，则返回空字符串。
- {{domxref("GPUAdapterInfo.vendor", "vendor")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 适配器供应商的名称。如果不能获得，则返回空字符串。

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

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.architecture);
  console.log(adapterInfo.vendor);

  // ...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
