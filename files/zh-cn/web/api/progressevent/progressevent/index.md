---
title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM Events
  - ProgressEvent
translation_of: Web/api/ProgressEvent/ProgressEvent
---
{{APIRef("XMLHttpRequest")}}

**`ProgressEvent()`** 构造函数返回一个新的 {{domxref("ProgressEvent")}} 对象，表示当前一个漫长过程的进度。

## 语法

```js
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### 参数

- `type`
  - : 带有事件名称的字符串。它是区分大小写的，并且浏览器将其设置为 `loadstart`、`progress`、`abort`、`error`、`load`、`timeout` 或者 `loadend`。
- `options` {{optional_inline}}
  - : 一个对象，除了 {{domxref("Event/Event", "Event()")}} 中定义的属性，他还具有以下属性:
    - `lengthComputable` {{optional_inline}}
      - : 一个布尔值，表示底层的进程将要完成的总工作量和已经完成的工作流是否是可计算的。换句话说，它说明进度是否可衡量。它的默认值是 `false`。
    - `loaded` {{optional_inline}}
      - : 一个数值，表示底层的进程已经执行的工作量。可以使用该属性和 `ProgressEvent.total` 计算完成工作的比率。当使用一个 HTTP 下载资源，这个仅表示内容本身的一部分，不包含头和其他开销。它默认为 `0`。
    - `total` {{optional_inline}}
      - : 一个数值，表示底层的进程正在执行的工作量的总量。当使用一个 HTTP 下载资源，这个仅表示内容本身的一部分，不包含头和其他开销。它默认为 `0`。

### 返回值

一个新的 {{domxref("ProgressEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("ProgressEvent")}} 接口。
