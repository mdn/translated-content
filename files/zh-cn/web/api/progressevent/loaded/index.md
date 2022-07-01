---
title: ProgressEvent.loaded
slug: Web/API/ProgressEvent/loaded
page-type: web-api-instance-property
tags:
  - API
  - Progress Event
  - ProgressEvent
  - Property
translation_of: Web/api/ProgressEvent/loaded
---
{{APIRef("XMLHttpRequest")}}

**`ProgressEvent.loaded`** 只读属性是一个整数，表示表示底层的进程已经执行的工作量。可以使用该属性和 `ProgressEvent.total` 计算完成工作的比率。当使用一个 HTTP 下载资源，这个仅表示内容本身的一部分，不包含头和其他开销。

## 值

一个数值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("ProgressEvent")}} 接口。
