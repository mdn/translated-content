---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: e676701495a168168e0868311e4c4e7274fb6ed4
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

[Web 蓝牙 API](/zh-CN/docs/Web/API/Web_Bluetooth_API) 的 **`Bluetooth`** 接口提供了查询蓝牙可用性和请求访问这些设备的方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("EventTarget")}} 继承属性。_

## 实例方法

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其会兑现一个指示用户代理是否支持蓝牙的布尔值。一些用户代理允许用户配置一个指定该方法返回值的选项。
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其会兑现一个包含当前来源允许访问的 {{domxref("BluetoothDevice")}} 的数组。权限是通过先前调用 {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} 获得的。
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其会兑现匹配指定选项的 {{domxref("BluetoothDevice")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
