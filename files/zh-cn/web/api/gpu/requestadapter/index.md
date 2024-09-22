---
title: GPU：requestAdapter() 方法
slug: Web/API/GPU/requestAdapter
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPU")}} 接口的 **`requestAdapter()`** 方法返回一个 {{jsxref("Promise")}}，该 promise 会使用 {{domxref("GPUAdapter")}} 对象实例兑现。这时，你可以请求 {{domxref("GPUDevice")}}、适配器信息、特性以及配置。

注意，用户代理会选择是否返回一个适配器。如果可以，它会根据提供的 options 进行选择。如果没有提供 options，设备将提供对默认适配器的访问，这通常足够满足大多数的目的。

## 语法

```js-nolint
requestAdapter()
requestAdapter(options)
```

### 参数

- `options` {{optional_inline}}

  - : 一个包含以下属性的对象：

    - `powerPreference` {{optional_inline}}

      - : 一个枚举值，可用于为用户代理提供提示，指示应从系统可用的适配器中选择哪类适配器。可用值为：

        - `undefined`（或者未指定），不提供提示。
        - `"low-power"`，为优先考虑节能而不是性能提供一个提示。如果你的应用程序在此设置下运行正常，建议使用它，因为它可以显著提高便携式设备的电池寿命。如果没有提供 options，这通常是默认值。
        - `"high-performance"`，为优先考虑性能而不是功耗提供了一个提示。我们支持你在十分必要时才使用这个值，因为该值会显著地缩短便携式设备的寿命。它也可能导致 {{domxref("GPUDevice")}} 损失增加——系统有时会切换到一个低功耗适配去去保存电力。

        该提示的主要目的是为了影响在多 GPU 系统中影响哪个 GPU。例如，一些笔记本有低功耗集成 GPU 和高性能独立 GPU。不同的因素可能会影响返回的适配器，包括电池状态、连接的显示器或可更换的 GPU。

### 备用适配器

用户代理提供的适配器可能是**备用适配器**，如果它确定这是可用的最合适选项。备用适配器通常在性能上有着显著的限制，为了换取更广泛的兼容性、更可预测的行为或者更好的隐私保护。例如，一些浏览器可能通过备用的适配器提供一个基于软件的 API 实现。并非每个系统上的备用适配器都可用。

如果你希望阻止你的应用程序运行在备用的适配器，你应该在请求 {{domxref("GPUDevice")}} 之前检查 {{domxref("GPUAdapter.isFallbackAdapter")}} 属性。

> [!NOTE]
> 该规范包含 `requestAdapter()` 的 `forceFallbackAdapter` 选项。这是一个布尔值，如果设置为 `true`，则强制用户代理返回备用适配器（如果可用）。然而，任何浏览器仍没有支持这一点。

### 返回值

一个 {{jsxref("Promise")}}，如果请求成功，会兑现一个 {{domxref("GPUAdapter")}} 对象实例。

如果未能获取合适的适配器，`requestAdapter()` 将决议为 `null`。

### 异常

无。

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
