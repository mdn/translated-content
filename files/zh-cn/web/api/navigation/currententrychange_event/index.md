---
title: Navigation：currententrychange 事件
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`currententrychange`** 事件在 {{domxref("Navigation.currentEntry")}} 发生更改时触发。

此事件将会在如下情况发生时触发：

- 同文档导航（例如 {{domxref("Navigation.back", "back()")}} 或 {{domxref("Navigation.traverseTo", "traverseTo()")}}）。

- 替换（即 {{domxref("Navigation.navigate", "navigate()")}} 调用，并将 `history` 参数设置为 `replace`）。

- 更改条目状态的其他调用（例如 {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}，或 {{domxref("History API", "History API", "", 1)}} 的 {{domxref("History.replaceState()")}}）。

此事件在导航提交后触发，这意味着可见 URL 已更改且 {{domxref("NavigationHistoryEntry")}} 已更新。它对于从使用较旧的 API 功能（如 {{domxref("Window/hashchange_event", "hashchange")}} 事件或 {{domxref("Window/popstate_event", "popstate")}} 事件）进行迁移非常有用。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("currententrychange", (event) => {});

oncurrententrychange = (event) => {};
```

## 事件类型

{{domxref("NavigationCurrentEntryChangeEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## 示例

导航数据上报：

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

设置每个条目事件：

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", genericDisposeHandler);
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
