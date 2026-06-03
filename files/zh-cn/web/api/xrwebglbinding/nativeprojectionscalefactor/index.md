---
title: XRWebGLBinding：nativeProjectionScaleFactor 属性
short-title: nativeProjectionScaleFactor
slug: Web/API/XRWebGLBinding/nativeProjectionScaleFactor
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

{{domxref("XRWebGLBinding")}} 接口的 **`nativeProjectionScaleFactor`** 只读属性返回一个缩放因子。当投影层分辨率乘以该缩放因子后，即可得到 WebXR 设备帧缓冲区的原生分辨率。

详细细节请参见 {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor_static", "XRWebGLLayer.getNativeFramebufferScaleFactor()")}}。

## 值

表示设备原生帧缓冲区大小的缩放倍数的浮点数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor_static", "XRWebGLLayer.getNativeFramebufferScaleFactor()")}}
