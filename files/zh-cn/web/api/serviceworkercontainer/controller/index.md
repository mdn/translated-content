---
title: ServiceWorkerContainer.controller
slug: Web/API/ServiceWorkerContainer/controller
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

当状态为`activated` 时， {{domxref("ServiceWorkerContainer")}} 接口的只读属性 **`controller`** 返回一个 {{domxref("ServiceWorker")}} 对象（与 {{domxref("ServiceWorkerRegistration.active")}} 返回的对象是同一个）。当页面强制刷新 (_Shift_ + refresh) 或不存在 active worder 时，该属性返回 `null` 。

## 语法

```plain
var myController = navigator.serviceWorker.controller;
```

### 值

一个{{domxref("ServiceWorker")}}对象。

## 示例

```js
if ("serviceWorker" in navigator) {
  // Do a one-off check to see if a service worker's in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "This page is currently controlled by:",
      navigator.serviceWorker.controller,
    );
  } else {
    console.log(
      "This page is not currently controlled " + "by a service worker.",
    );
  }
} else {
  console.log("Service workers are not supported.");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
