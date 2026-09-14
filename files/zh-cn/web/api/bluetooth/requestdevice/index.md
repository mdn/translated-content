---
title: Bluetooth.requestDevice()
slug: Web/API/Bluetooth/requestDevice
---

{{APIRef()}}{{SeeCompatTable}}

{{domxref("Bluetooth")}}接口的 **`Bluetooth.requestDevice()`** 方法返回一个带有对应 options 的{{domxref("BluetoothDevice")}}对象的{{jsxref("Promise")}}对象。如果没有蓝牙设备选择界面，则此方法返回与条件匹配的第一个设备。

## 语法

```plain
Bluetooth.requestDevice(options).then(function(bluetoothDevice) { ... })
```

### 返回值

带有{{domxref("BluetoothDevice")}} 对象的{{jsxref("Promise")}} 对象。

### 参数

- options
  - : 设置设备请求选项的对象。可用的选项是：
    - `filters[]`: 一个 BluetoothScanFilters 数组。此过滤器由一个 BluetoothServiceUUID 数组，一个名称参数和一个 namePrefix 参数组成。
    - `optionalServices[]`: 一个 BluetoothServiceUUID 数组。
    - `acceptAllDevices`: boolean 表示请求脚本可以接受所有蓝牙设备。默认值为 false。

## 示例

```plain
//扫描选项匹配任何设备广播：

//. 标准心率服务。

//. 两个 16 位服务 ID 0x1802 和 0x1803。

//. 专有的 128 位 UUID 服务 c48e6067-5295-48d3-8d5c-0395f61792b1。

//. 名称为“设备名”的设备。

//. 名称以“前缀”开头的设备。

//

//如果设备包含电池服务，

//即使设备不通告该服务，也可以访问电池服务。

let options = {
  filters: [
    {services: ['heart_rate']},
    {services: [0x1802, 0x1803]},
    {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
    {name: '设备名'},
    {namePrefix: '前缀'}
  ],
  optionalServices: ['battery_service']
}

navigator.bluetooth.requestDevice(options).then(function(device) {
  console.log('名称：' + device.name);
  // 在此处实现设备调用
})
.catch(function(error) {
  console.log("出现错误： " + error);
});
```

查看[详细示例](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
