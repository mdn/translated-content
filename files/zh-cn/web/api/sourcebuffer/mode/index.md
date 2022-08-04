---
title: SourceBuffer.mode
slug: Web/API/SourceBuffer/mode
page-type: web-api-instance-property
translation_of: Web/API/SourceBuffer/mode
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} 接口的 **`mode`** 属性用来控制媒体片段添加到 `SourceBuffer` 时的顺序是可以任意的还是有严格顺序的。

两个可用的值：

- `segments`：媒体片段的时间戳决定段的播放顺序。这些片段可以按任意顺序添加到 sourcebuffer。
- `sequence`：媒体片段添加到 sourcebuffer 的顺序决定了它们的播放顺序。片段上的时间戳为遵守此顺序自动生成。

mode 的值最初是在使用 mediasource.addsourcebuffer() 创建 sourcebuffer 时设置的。如果媒体片段上已经存在时间戳，则该值将设置为 `segments`；如果没有，则该值将设置为 `sequence`。

如果 mode 初始值为 sequence 想要改为 segments 则会引发错误，必须以 `sequence` 模式维护现有段顺序。但是，可以将值从 `segments` 模式改为 `sequence` 模式。它意味着播放顺序将被固定，并会生成新的时间戳。

当 sourceBuffer 正在处理时 mode 的值无法改变，如 {{domxref("SourceBuffer.appendBuffer","appendBuffer()")}} 或 {{domxref("SourceBuffer.remove","remove()")}} .

### 值

一个字符串。

### 异常

The following exceptions may be thrown when setting a new value for this property:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value to `segments` when the
        initial value is `sequence`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("SourceBuffer")}} object is being updated (i.e.
        its {{domxref("SourceBuffer.updating")}} property is
        currently `true`), the last media segment appended to this
        `SourceBuffer` is incomplete, or this
        `SourceBuffer` has been removed from the
        {{domxref("MediaSource")}}.

## 示例

This snippet sets the `sourceBuffer` mode to `'sequence'` if it
is currently set to `'segments'`, thus setting the play order to the sequence
in which media segments are appended.

```js
const curMode = sourceBuffer.mode;
if (curMode === 'segments') {
  sourceBuffer.mode = 'sequence';
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
