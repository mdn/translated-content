---
title: XRFrame：trackedAnchors 属性
short-title: trackedAnchors
slug: Web/API/XRFrame/trackedAnchors
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("XRFrame")}} 接口的 **`trackedAnchor`** 只读属性返回包含当前帧中仍在跟踪的所有锚点的 {{domxref("XRAnchorSet")}} 对象。

## 值

{{domxref("XRAnchorSet")}} 对象。

## 示例

### 更新锚点

```js
for (const anchor of frame.trackedAnchors) {
  const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
