---
title: Navigation：activation 属性
slug: Web/API/Navigation/activation
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`activation`** 只读属性返回一个 {{domxref("NavigationActivation")}} 对象，其中包含有关最近跨文档导航的信息，该导航“激活”了此文档。该属性在同文档导航期间将保持不变。

## 值

{{domxref("NavigationActivation")}} 对象，如果当前文档是初始 `about:blank` 文档，则为 `null`。

## 示例

```js
if (navigation.activation) {
  console.log(navigation.activation.entry.url);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
