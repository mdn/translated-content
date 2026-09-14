---
title: BackgroundFetchRecord：request 属性
short-title: request
slug: Web/API/BackgroundFetchRecord/request
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`request`** 返回要获取的资源的详细信息。

## 值

{{domxref("Request")}}。

## 示例

以下示例使用 {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} 返回单个 `BackgroundFetchRecord`，并将其记录到控制台。

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("未找到记录");
    return;
  }

  console.log(`这是请求`, record.request);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
