---
title: PermissionStatus：change 事件
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

{{domxref("PermissionStatus")}} 接口的 **`change`** 事件在 {{domxref("PermissionStatus.state")}} 属性发生更改时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

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
