---
title: NavigationTransition：from 属性
slug: Web/API/NavigationTransition/from
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationTransition")}} 接口的 **`from`** 只读属性返回导航过渡来源的 {{domxref("NavigationHistoryEntry")}}。

## 值

一个 {{domxref("NavigationHistoryEntry")}} 对象。

## 示例

```js
console.log(navigation.transition.from);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
