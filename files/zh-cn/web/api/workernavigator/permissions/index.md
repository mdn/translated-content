---
title: WorkerNavigator：permissions 属性
slug: Web/API/WorkerNavigator/permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}

{{domxref("WorkerNavigator")}} 接口的 **`permissions`** 只读属性返回一个 {{domxref("Permissions")}} 对象，可以用于查询或更新 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 涵盖的 API 权限状态。

## 值

一个 {{domxref("Permissions")}} 对象。

## 示例

```js
navigator.permissions.query({ name: "notifications" }).then((result) => {
  if (result.state === "granted") {
    showNotification();
  } else if (result.state === "prompt") {
    requestNotificationPermission();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Permissions API](/zh-CN/docs/Web/API/Permissions_API)
- [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)
