---
title: SourceBuffer.remove()
slug: Web/API/SourceBuffer/remove
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} 接口的 **`remove()`** 方法从 `SourceBuffer` 中移除指定时间范围的媒体片段。该方法仅能在 {{domxref("SourceBuffer.updating")}} 为 `false` 时调用。如果 `SourceBuffer.updating` 不等于 `false`，请调用 {{domxref("SourceBuffer.abort()")}}。

## 语法

```js-nolint
remove(start, end)
```

### 参数

- `start`
  - : 表示时间范围开始的双精度浮点数，以秒为单位。
- `end`
  - : 表示时间范围结束的双精度浮点数，以秒为单位。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 如果 {{domxref("MediaSource.duration")}} 属性为 `NaN`、`start` 参数是负数或者大于 {{domxref("MediaSource.duration")}}，或者 `end` 参数小于或等于 `start` 或等于 `NaN`，则抛出异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("SourceBuffer.updating")}} 属性等于 `true`，或者这个 `SourceBuffer` 已经从 {{domxref("MediaSource")}} 移除，则抛出异常。

## 示例

待定

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
