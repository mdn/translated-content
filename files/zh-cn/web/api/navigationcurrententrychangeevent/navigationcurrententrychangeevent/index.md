---
title: NavigationCurrentEntryChangeEvent：NavigationCurrentEntryChangeEvent() 构造函数
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 1bd08bc0642029f650d2da7df5fd1baef09148ef
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

**`NavigationCurrentEntryChangeEvent()`** 构造函数创建一个新的 {{domxref("NavigationCurrentEntryChangeEvent")}} 对象。

## 语法

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### 参数

- `type`
  - : 表示事件类型的字符串。
- `init`
  - : 一个对象，_除了 {{domxref("Event/Event", "Event()")}} 中定义的属性之外_，还具有以下属性：
    - `from`
      - : 一个 {{domxref("NavigationHistoryEntry")}} 对象，代表正在导航到的目标。
    - `navigationType` {{optional_inline}}
      - : 导致导航变化的导航类型。可能的值包括 `push`、`reload`、`replace` 和 `traverse`。默认为 `null`。

### 返回值

新的 {{domxref("NavigationCurrentEntryChangeEvent")}} 对象。

## 示例

开发人员不会手动使用此构造函数。当由于 {{domxref("Navigation.currententrychange_event", "currententrychange")}} 事件触发而调用处理器时，会构造一个新的 `NavigationCurrentEntryChangeEvent` 对象。

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
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
