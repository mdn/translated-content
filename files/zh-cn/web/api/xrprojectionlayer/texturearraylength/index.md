---
title: XRProjectionLayer：textureArrayLength 属性
short-title: textureArrayLength
slug: Web/API/XRProjectionLayer/textureArrayLength
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

{{domxref("XRProjectionLayer")}} 接口的 **`textureArrayLength`** 只读属性返回在将 `texture-array` 用作 `textureType` 时，数组纹理的图层数。

投影图层的数组纹理图层计数由用户代理或设备决定。它会在只能在帧循环内访问的 {{domxref("XRSubImage")}} 中报告。如果你想自行管理深度缓冲区，并且不想在图层创建后的第一帧才确定这些缓冲区所需的尺寸，那么 `textureArrayLength` 属性允许你在帧循环之外访问数组纹理的图层数。这些缓冲区的分配可以在图层创建后直接进行。

## 值

表示在使用 `texture-array` 作为 `textureType` 时颜色纹理的图层数量的数字。否则为 `1`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRSubImage")}}
