---
title: Permissions
slug: Web/API/Permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

[Permissions API](/zh-CN/docs/Web/API/Permissions_API) 的 **`Permissions`** 接口提供 Permission API 的核心功能，例如查询和撤消权限的方法。

## 实例方法

- {{domxref("Permissions.query","Permissions.query()")}}
  - : 返回给定 API 的用户权限状态。
- {{domxref("Permissions.request","Permissions.request()")}} {{Experimental_Inline}}
  - : 请求使用给定 API 的权限。目前任何浏览器都不支持此功能。
- {{domxref("Permissions.requestAll","Permissions.requestAll()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 请求使用一组给定 API 的权限。目前任何浏览器都不支持此功能。
- {{domxref("Permissions.revoke","Permissions.revoke()")}} {{Deprecated_Inline}}
  - : 撤消当前在给定 API 上设置的权限。

## 示例

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 如果拒绝授予此权限则什么也不做。
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
