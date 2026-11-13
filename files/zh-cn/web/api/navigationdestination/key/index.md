---
title: NavigationDestination：key 属性
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationDestination")}} 接口的 **`key`** 只读属性在 {{domxref("NavigateEvent.navigationType")}} 为 `traverse` 时返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.key", "key")}} 值，否则返回空字符串。

`key` 是一个唯一的、由 UA 生成的值，表示历史条目在历史条目列表中的位置，用于通过 {{domxref("Navigation.traverseTo()")}} 导航到历史记录中的此位置。它将被替换列表中条目的其他条目重用（即，如果 {{domxref("NavigateEvent.navigationType")}} 为 `replace`）。

## 值

表示目标 {{domxref("NavigationHistoryEntry")}} 的 `key` 的字符串，或者一个空字符串。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.key);
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
