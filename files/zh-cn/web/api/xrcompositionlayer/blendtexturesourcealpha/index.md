---
title: XRCompositionLayer：blendTextureSourceAlpha 属性
short-title: blendTextureSourceAlpha
slug: Web/API/XRCompositionLayer/blendTextureSourceAlpha
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

{{domxref("XRCompositionLayer")}} 接口的 **`blendTextureSourceAlpha`** 属性是用于启用该层纹理的 {{Glossary("Alpha", "alpha 通道")}}的布尔值。

## 值

布尔值。`true` 表示启用 alpha 通道，`false` 表示禁用 alpha 通道。

## 示例

### 设置图层的纹理 alpha 通道

以下代码片段在不透明和透明之间切换图层。

```js
myLayer.blendTextureSourceAlpha = !myLayer.blendTextureSourceAlpha;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Glossary("Alpha", "Alpha 通道")}}
