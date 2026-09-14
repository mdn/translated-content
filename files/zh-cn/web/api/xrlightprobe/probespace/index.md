---
title: XRLightProbe：probeSpace 属性
short-title: probeSpace
slug: Web/API/XRLightProbe/probeSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("XRLightProbe")}} 接口的 **`probeSpace`** 只读属性返回用于跟踪光照估算所相对的位置和方向的 {{domxref("XRSpace")}}。

## 值

{{domxref("XRSpace")}} 对象。

## 示例

`probeSpace` 属性返回光照估算所相对的空间位置和方向。当用户移动时，它可能会随时间更新。使用 {{domxref("XRFrame.getPose()")}} 方法可在每一帧中获取当前的光照状态。

```js
const lightProbe = await xrSession.requestLightProbe();
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRSpace()")}}
- {{domxref("XRFrame.getPose()")}}
