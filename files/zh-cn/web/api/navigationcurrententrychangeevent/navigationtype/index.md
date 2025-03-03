---
title: NavigationCurrentEntryChangeEvent：navigationType 属性
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationCurrentEntryChangeEvent")}} 接口的 **`navigationType`** 只读属性返回导致导航更改的导航类型。如果更改是由于 {{domxref("Navigation.updateCurrentEntry()")}} 而发生的，则该属性可能为 `null`。

## 值

表示导航类型的枚举值。可能的值包括：

- `push`：导航到新位置，导致新条目被推送到历史记录列表中。
- `reload`：重新加载 {{domxref("Navigation.currentEntry")}}。
- `replace`：用新历史记录条目替换 {{domxref("Navigation.currentEntry")}}。此新条目将重用相同的 {{domxref("NavigationHistoryEntry.key", "key")}}，但分配不同的 {{domxref("NavigationHistoryEntry.id", "id")}}。
- `traverse`：浏览器从一个现有历史记录条目导航到另一个现有历史记录条目。

## 示例

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
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
