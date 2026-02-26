---
title: HTMLMediaElement：mediaKeys 属性
short-title: mediaKeys
slug: Web/API/HTMLMediaElement/mediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

**`HTMLMediaElement.mediaKeys`** 只读属性返回包含一组密钥的 {{domxref("MediaKeys")}} 对象，元素可在播放期间使用这些密钥对媒体数据进行解密。

## 值

{{domxref("MediaKeys")}} 对象，或者当没有可用密钥时为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaKeys")}}
