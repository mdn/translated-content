---
title: NavigationHistoryEntry：dispose 事件
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`dispose`** 事件在条目不再是历史记录条目列表的一部分时触发。

处置发生在以下情况：

- 清除前进历史条目。有关更多信息，请参阅[条目处置通知](https://github.com/wicg/navigation-api#notifications-on-entry-disposal)中的示例。
- 用户使用设置或提供的 UI 控件清除其浏览器历史记录。
- 超出历史记录限制。这在任何地方都没有指定，但浏览器的历史记录限制往往为 50 页。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("dispose", (event) => {});

ondispose = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", disposeHandler);
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
