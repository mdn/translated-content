---
title: Navigation：navigateerror 事件
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`navigateerror`** 事件在导航失败后触发。

例如，如果网络中断，则调用任何 {{domxref("Window/fetch", "fetch()")}} 方法处理导航都将失败，错误将被路由到 `navigateerror`。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("navigateerror", (event) => {});

onnavigateerror = (event) => {};
```

## 事件类型

{{domxref("ErrorEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ErrorEvent")}}

## 示例

你可以通过隐藏先前显示的进度指示器来处理成功的导航，如下所示：

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

或者你可能会在失败时显示一条错误消息：

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // 也隐藏指示器
  showMessage(`无法加载页面：${event.message}`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
