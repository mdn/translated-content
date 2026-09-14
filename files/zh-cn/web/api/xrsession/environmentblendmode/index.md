---
title: XRSession：environmentBlendMode 属性
short-title: environmentBlendMode
slug: Web/API/XRSession/environmentBlendMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("XRSession")}} 接口的只读属性 **`environmentBlendMode`** 用于表示计算机生成的图像是否以及在多大程度上叠加在真实世界之上。

此属性用于区分完全沉浸式的 VR 会话和在真实世界透传图像之上（可能部分透明地）渲染的 AR 会话。

## 值

定义虚拟渲染内容是否以及如何叠加在真实世界图像之上的字符串。

可能的取值如下：

- `opaque`
  - : 渲染的图像在绘制时不允任何透传影像。这主要由完全沉浸式 VR 头戴设备使用，这些设备会完全遮挡周围环境，用户根本看不到任何真实世界的内容。由于渲染图像的 alpha 值均被视为 1.0（完全不透明），因此 {{domxref("XRSession")}} 的 {{domxref("XRSession.renderState", "renderState")}} 属性中 `baseLayer` 字段指定的 alpha 值将被忽略。
- `additive`
  - : 主要由具有透明镜片的 AR 设备使用，这些设备直接允许现实世界透传至用户眼睛。`additive` 混合模式设计用于设备无法控制背景及其亮度的情况，因为背景并非通过数字方式控制。设备唯一能做的就是为图像增加更多光线；它无法使图像变暗。因此，黑色被渲染为完全透明，且没有任何方法能使像素完全不透明。与 `opaque` 设置一样，指定的 alpha 值将被忽略并视为 1.0。
- `alpha-blend`
  - : 由使用摄像头捕捉真实世界并通过屏幕（或多个屏幕）向用户数字化显示内容的头戴设备或护目镜使用，此模式提供了一种使用 VR 设备创建 AR 体验的方式。Alpha 混合也可用于提供 AR 模式的非可穿戴设备，例如使用摄像头捕捉真实世界以用于 AR 应用的手机或平板电脑。由于真实世界是数字化呈现的，因此每个像素的亮度均可被控制（无论是现实还是渲染的 XR 图像），用户的环境可与虚拟环境混合，每个像素的颜色和亮度均可精确控制。在此模式下，`XRSession` 的 `renderState.baseLayer` 属性在合成过程中提供人工图层的相对权重。alpha 值为 1.0 的像素将被渲染为完全不透明，完全遮挡真实世界；而 alpha 值为 0.0 的像素则完全透明，允许周围环境透传。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
