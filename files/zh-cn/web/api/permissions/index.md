---
title: Permissions
slug: Web/API/Permissions
l10n:
  sourceCommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

[Permissions API](/zh-CN/docs/Web/API/Permissions_API) 的 **`Permissions`** 接口提供 Permission API 的核心功能，例如查询和撤消权限的方法。

## 实例方法

- {{domxref("Permissions.query","Permissions.query()")}}
  - : 返回给定 API 的用户权限状态。
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
