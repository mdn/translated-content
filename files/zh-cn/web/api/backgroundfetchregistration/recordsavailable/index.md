---
title: BackgroundFetchRegistration：recordsAvailable 属性
short-title: recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchRecord")}} 接口的只读属性 **`recordsAvailable`** 在存在可访问的请求和响应时返回 `true`。如果此属性返回 `false`，你将无法使用 {{domxref("BackgroundFetchRegistration.match()","match()")}} 和 {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}}。

## 值

{{jsxref("boolean")}}。

## 示例

访问该属性以获取用于指示是否存在记录的 `true` 或 `false` 布尔值，并将其打印到控制台中。

```js
console.log(bgFetch.recordsAvailable);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
