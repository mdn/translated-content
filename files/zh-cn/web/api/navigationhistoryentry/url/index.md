---
title: NavigationHistoryEntry：url 属性
slug: Web/API/NavigationHistoryEntry/url
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationHistoryEntry")}} 接口的 **`url`** 只读属性返回此历史记录条目的绝对 URL。如果该条目对应的文档与当前文档不同（例如 `sameDocument` 属性为 `false`），并且该文档是在 {{httpheader("Referrer-Policy")}} 标头设置为 `no-referrer` 或 `origin` 的情况下获取的，则该属性返回 `null`。如果当前文档未完全激活，则返回一个空字符串。

## 值

表示 URL 的字符串或 `null`。

## 示例

```js
const current = navigation.currentEntry;
console.log(current.url);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
