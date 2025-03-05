---
title: NavigationCurrentEntryChangeEvent：from 属性
slug: Web/API/NavigationCurrentEntryChangeEvent/from
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationCurrentEntryChangeEvent")}} 接口的 **`from`** 只读属性返回导航来源的 {{domxref("NavigationHistoryEntry")}}。

## 值

{{domxref("NavigationHistoryEntry")}} 对象。

## 示例

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.from);
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
