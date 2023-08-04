---
title: Permissions
slug: Web/API/Permissions
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

[Permissions API](Permissions_API)的 Permissions 接口提供核心 PermissionAPI 功能，例如查询和撤消权限的方法。

## 方法

- {{domxref("Permissions.query","Permissions.query()")}}
  - : 返回给定 API 的用户权限状态。
- {{domxref("Permissions.request","Permissions.request()")}}
  - : 请求使用给定 API 的权限，目前此功能尚未在任何浏览器中被支持。
- {{domxref("Permissions.requestAll","Permissions.requestAll()")}}
  - : 请求使用一组给定 API 的权限。目前此功能尚未在任何浏览器中被支持。
- {{domxref("Permissions.revoke","Permissions.revoke()")}}
  - : 返回撤消当前在给定 API 上设置的权限。

## Example

```js
navigator.permissions.query({ name: "geolocation" }).then(function (result) {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 如果没有此权限则不什么也做
});
```

## Specification

{{Specifications}}

## Browser Support

{{Compat}}
