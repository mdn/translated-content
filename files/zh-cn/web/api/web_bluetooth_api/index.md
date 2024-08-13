---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Web Bluetooth API 提供了与低功耗蓝牙设备进行连接和交互的能力。

> [!NOTE]
> 此 API 在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中*不可用*（未通过 {{domxref("WorkerNavigator")}} 暴露）。

## 接口

- {{DOMxRef("Bluetooth")}}
  - : 提供查询蓝牙可用性和请求访问设备的方法。
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : 提供特定的 `BluetoothRemoteGATTCharacteristic` 属性。
- {{DOMxRef("BluetoothDevice")}}
  - : 表示特定脚本执行环境中的蓝牙设备。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : 表示 GATT 特性，提供有关外设服务进一步信息。
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : 表示 GATT 描述符，提供有关特性值的进一步信息。
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : 表示远程设备上的 GATT 服务器。
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : 表示 GATT 服务器提供的一项服务，包括设备、相关服务列表和该服务的特征列表。

## 对其他接口的扩展

Bluetooth API 扩展了以下 API，添加了列出的特性。

### Navigator

- {{domxref("Navigator.bluetooth")}}
  - : 返回一个当前 document 的 {{domxref("Bluetooth")}} 对象，提供对 Web Bluetooth API 功能的访问。

## 安全注意事项

Web Bluetooth API 只能在安全的上下文中使用。

对此 API 的访问由[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)中的 {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} 指令控制。`bluetooth` 策略的默认白名单是 `self`，它允许在同源嵌套框架中使用蓝牙，但默认禁止第三方内容访问。如要启用跨源访问，需要同时在 `Permissions-Policy: bluetooth` HTTP 请求标头和所需的 `<iframe>` 中指定允许的来源。

要使用该特性，用户必须首先显式地授予权限（如果由于其他原因不允许访问，例如被权限策略阻止，则不会弹出提示）。当调用 {{domxref("Bluetooth.requestDevice()")}} 请求访问未授权的新蓝牙设备时，将显示权限提示（拥有的全局对象还必须具有 {{glossary("transient activation")}}）。你可以使用 {{domxref("Bluetooth.getDevices()")}} 来检索先前已被授予站点权限的任何设备。

[Permissions API](/zh-CN/docs/Web/API/Permissions_API) 中的 {{domxref("Permissions/query","navigator.permissions.query()")}} 方法可以与 `bluetooth` 权限一起使用，用于测试站点是否具有使用蓝牙设备的权限。权限状态会是 `granted`、`denied` 或 `prompt`（需要用户确认提示）：

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // 执行操作
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
