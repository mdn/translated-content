---
title: Bluetooth：getDevices() 方法
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("Bluetooth")}} 接口的 **`getDevices()`** 方法返回包含此来源被允许访问的蓝牙设备（包括那些超出范围和已关闭电源的设备）的数组。

## 语法

```js-nolint
getDevices()
```

### 参数

无。

## 返回值

一个 {{JSxRef("Promise")}}，其会兑现为一个 {{DOMxRef("BluetoothDevice")}} 对象数组。

## 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果由于[安全问题](/zh-CN/docs/Web/API/Web_Bluetooth_API#security_considerations)，例如在当前文档的访问被[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)指令 {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} 阻止时调用，则会抛出此异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
