---
title: Navigator：permissions 属性
slug: Web/API/Navigator/permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}

{{domxref("Navigator")}} 接口的 **`permissions`** 只读属性返回一个 {{domxref("Permissions")}} 对象，可以用于查询或更新 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 涵盖的 API 权限状态。

## 值

一个 {{domxref("Permissions")}} 对象。

## 示例

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // 如果权限被拒绝，不要做任何操作。
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Permissions API](/zh-CN/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
