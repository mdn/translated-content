---
title: XRSession：renderState 属性
short-title: renderState
slug: Web/API/XRSession/renderState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("XRSession")}} 对象的 **`renderState`** 只读属性返回描述应如何渲染用户的环境的 {{DOMxRef("XRRenderState")}} 对象。所提供的信息包括渲染对象的最小和最大距离、在 `inline` 会话模式下渲染时应使用的垂直视场角，以及用于内联合成的 {{domxref("XRWebGLLayer")}}。

虽然该属性是只读的，但你可以调用 {{domxref("XRSession")}} 的方法 {{domxref("XRSession.updateRenderState", "updateRenderState()")}} 来进行更改。

## 值

描述如何渲染场景的 {{DOMxRef("XRRenderState")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
