---
title: Navigator：onLine 属性
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

返回浏览器的在线状态。该属性返回一个布尔值，`true` 表示在线，`false` 表示离线。当浏览器连接网络状态发生变化时，该属性会发送更新。更新发生在用户点击链接或脚本请求远程页面时。例如，当用户在失去互联网连接后立即点击链接时，该属性会返回 `false`。

不同浏览器对该属性的实现方式有所不同。

在 Chrome 和 Safari 中，如果浏览器无法连接到本地局域网（LAN）或路由器，则该浏览器处于离线状态；而所有其他情况下，该属性都会返回 `true`。因此，虽然你可以根据浏览器返回 `false` 值来判断其处于离线状态，但你却不能断定 `true` 值就一定意味着浏览器可以访问互联网。例如，在运行虚拟化软件的计算机上，由于虚拟以太网适配器始终处于“已连接”状态，你可能会得到假阳性的结果。因此，如果你需要准确判断浏览器的联网状态，建议你开发额外的检测手段。

在 Firefox 中，将浏览器切换到离线模式会发送一个 `false` 值。在 Firefox 41 之前，所有其他条件都返回一个 `true` 值；在 Windows 上对 Nightly 68 进行实际行为测试表明，它只会像 Chrome 和 Safari 一样查找 LAN 连接，从而产生假阳性的结果。

你可以通过监听 [`online`](/zh-CN/docs/Web/API/Window/online_event) 和 [`offline`](/zh-CN/docs/Web/API/Window/offline_event) 事件来观察网络状态的变化。

## 值

一个布尔值。

## 示例

### 基础用法

要检查你是否在线，请查询 `window.navigator.onLine`，如下所示：

```js
if (navigator.onLine) {
  console.log("在线");
} else {
  console.log("离线");
}
```

如果浏览器不支持 `navigator.onLine` 属性，则上述示例始终会返回 `false` 或 `undefined`。

### 监听网络状态改变

要监听网络状态变化，可以使用 [`addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法为 `window.online` 和 `window.offline` 事件添加事件监听器，如下所示：

```js
window.addEventListener("offline", (e) => {
  console.log("离线");
});

window.addEventListener("online", (e) => {
  console.log("在线");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
