---
title: BlobEvent：timecode 属性
slug: Web/API/BlobEvent/timecode
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

{{domxref("BlobEvent")}} 接口的 **`timecode`** 只读属性表示数据中的第一分块的时间戳与由该录制器产生的第一个 `BlobEvent` 中的第一个分块的时间戳之间的差。

请注意，第一个生成的 `BlobEvent` 中的 `timecode` 不需要为零。

## 值

一个 {{domxref("DOMHighResTimeStamp")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
