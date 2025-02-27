---
title: XRAnchor：anchorSpace 属性
slug: Web/API/XRAnchor/anchorSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("XRAnchor")}} 接口的 **`anchorSpace`** 只读属性返回将锚点相对于其他 `XRSpace` 对象进行定位的 {{domxref("XRSpace")}} 对象。它可以随后传递给 {{domxref("XRFrame.getPose()")}}。

## 值

{{domxref("XRSpace")}} 对象。

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
