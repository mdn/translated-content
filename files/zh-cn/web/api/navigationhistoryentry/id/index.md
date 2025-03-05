---
title: NavigationHistoryEntry：id 属性
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`id`** 只读属性返回历史条目的 `id`，如果当前文档未完全激活，则返回空字符串。这是一个唯一的 UA 生成值，始终代表特定历史条目，可用于将其与外部资源（如存储缓存）关联。

这与历史条目的 {{domxref("NavigationHistoryEntry.key", "key")}} 不同。`key` 是一个唯一的 UA 生成值，代表历史条目在条目列表中的位置，而不是条目本身。它用于通过 {{domxref("Navigation.traverseTo()")}} 导航该特定位置。`key` 将被替换列表中条目的其他条目重用（即，如果 {{domxref("NavigateEvent.navigationType")}} 为 `replace`）。

## 值

表示 {{domxref("NavigationHistoryEntry")}} 的 `id` 的字符串。

## 示例

```js
const current = navigation.currentEntry;
console.log(current.id);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
