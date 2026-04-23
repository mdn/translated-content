---
title: BackgroundFetchRegistration：downloaded 属性
short-title: downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`downloaded`** 返回已下载的字节数，初始值为 `0`。

如果此属性的值发生变化，则会在关联的 {{domxref("BackgroundFetchRegistration")}} 对象上触发 [progress](/zh-CN/docs/Web/API/BackgroundFetchRegistration/progress_event) 事件。

## 值

{{jsxref("number")}}。

## 示例

访问该属性以获取已下载的字节数，并将其打印在控制台中。

```js
console.log(bgFetch.downloaded);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
