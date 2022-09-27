---
title: Bluetooth
slug: Web/API/Bluetooth
---

{{ apiref("Web Bluetooth API") }} {{Non-standard_header()}}

[Web Bluetooth API](/Web/API/Web_Bluetooth_API) 的**`Bluetooth`**`接口`返回指代{{domxref("BluetoothDevice")}}带有指定选项的对象的{{jsxref("Promise")}}。

## 接口

```
interface Bluetooth {
  Promise<BluetoothDevice> requestDevice(RequestDeviceOptions options);
};
Bluetooth implements EventTarget;
Bluetooth implements BluetoothDeviceEventHandlers;
Bluetooth implements CharacteristicEventHandlers;
Bluetooth implements ServiceEventHandlers;
```

## 特性

无

## 方法

- {{domxref("Bluetooth.requestDevice()")}}
  - : 返回一个包含指定选项的{{domxref("BluetoothDevice")}}对象的{{jsxref("Promise")}}。

## 详细说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}
