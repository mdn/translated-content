---
title: MediaStreamTrack：label 属性
short-title: label
slug: Web/API/MediaStreamTrack/label
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Media Capture and Streams")}}

`MediaStreamTrack` 接口的 **`label`** 只读属性返回包含由{{glossary("user agent", "用户代理")}}分配，并用于标识轨道源的标签的字符串（如 `"internal microphone"`）。

该字符串可以为空，并且在没有连接任何源时为空。在轨道与其源分离时，标签并不会更改。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
