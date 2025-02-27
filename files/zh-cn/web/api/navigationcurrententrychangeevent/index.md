---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`NavigationCurrentEntryChangeEvent`** 接口是 {{domxref("Navigation/currententrychange_event", "currententrychange")}} 事件的事件对象，该事件在 {{domxref("Navigation.currentEntry")}} 发生更改时触发。

此事件将在以下情况下触发：同一文档导航（例如 {{domxref("Navigation.back", "back()")}} 或 {{domxref("Navigation.traverseTo", "traverseTo()")}}）、替换（即 {{domxref("Navigation.navigate", "navigate()")}} 调用，其中 `history` 设置为 `replace`），或其他更改条目状态的调用（例如 {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}，或{{domxref("History API", "历史记录 API", "", "nocode")}} 的 {{domxref("History.replaceState()")}}）。

此事件在导航提交后触发，这意味着可见 URL 已更改，并且已发生 {{domxref("NavigationHistoryEntry")}} 更新。它对于从使用较旧的 API 特性（如 {{domxref("Window/hashchange_event", "hashchange")}} 或 {{domxref("Window/popstate_event", "popstate")}} 事件）迁移非常有用。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("NavigationCurrentEntryChangeEvent.NavigationCurrentEntryChangeEvent", "NavigationCurrentEntryChangeEvent()")}} {{Experimental_Inline}}
  - : 创建一个新的 `NavigationCurrentEntryChangeEvent` 对象实例。

## 实例属性

_从其父级 {{DOMxRef("Event")}} 继承属性。_

- {{domxref("NavigationCurrentEntryChangeEvent.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回导航来源的 {{domxref("NavigationHistoryEntry")}}。
- {{domxref("NavigationCurrentEntryChangeEvent.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回导致改变的导航的类型。

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
