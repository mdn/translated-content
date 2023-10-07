---
title: 网络信息 API
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

网络信息 API（Network Information API）提供关于系统连接的一般连接类型的信息（如“wifi”、“cellular”等）。应用程序可以根据此信息为用户展现不同清晰度的内容。

该接口由一个 {{domxref("NetworkInformation")}} 对象组成，其实例由 {{domxref("Navigator.connection")}} 属性返回。

{{AvailableInWorkers}}

## 接口

- {{domxref("NetworkInformation")}}
  - : 提供设备用来与网络通信的连接信息，并在连接类型发生变化时为脚本提供通知的方式。`NetworkInformation` 接口不能被实例化。它可以通过 {{domxref("Navigator")}} 接口访问。

## 示例

### 侦测连接状态变化

下面是一个侦测用户设备连接状态变化的例子。

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `设备的网络连接从 ${type} 变为了 ${navigator.connection.effectiveType}`,
  );
  type = navigator.connection.effectiveType;
}

connection.addEventListener("change", updateConnectionStatus);
```

### 预加载大型资源

连接对象对于决定是否预装占用大量带宽或内存的资源很有用。这个示例将在页面加载后不久被调用，以检查预加载视频可能不可取的连接类型。如果发现有蜂窝网络连接，那么 `preloadVideo` 标志被设置为 `false`。为了简单明了，这个例子只测试了一种连接类型。真实世界的用例可能会使用 switch 语句或其他方法来检查 {{domxref("NetworkInformation.type")}} 的所有可能值。无论 `type` 值如何，你都可以通过 {{domxref("NetworkInformation.effectiveType")}} 属性获得对连接速度的估计。

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在线（online）和离线（offline）事件](/zh-CN/docs/Web/API/Navigator/onLine)
