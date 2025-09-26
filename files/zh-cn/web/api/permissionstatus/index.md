---
title: PermissionStatus
slug: Web/API/PermissionStatus
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

[Permissions API](/zh-CN/docs/Web/API/Permissions_API) 的 **`PermissionStatus`** 接口提供包含权限状态的对象以及用于监视所述权限状态更改的事件处理器。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("PermissionStatus.name")}} {{ReadOnlyInline}}
  - : 返回所请求权限的名称，与传递给 {{domxref("Permissions.query")}} 的 `name` 相同。
- {{domxref("PermissionStatus.state")}} {{ReadOnlyInline}}
  - : 返回所请求权限的状态；`'granted'`、`'denied'` 或 `'prompt'` 之一。

### 事件

- {{domxref("PermissionStatus.change_event", "change")}}
  - : 在 `PermissionStatus.state` 更改时调用。

## 示例

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`geolocation 权限状态为 ${permissionStatus.state}`);
    permissionStatus.onchange = () => {
      console.log(`geolocation 权限状态已更改为 ${permissionStatus.state}`);
    };
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
