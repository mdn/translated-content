---
title: MediaStream：addTrack() 方法
short-title: addTrack()
slug: Web/API/MediaStream/addTrack
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStream")}} 接口的 **`addTrack()`** 方法用于向流中添加一个新的轨道。该轨道通过类型为 {{domxref("MediaStreamTrack")}} 的参数指定。

> [!NOTE]
> 如果指定的轨道已经存在于该流的轨道集合中，该方法不会产生任何效果。

## 语法

```js-nolint
addTrack(track)
```

### 参数

- `track`
  - : 一个要添加到流中的 {{domxref("MediaStreamTrack")}}。

### 返回值

无（{{jsxref("undefined")}})）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaStream")}}：该方法所属的接口。
