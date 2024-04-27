---
title: PermissionStatus：name 属性
slug: Web/API/PermissionStatus/name
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

{{domxref("PermissionStatus")}} 接口的 **`name`** 只读属性返回所请求权限的名称。

## 值

一个与传递给 {{domxref("Permissions.query", "navigator.permissions.query()")}} 方法的 `name` 参数相同的只读值。

## 示例

```js
function stateChangeListener() {
  console.log(`${this.name} 权限状态已更改为 ${this.state}`);
}
function queryAndTrackPermission(permissionName) {
  navigator.permissions
    .query({ name: permissionName })
    .then((permissionStatus) => {
      console.log(`${permissionName} 权限状态为 ${permissionStatus.state}`);
      permissionStatus.onchange = stateChangeListener;
    });
}
queryAndTrackPermission("geolocation");
queryAndTrackPermission("midi");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
