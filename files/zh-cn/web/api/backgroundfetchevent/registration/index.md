---
title: BackgroundFetchEvent：registration 属性
short-title: registration
slug: Web/API/BackgroundFetchEvent/registration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

{{domxref("BackgroundFetchEvent")}} 接口的只读属性 **`registration`** 返回一个 {{domxref("BackgroundFetchRegistration")}} 对象。

## 值

{{domxref("BackgroundFetchRegistration")}} 对象。

## 示例

在此示例中，如果用户单击显示下载进度的用户界面，则会触发 {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} 事件。通过调用 `event.registration` 返回当前的 {{domxref("BackgroundFetchRegistration")}}。

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
