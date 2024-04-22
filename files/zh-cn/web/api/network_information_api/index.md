---
title: 网络信息 API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

**网络信息 API** 提供关于系统连接的一般连接类型（如“wifi”、“cellular”等）的信息。应用程序可以根据用户的连接为用户展现不同清晰度的内容。

该接口由一个单例 {{domxref("NetworkInformation")}} 对象组成，其实例由 {{domxref("Navigator.connection")}} 属性或 {{domxref("WorkerNavigator.connection")}} 属性返回。

## 接口

- {{domxref("NetworkInformation")}}
  - : 提供设备用来与网络通信的连接信息，并在连接类型发生变化时为脚本提供通知的方式。`NetworkInformation` 接口不能被实例化。它可以通过 {{domxref("Navigator")}} 接口或 {{domxref("WorkerNavigator")}} 接口访问。

### 其他接口的扩展

- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("NetworkInformation")}} 对象，其包含有关设备的网络连接的信息。
- {{domxref("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : 提供一个 {{domxref("NetworkInformation")}} 对象，其包含有关设备的网络连接的信息。

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

连接对象对于决定是否预装占用大量带宽或内存的资源很有用。该示例将在页面加载后不久被调用，以检查可能不需要预加载视频的连接类型。如果发现有蜂窝网络连接，那么 `preloadVideo` 标志被设置为 `false`。为了简单和清楚起见，此例子仅测试了一种连接类型。真实世界的用例可能会使用 switch 语句或其他一些方法来检查 {{domxref("NetworkInformation.type")}} 的所有可能值。无论 `type` 值如何，你都可以通过 {{domxref("NetworkInformation.effectiveType")}} 属性获得连接速度的估计值。

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

- [在线事件和离线事件](/zh-CN/docs/Web/API/Navigator/onLine)
