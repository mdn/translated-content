---
title: Navigator：xr 属性
slug: Web/API/Navigator/xr
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Navigator")}} 接口的 **`xr`** 只读属性返回一个 {{domxref("XRSystem")}} 对象，该对象可用于访问 [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API)。

## 值

{{domxref("XRSystem")}} 对象用于在当前上下文中与 [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API) 进行交互。这可用于向用户呈现增强现实或者虚拟现实图像。

## 示例

每个 {{domxref("Window")}} 对象都有自己的 {{domxref("Navigator")}} 实例，可以通过 {{domxref("Window.navigator","window.navigator")}} 或 {{domxref("Window.navigator", "navigator")}} 访问。同时，还会创建一个新的 {{domxref("XRSystem")}} 实例，并将其作为 {{domxref("Navigator.xr", "navigator.xr")}} 附加到 `navigator` 实例上。如果存在 `xr` 属性，你可以使用它来访问 [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API)。

你可以使用以下代码判断 WebXR 是否可用：

```js
if ("xr" in window.navigator) {
  /* WebXR 可用！*/
} else {
  /* 不支持 WebXR */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGL API](/zh-CN/docs/Web/API/WebGL_API)：用于 Web 的 2D 和 3D 加速图形
- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)：2D 图形 API
