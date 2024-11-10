---
title: ProgressEvent.total
slug: Web/API/ProgressEvent/total
---

{{APIRef("XMLHttpRequest API")}}

**`ProgressEvent.total`** 只读属性是一个无符号 64 位整数值，表明正在处理或者传输的数据的总大小。在 HTTP 传输的情况下，这是消息体的大小（`Content-Length`）并且不包含标头和其他的开销。

如果事件的 {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} 属性是 `false`，这个值是没有意义的并且应该被忽略。

## 值

一个整数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("ProgressEvent")}} 接口。
