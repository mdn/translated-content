---
title: SourceBuffer.mode
slug: Web/API/SourceBuffer/mode
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} 接口的 **`mode`** 属性用来控制媒体片段添加到 `SourceBuffer` 时的顺序是可以任意的还是有严格顺序的。

两个可用的值：

- `segments`：媒体片段的时间戳决定段的播放顺序。这些片段可以按任意顺序添加到 `SourceBuffer`。
- `sequence`：媒体片段添加到 `SourceBuffer` 的顺序决定了它们的播放顺序。片段上的时间戳为遵守此顺序自动生成。

mode 的初始值是在使用 `mediasource.addsourcebuffer()` 创建 `SourceBuffer` 时设置的。如果媒体片段上已经存在时间戳，则该值将设置为 `segments`；如果没有，则该值将设置为 `sequence`。

在 mode 初始值为 `sequence` 时，如果尝试将 mode 属性值设置为 `segments`，则会抛出异常。必须以 `sequence` 模式维护现有片段顺序。但是，可以将值从 `segments` 模式改为 `sequence` 模式。它意味着播放顺序将被固定，并会生成新的时间戳。

当 `sourceBuffer` 正在处理 {{domxref("SourceBuffer.appendBuffer","appendBuffer()")}} 或 {{domxref("SourceBuffer.remove","remove()")}}，无法更改此属性。

### 值

一个字符串。

### 异常

为该属性设置新值时可能会引发以下异常：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当初始值为 `sequence` 时，如果尝试将 mode 的值设置为 `segments`，则抛出异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("SourceBuffer")}} 对象正在更新（即它的 {{domxref("SourceBuffer.updating")}} 属性当前为 `true`）、附加到此 `SourceBuffer` 的最后一个媒体片段是不完全的或者此 `SourceBuffer` 已从 `MediaSource` 中删除，则抛出异常。

## 示例

在此片段中，如果当前 `sourceBuffer` mode 的值为 `'segments'`，则将其更改为 `'sequence'`，从而将播放顺序更改为媒体片段的附加顺序。

```js
const curMode = sourceBuffer.mode;
if (curMode === "segments") {
  sourceBuffer.mode = "sequence";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
