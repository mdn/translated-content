---
title: NavigationDestination：id 属性
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationDestination")}} 接口的 **`id`** 只读属性在 {{domxref("NavigateEvent.navigationType")}} 为 `traverse` 时返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.id", "id")}} 值，否则返回空字符串。

`id` 是一个唯一的、由 UA 生成的值，始终代表历史记录条目，可用于将历史记录条目与外部资源（如存储缓存）关联起来。

## 值

表示目标 {{domxref("NavigationHistoryEntry")}} 的 `id` 的字符串，或者一个空字符串。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.id);
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
