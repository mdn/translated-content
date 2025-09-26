---
title: XRAnchor
slug: Web/API/XRAnchor
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**`XRAnchor`** 接口用于创建跟踪相对于真实世界的固定姿势的锚点。借助锚点，你就可以指定世界中需要更新的姿势，以正确反映对世界不断发展的理解，从而使姿势与物理世界中的相同的位置对齐。这有助于构建一种错觉，让放置的对象看起来真实存在于用户的环境中。

## 实例属性

- {{domxref("XRAnchor.anchorSpace")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("XRSpace")}} 对象，来确定锚点相对于其他 `XRSpace` 对象的位置。

## 实例方法

- {{domxref("XRAnchor.delete()")}} {{Experimental_Inline}}
  - : 移除锚点。

## 示例

### 请求启用锚点会话

```js
navigator.xr.requestSession("immersive-ar", {
  requireFeatures: ["anchors"],
});
```

### 添加锚点

你可以使用 {{domxref("XRFrame.createAnchor()")}} 来创建锚点。

```js
frame.createAnchor(anchorPose, referenceSpace).then(
  (anchor) => {
    // 对锚点进行操作（分配将相对于此锚点的对象）。
  },
  (error) => {
    console.error(`无法创建锚点：${error}`);
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRAnchorSet")}}
- {{domxref("XRFrame.createAnchor()")}}
- {{domxref("XRFrame.trackedAnchors")}}
- {{domxref("XRHitTestResult.createAnchor()")}}
