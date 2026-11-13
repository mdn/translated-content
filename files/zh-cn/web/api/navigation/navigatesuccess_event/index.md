---
title: Navigation：navigatesuccess 事件
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`navigatesuccess`** 事件在导航成功完成后触发。

如果导航被拦截，则这将在你的 {{domxref("NavigateEvent.intercept", "intercept()")}} 处理器返回的任何 promise 都被兑现后发生。{{domxref("NavigationTransition.finished")}} 的 promise 也将同时被兑现。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("navigatesuccess", (event) => {});

onnavigatesuccess = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

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
