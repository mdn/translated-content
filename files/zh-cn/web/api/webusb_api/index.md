---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

**WebUSB API** 提供了一种将非标准通用串行总线（USB）兼容设备服务暴露到 web 的方法，使 USB 更安全，更易于使用。

## 概念和用法

USB 是有线外设的事实标准。连接到计算机的 USB 设备通常分为许多类型：如键盘、鼠标、视频设备等。这些是使用操作系统的类驱动程序支持的。其中许多也可以在 web 中通过 {{domxref("WebHID API")}} 进行访问。

除了这些标准化的设备之外，还有大量的设备不属于任何类别。这些设备需要自定义驱动程序，并且由于需要机器代码（native code），因此无法从 web 访问。安装这些设备，通常需要在制造商的网站上搜索驱动程序，如果你想在另一台电脑上使用该设备，还必须重复这个过程。

WebUSB 为这些非标准化的 USB 设备服务提供了一种在 web 中可用的方式。这意味着硬件制造商将能够为他们的设备提供一种从 web 访问的方式，而不必提供自己的 API。

当连接新的与 WebUSB 兼容的设备时，浏览器会显示一条包含制造商网站链接的通知。进入网站后，浏览器会弹出提示，请求连接到设备，然后设备就可以使用了。不需要下载和安装驱动程序。

## 接口

- {{domxref("USB")}}
  - : 提供从网页中查找和连接 USB 设备的属性和方法。
- {{domxref("USBConnectionEvent")}}
  - : 当用户代理检测到一个新的 USB 设备已经连接，或从主机断开时，传递给 `USB` {{domxref("USB.connect_event", "connect")}} 或 {{domxref("USB.disconnect_event", "disconnect")}} 事件的事件类型。
- {{domxref("USBDevice")}}
  - : 提供对已配对的 USB 设备的元数据的访问以及控制方法。
- {{domxref("USBInTransferResult")}}
  - : 表示请求数据从 USB 设备传输到 USB 宿主的结果。
- {{domxref("USBOutTransferResult")}}
  - : 表示请求数据从 USB 宿主传输到 USB 设备的结果。
- {{domxref("USBIsochronousInTransferPacket")}}
  - : 表示在一个同步端点上从 USB 设备向 USB 宿主传输数据的请求中的单个包的状态。
- {{domxref("USBIsochronousInTransferResult")}}
  - : 表示请求数据从 USB 设备传输到 USB 宿主的结果。
- {{domxref("USBIsochronousOutTransferPacket")}}
  - : 表示在一个同步端点上从 USB 宿主向 USB 设备传输数据的请求中的单个包的状态。
- {{domxref("USBIsochronousOutTransferResult")}}
  - : 表示请求数据从 USB 宿主传输到 USB 设备的结果。
- {{domxref("USBConfiguration")}}
  - : 提供有关 USB 设备的特定配置及其支持的接口的信息。
- {{domxref("USBInterface")}}
  - : 提供 USB 设备所提供的接口信息。
- {{domxref("USBAlternateInterface")}}
  - : 提供有关 USB 设备所提供的接口的特定配置的信息。
- {{domxref("USBEndPoint")}}
  - : 提供有关 USB 设备所提供的端点的信息。

## 示例

### 访问连接的设备

下面的示例演示了如何使用 {{domxref("USB.requestDevice()")}} 访问连接的 Arduino 设备，其 vendorId 为 `0x2341`。

```js
navigator.usb
  .requestDevice({ filters: [{ vendorId: 0x2341 }] })
  .then((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch((error) => {
    console.error(error);
  });
```

### 查找已连接的所有设备

你可以使用 {{domxref("USB.getDevices()")}} 查找所有已连接的设备。在下面的示例中，展示了当 Arduino 设备连接时，如何将产品和制造商名称打印到控制台。

```js
navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
});
```

## 规范

{{Specifications}}

## 参见

- [通过网页访问 USB 设备](https://developer.chrome.google.cn/docs/capabilities/usb)
