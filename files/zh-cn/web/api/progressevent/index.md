---
title: ProgressEvent
slug: Web/API/ProgressEvent
---

{{APIRef("DOM Events")}}

**`ProgressEvent`** 接口是测量如 HTTP 请求（一个`XMLHttpRequest`，或者一个 {{HTMLElement("img")}}，{{HTMLElement("audio")}}，{{HTMLElement("video")}}，{{HTMLElement("style")}} 或 {{HTMLElement("link")}} 等底层资源的加载）等底层流程进度的事件。

{{InheritanceDiagram}}

## 构造方法

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : 用给定的参数创建一个 `ProgressEvent` 事件。

## 属性

_同时继承它的父元素 {{domxref("Event")}} 的属性。_

- {{domxref("ProgressEvent.lengthComputable")}} {{readonlyInline}}
  - : 是一个 {{domxref("Boolean")}} 标志，表示底层流程将需要完成的总工作量和已经完成的工作量是否可以计算。换句话说，它告诉我们进度是否可以被测量。
- {{domxref("ProgressEvent.loaded")}} {{readonlyInline}}
  - : 是一个 `unsigned long long` 类型数据，表示底层流程已经执行的工作总量。可以用这个属性和 `ProgressEvent.total` 计算工作完成比例。当使用 HTTP 下载资源，它只表示内容本身的部分，不包括首部和其他开销。
- {{domxref("ProgressEvent.total")}} {{readonlyInline}}
  - : 是一个 `unsigned long long` 类型数据，表示正在执行的底层流程的工作总量。当使用 HTTP 下载资源，它只表示内容本身的部分，不包括首部和其他开销。

## 方法

_同时继承它的父元素 {{domxref("Event")}} 的方法。_

- {{domxref("ProgressEvent.initProgressEvent()")}} {{deprecated_inline}}{{non-Standard_inline}}
  - : 使用被弃用的 {{domxref("Document.createEvent()", "Document.createEvent(\"ProgressEvent\")")}} 方法，来初始化一个已经创建好的 `ProgressEvent`。

## 示例

下面的示例为一个新建的 {{domxref("XMLHTTPRequest")}} 添加了一个 `ProgressEvent`，并使用它来显示请求状态。

```js
var progressBar = document.getElementById("p"),
  client = new XMLHttpRequest();
client.open("GET", "magical-unicorns");
client.onprogress = function (pe) {
  if (pe.lengthComputable) {
    progressBar.max = pe.total;
    progressBar.value = pe.loaded;
  }
};
client.onloadend = function (pe) {
  progressBar.value = pe.loaded;
};
client.send();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{domxref("Event")}} base interface.
