---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} 接口的 **`timestampOffset`** 属性控制应用于随后附加到 SourceBuffer 的媒体片段内的时间戳偏移量。

`timestampOffset` 的初始值是 0。

## 值

一个双精度浮点数，偏移量以秒为单位。

### 异常

为该属性设置新值时可能会引发以下异常：

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("SourceBuffer")}} 对象正在更新（即它的 {{domxref("SourceBuffer.updating")}} 属性当前为 `true`）、当前正在解析 `SourceBuffer` 内的媒体片段或者此 `SourceBuffer` 已经从 {{domxref("MediaSource")}} 移除。

## 示例

待定

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
