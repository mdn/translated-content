---
title: NavigationDestination：index 属性
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationDestination")}} 接口的 **`index`** 只读属性在 {{domxref("NavigateEvent.navigationType")}} 为 `traverse` 时返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.index", "index")}} 值，否则返回 `-1`。

## 值

表示目标 {{domxref("NavigationHistoryEntry")}} 的 `index` 的数字，或 -1。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.index);
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
