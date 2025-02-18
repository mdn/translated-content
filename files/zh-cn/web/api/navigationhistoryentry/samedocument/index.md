---
title: NavigationHistoryEntry：sameDocument 属性
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`sameDocument`** 只读属性在此历史记录条目与当前 {{domxref("Document")}} 值属于同一 `document` 且当前文档完全处于活动状态时返回 `true`，否则返回 `false`。

## 值

布尔值。

## 示例

```js
const current = navigation.currentEntry;
console.log(current.sameDocument);
// 总是返回 true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
