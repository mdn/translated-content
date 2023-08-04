---
title: SourceBuffer.appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} 的 **`appendBuffer()`** 方法将 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 中的媒体片段数据添加到 `SourceBuffer` 对象中。

## 语法

```js-nolint
appendBuffer(source)
```

### 参数

- `source`
  - : 一个 {{domxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或一个 {{jsxref("DataView")}} 对象，其中包含了你想要添加到 `SourceBuffer` 的媒体片段数据。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

无。

## 示例

待定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
