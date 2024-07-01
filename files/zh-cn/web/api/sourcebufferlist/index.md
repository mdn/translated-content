---
title: SourceBufferList
slug: Web/API/SourceBufferList
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`SourceBufferList`** 接口表示多个 {{domxref("SourceBuffer")}} 对象的简单容器列表。

使用 {{domxref("MediaSource.sourceBuffers")}} 属性可以检索附加到特定 `MediaSource` 的 `SourceBuffer` 的源缓冲列表。

使用[数组操作符](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) `[]` 可以访问到各个源缓冲区。

{{InheritanceDiagram}}

## 属性

- {{domxref("SourceBufferList.length")}} {{readonlyInline}}
  - : 返回列表中 {{domxref("SourceBuffer")}} 对象的数量。

## 方法

_从它的父接口 {{domxref("EventTarget")}} 继承方法。_

## 事件

- {{domxref("SourceBufferList.addsourcebuffer_event", "addsourcebuffer")}}
  - : 当一个 {{domxref("SourceBuffer")}} 增加到列表时触发。
- {{domxref("SourceBufferList.removesourcebuffer_event", "removesourcebuffer")}}
  - : 当一个 {{domxref("SourceBuffer")}} 从列表移除时触发。

## 示例

这个示例展示了如何访问连接到一个已经在播放的 {{domxref("HTMLVideoElement")}} 其内部的 {{domxref("MediaSource")}} 的活动源缓冲区。

```js
// Video is an already playing video using a MediaSource srcObject
const video = document.querySelector("video");
const mediaSource = video.srcObject;
const sourceBufferList = mediaSource.activeSourceBuffers;
for (const sourceBuffer of sourceBufferList) {
  // Do something with each SourceBuffer, such as call abort()
  sourceBuffer.abort();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
