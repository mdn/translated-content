---
title: XRDepthInformation：normDepthBufferFromNormView 属性
short-title: normDepthBufferFromNormView
slug: Web/API/XRDepthInformation/normDepthBufferFromNormView
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("XRDepthInformation")}} 接口的 **`normDepthBufferFromNormView`** *只读属性*返回在索引深度缓冲区时需要应用的 3D 几何变换。

## 值

在索引深度缓冲区时需要应用的 {{domxref("XRRigidTransform")}}。该矩阵所表示的变换将坐标系从归一化视图坐标转换为归一化深度缓冲区坐标，然后可通过深度缓冲区的 `width` 和 `height` 缩放以获得绝对深度缓冲区坐标。

## 示例

使用 {{domxref("XRFrame.getDepthInformation()")}}（CPU）或 {{domxref("XRWebGLBinding.getDepthInformation()")}}（WebGL）获取深度信息。返回的对象将包含深度缓冲区的 `normDepthBufferFromNormView`，可用于进一步计算。

```js
const normDepthFromNormViewMatrix =
  depthData.normDepthBufferFromNormView.matrix;
const normViewFromNormDepth =
  depthData.normDepthBufferFromNormView.inverse.matrix;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
