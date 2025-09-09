---
title: MediaStream：MediaStream() 构造函数
slug: Web/API/MediaStream/MediaStream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`MediaStream()`** 构造函数返回新建的 {{domxref("MediaStream")}} 实例，作为媒体轨道（每个媒体轨道由一个 {{domxref("MediaStreamTrack")}} 对象表示）的集合。

如果给定任意参数，则指定的轨道会被添加到新的流中。否则，该流中不包含任何轨道。

## 语法

```js-nolint
new MediaStream()
new MediaStream(stream)
new MediaStream(tracks)
```

### 参数

- `stream`
  - : 另一个 {{domxref("MediaStream")}} 对象，其轨道会被自动添加到新建的流中。且这些轨道不会从原流中移除，即变成了两条流所共享的。
- `tracks`
  - : {{domxref("MediaStreamTrack")}} 对象的{{jsxref("Array", "数组", , 1)}}，其中的每一个都表示要添加到流中的轨道。

### 返回值

新建的 {{domxref("MediaStream")}} 对象，为空，或者包含提供的轨道（如果有的话）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaStream")}}
