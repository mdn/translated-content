---
title: Window：navigation 属性
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 38d151f66619ac3c8f527b9e4dd402b9a3cf32dd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`navigation`** 只读属性返回当前 `window` 关联的 {{domxref("Navigation")}} 对象。

这是 {{domxref("Navigation API", "", "", "1")}} 的入口点。

## 值

{{domxref("Navigation")}} 对象实例。

## 示例

```js
let currentNavEntries = window.navigation.entries();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [新型客户端路由：Navigation API](https://developer.chrome.google.cn/docs/web-platform/navigation-api)
- [Navigation API 解释](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的 [Navigation API 在线演示](https://gigantic-honored-octagon.glitch.me/)
