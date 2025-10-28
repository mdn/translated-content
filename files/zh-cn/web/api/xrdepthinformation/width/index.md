---
title: XRDepthInformation：width 属性
short-title: width
slug: Web/API/XRDepthInformation/width
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("XRDepthInformation")}} 接口的 **`width`** 只读属性包含深度缓冲区的宽度（列数）。

## 值

无符号长整型。

## 示例

使用 {{domxref("XRFrame.getDepthInformation()")}}（CPU）或 {{domxref("XRWebGLBinding.getDepthInformation()")}}（WebGL）获取深度信息。返回的对象将包含深度缓冲区的 `width`，可用于进一步的计算。

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
