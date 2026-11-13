---
title: NavigationDestination：sameDocument 属性
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationDestination")}} 接口的 **`sameDocument`** 只读属性在导航到与当前 {{domxref("Document")}} 值相同的 `document` 时返回 `true`，否则返回 `false`。

这对于检查导航是同文档还是跨文档很有用。

## 值

布尔值。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.sameDocument);
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
