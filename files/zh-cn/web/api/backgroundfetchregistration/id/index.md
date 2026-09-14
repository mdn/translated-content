---
title: BackgroundFetchRegistration：id 属性
short-title: id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`id`** 返回后台获取操作的 `ID` 的副本。

## 值

字符串。

## 示例

访问该属性以获取注册时设置的标识符，并将其打印在控制台中。在本例中为 `"my-fetch"`。

```js
console.log(bgFetch.id); // “my-fetch”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
