---
title: BlobEvent
slug: Web/API/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

[流媒体录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API) 的 **`BlobEvent`** 接口表示与 {{domxref("Blob")}} 关联的事件。这些 blob 通常（但不是一定）与媒体内容相关。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : 使用给定的参数创建一个 `BlobEvent`事件。

## 实例属性

_从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("BlobEvent.data")}} {{ReadOnlyInline}}
  - : 表示与事件关联的数据的 {{domxref("Blob")}}。由于特定的 {{domxref("Blob")}} 上发生了一些事情，导致 {{domxref("EventTarget")}} 上触发了事件。
- {{domxref("BlobEvent.timecode")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}}，表示数据中的第一个分块的时间戳与由该录制器产生的第一个 Blob 事件中的第一个分块的时间戳之间的差。请注意，第一个生成的 Blob 事件中的 timecode 不需要为零。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("Event")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 父接口 {{domxref("Event")}}。
- [流媒体录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)：每次媒体分块就绪时发送 `BlobEvent` 对象。
- [使用流媒体录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
