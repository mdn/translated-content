---
title: BackgroundFetchRegistration：uploadTotal 属性
short-title: uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`uploadTotal`** 返回要发送到服务器的总字节数。

## 值

{{jsxref("number")}}。

## 示例

访问该属性以获取此次上传的总字节数，并将其打印到控制台中。

```js
console.log(bgFetch.uploadTotal);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
