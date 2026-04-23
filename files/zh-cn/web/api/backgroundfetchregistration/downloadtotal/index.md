---
title: BackgroundFetchRegistration：downloadTotal 属性
short-title: downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`downloadTotal`** 返回此下载的总大小（以字节为单位）。该值在注册后台获取时设置，如果未设置则为 `0`。

## 值

{{jsxref("number")}}。

## 示例

访问该属性以获取该下载的总大小（以字节为单位），并将其打印在控制台中。

```js
console.log(bgFetch.downloadTotal);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
