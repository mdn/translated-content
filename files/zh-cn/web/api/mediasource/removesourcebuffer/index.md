---
title: MediaSource.removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 接口的 **`removeSourceBuffer()`** 方法从与 `MediaSource` 对象关联的 {{domxref("SourceBuffers")}} 列表中移除给定的 {{domxref("SourceBuffer")}}。

## 语法

```js-nolint
removeSourceBuffer(sourceBuffer)
```

### 参数

- `sourceBuffer`
  - : 将被移除的 {{domxref("SourceBuffer")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NotFoundError` {{domxref("DOMException")}}
  - : 如果提供的 sourceBuffer 在 {{domxref("MediaSource.sourceBuffers")}} 中不存在，则抛出异常。

## 示例

```js
for (let i = 0; i < 10; i++) {
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
}

mediaSource.removeSourceBuffer(mediaSource.sourceBuffers[0]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
