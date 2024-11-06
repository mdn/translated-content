---
title: MediaStream()
slug: Web/API/MediaStream/MediaStream
---

{{APIRef("Media Capture and Streams")}}

构造函数**`MediaStream()`** 返回新建的 {{domxref("MediaStream")}} 实例，该实例作为媒体流的内容的集合载体，其可能包含多个媒体数据轨，每个数据轨则由一个 {{domxref("MediaStreamTrack")}} 对象表示。如果给出相应参数，在指定的数据轨则被添加到新的流中。否则，该流中不包含任何数据轨。

## 语法

```js
newStream = new MediaStream();
newStream = new MediaStream(stream);
newStream = new MediaStream(tracks[]);
```

### 参数

- `stream`
  - : 这是另一个 {{domxref("MediaStream")}} 对象，其数据轨会被自动添加到新建的流中。且这些数据轨不会从原流中移除，即变成了两条流共享的数据。
- `tracks`
  - : 这是 {{domxref("MediaStreamTrack")}} 对象的 {{jsxref("Array")}} 类型的成员，代表了每一个添加到流中的数据轨。

### 返回值

新建的 {{domxref("MediaStream")}} 对象，会包含创建时已给的数据轨内容，若没有给定任何数据轨则内容为空。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaStream")}}
