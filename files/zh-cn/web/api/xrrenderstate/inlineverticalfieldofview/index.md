---
title: XRRenderState：inlineVerticalFieldOfView 属性
short-title: inlineVerticalFieldOfView
slug: Web/API/XRRenderState/inlineVerticalFieldOfView
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("XRRenderState")}} 接口的 **`inlineVerticalFieldOfView`** 只读属性返回 `"inline"` 会话的默认垂直视场，对于所有沉浸式会话则返回 `null`。

## 值

对于 `"inline"` 会话，为表示默认视场的 {{JSxRef("Number")}}；对于沉浸式会话，则为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("XRSystem.requestSession", "navigator.xr.requestSession()")}}
- {{DOMxRef("XRSystem.isSessionSupported", "navigator.xr.isSessionSupported()")}}
