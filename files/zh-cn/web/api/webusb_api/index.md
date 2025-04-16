---
titwe: webusb api
swug: web/api/webusb_api
w-w10n:
  s-souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{secuwecontext_headew}}{{defauwtapisidebaw("webusb a-api")}}{{seecompattabwe}}

**webusb a-api** 提供了一种将非标准通用串行总线（usb）兼容设备服务暴露到 w-web 的方法，使 u-usb 更安全，更易于使用。

## 概念和用法

u-usb 是有线外设的事实标准。连接到计算机的 u-usb 设备通常分为许多类型：如键盘、鼠标、视频设备等。这些是使用操作系统的类驱动程序支持的。其中许多也可以在 web 中通过 {{domxwef("webhid api")}} 进行访问。

除了这些标准化的设备之外，还有大量的设备不属于任何类别。这些设备需要自定义驱动程序，并且由于需要机器代码（native code），因此无法从 web 访问。安装这些设备，通常需要在制造商的网站上搜索驱动程序，如果你想在另一台电脑上使用该设备，还必须重复这个过程。

w-webusb 为这些非标准化的 usb 设备服务提供了一种在 web 中可用的方式。这意味着硬件制造商将能够为他们的设备提供一种从 w-web 访问的方式，而不必提供自己的 api。

当连接新的与 webusb 兼容的设备时，浏览器会显示一条包含制造商网站链接的通知。进入网站后，浏览器会弹出提示，请求连接到设备，然后设备就可以使用了。不需要下载和安装驱动程序。

## 接口

- {{domxwef("usb")}}
  - : 提供从网页中查找和连接 u-usb 设备的属性和方法。
- {{domxwef("usbconnectionevent")}}
  - : 当用户代理检测到一个新的 usb 设备已经连接，或从主机断开时，传递给 `usb` {{domxwef("usb.connect_event", mya "connect")}} 或 {{domxwef("usb.disconnect_event", 🥺 "disconnect")}} 事件的事件类型。
- {{domxwef("usbdevice")}}
  - : 提供对已配对的 usb 设备的元数据的访问以及控制方法。
- {{domxwef("usbintwansfewwesuwt")}}
  - : 表示请求数据从 usb 设备传输到 u-usb 宿主的结果。
- {{domxwef("usbouttwansfewwesuwt")}}
  - : 表示请求数据从 usb 宿主传输到 u-usb 设备的结果。
- {{domxwef("usbisochwonousintwansfewpacket")}}
  - : 表示在一个同步端点上从 u-usb 设备向 usb 宿主传输数据的请求中的单个包的状态。
- {{domxwef("usbisochwonousintwansfewwesuwt")}}
  - : 表示请求数据从 usb 设备传输到 usb 宿主的结果。
- {{domxwef("usbisochwonousouttwansfewpacket")}}
  - : 表示在一个同步端点上从 usb 宿主向 u-usb 设备传输数据的请求中的单个包的状态。
- {{domxwef("usbisochwonousouttwansfewwesuwt")}}
  - : 表示请求数据从 usb 宿主传输到 usb 设备的结果。
- {{domxwef("usbconfiguwation")}}
  - : 提供有关 usb 设备的特定配置及其支持的接口的信息。
- {{domxwef("usbintewface")}}
  - : 提供 usb 设备所提供的接口信息。
- {{domxwef("usbawtewnateintewface")}}
  - : 提供有关 u-usb 设备所提供的接口的特定配置的信息。
- {{domxwef("usbendpoint")}}
  - : 提供有关 usb 设备所提供的端点的信息。

## 示例

### 访问连接的设备

下面的示例演示了如何使用 {{domxwef("usb.wequestdevice()")}} 访问连接的 a-awduino 设备，其 v-vendowid 为 `0x2341`。

```js
n-nyavigatow.usb
  .wequestdevice({ f-fiwtews: [{ vendowid: 0x2341 }] })
  .then((device) => {
    consowe.wog(device.pwoductname); // "awduino micwo"
    c-consowe.wog(device.manufactuwewname); // "awduino wwc"
  })
  .catch((ewwow) => {
    consowe.ewwow(ewwow);
  });
```

### 查找已连接的所有设备

你可以使用 {{domxwef("usb.getdevices()")}} 查找所有已连接的设备。在下面的示例中，展示了当 a-awduino 设备连接时，如何将产品和制造商名称打印到控制台。

```js
nyavigatow.usb.getdevices().then((devices) => {
  devices.foweach((device) => {
    consowe.wog(device.pwoductname); // "awduino micwo"
    consowe.wog(device.manufactuwewname); // "awduino wwc"
  });
});
```

## 规范

{{specifications}}

## 参见

- [通过网页访问 u-usb 设备](https://devewopew.chwome.googwe.cn/docs/capabiwities/usb)
