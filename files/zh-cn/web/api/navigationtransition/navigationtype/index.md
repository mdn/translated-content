---
title: NavigationTransition：navigationType 属性
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationTransition")}} 接口的 **`navigationType`** 只读属性返回正在进行的导航的类型。

## 值

表示正在进行的导航类型的枚举值。

可能的值包括：

- `push`：导航到新位置，导致将新条目推送到历史记录列表中。
- `reload`：重新加载 {{domxref("Navigation.currentEntry")}}。
- `replace`：用新的历史记录条目替换 {{domxref("Navigation.currentEntry")}}。此新条目将重用相同的 {{domxref("NavigationHistoryEntry.key", "key")}}，但分配不同的 {{domxref("NavigationHistoryEntry.id", "id")}}。
- `traverse`：浏览器从一个现有历史记录条目导航到另一个现有历史记录条目。

## 示例

```js
console.log(navigation.transition.navigationType);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
