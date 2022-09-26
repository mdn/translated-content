---
title: 网络状况 API
slug: Web/API/Network_Information_API
---

{{SeeCompatTable}}

网络状态 API 可以获取到系统的网络连接信息，比如说连接方式是 WiFi 还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。该 API 是由 {{domxref("NetworkInformation")}} 接口和 {{domxref("Navigator")}} 接口上新增的一个 {{domxref("Navigator.connection", "connection")}} 属性组成的。

## 侦测连接状态变化

下面是一个侦测用户设备连接状态变化的例子。

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.type;

function updateConnectionStatus() {
  console.log("设备的网络连接从" + type + "变成了" + connection.type);
}

connection.addEventListener('change', updateConnectionStatus);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Network Information API Specification](http://w3c.github.io/netinfo/)
- [Online and offline events](/zh-CN/docs/Online_and_offline_events)
- {{domxref("window.navigator.connection")}}
